const db = require('../server/db');
const People = require('../server/db/models').People;
// Unit testing libraries
const chai = require('chai');
const expect = chai.expect;
const chalk = require('chalk');
// Route testing for routes
const app = require('../server/app');
const supertest = require('supertest');
const agent = supertest.agent(app);

describe('People', () => {
  before('wait for the db', (done) => {
    db.sync()
      .then(() => {
        console.log(chalk.yellow('Sync success'));
        done();
      })
      .catch(done);
  });

  after('clear db', () => db.didSync);

  const validPerson = {
    name: 'Stephanie',
    favoriteCity: 'Manhattan'
  };

  const invalidPerson = {
    name: 'Stephanie'
  };

  describe('Model: ', () => {

    describe('People Validations: ', () => {

      it('successfully creates a valid person', () => {
        return People.create(validPerson)
          .then(createdPerson => {
            expect(createdPerson.dataValues).to.include.keys('name');
            expect(createdPerson.dataValues).to.include.keys('favoriteCity');
          })
          .catch(err => console.error(err));
      });

      it('reports a validation error for invalid person entries', () => {
        return Person.create(invalidPerson)
          .then(error => {
            expect(error).to.be.instanceOf(Error);
            expect(error.message).to.contain('invalid input');
          })
          .catch(err => console.log(chalk.green('You got a validation error')));
      });

    });
  });

  describe('Routes: ', () => {

    before('create a fake board', () => {
      return People.create({
        name: 'Stephanie',
        favoriteCity: 'Brooklyn',
        id: 200
      })
      .then(ok => console.log(chalk.yellow('fake person created')))
      .catch(err => console.error(err));
    });

    after('delete that fake person', () => {
      return People.findById(200)
        .then(person => person.destroy())
        .then(ok => console.log(chalk.green('person deleted')))
        .catch(err => console.error(err));
    });

    const validPersonB = {
      id: 400,
      name: 'Tony',
      favoriteCity: 'Milan'
    };

      it('POST /api/people >> creates a person and returns that created person', (done) => {
        agent.post('/api/')
          .set('Content-type', 'application/json')
          .send(validPersonB)
          .expect(201)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body).to.include({ name: 'Tony' });
            expect(res.body).to.include({ favoriteCity: 'Milan' });
            done();
          });
      });

      it('GET /api/people >> returns all the people in the database', (done) => {
        agent.get('/api/people')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body[0]).to.include({ name: 'Stephanie' });
            expect(res.body).to.have.length(1);
            done();
          });
      });

      it('GET /api/people/:userID >> sends a 204 if it a non-valid id is passed in', (done) => {
        agent.get('/api/people/hello')
          .expect(204)
          .end((err, res) => {
            if (err) return done(err);
            done();
          });
      });

        it('GET /api/people/:userId >> returns a valid person', (done) => {
          agent.get('/api/people/200')
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.name).to.be.equal('Stephanie');
            done();
          });
      });

        it('PUT /api/:userId >> sends a 204 if the person does not exist', (done) => {
          agent.get('/api/8675309')
          .expect(204)
          .end((err, res) => {
            if (err) return done(err);
            done();
          });
      });

      xit('PUT /api/:userId >> updates the user', (done) => {
        agent.get('/api/200')
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.name).to.be.equal('Stephanie');
          done();
        });
      });

      it('DELETE /api/people/:userId >> sends a 204 if hte person does not exist', (done) => {
        agent.delete('/api/people/8675309')
        .expect(204)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
      });

      it('DELETE /api/people/:userId >> deletes a user', (done) => {
        agent.delete('/api/people/200')
        .expect(204);
      });
  });
});
