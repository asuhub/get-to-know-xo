// init router
const router = require('express').Router();
const People = require('../db/models').People;

// Shortcut for getting the correct user on a request that contains :userId
router.param('userId', function(req, res, next, userId){
  People.findOne( { where: { id: userId } })
  .then( foundUser => {
    req.user = foundUser;
    next(); // called next() here so the middleware knows to go to the next route for request completion
  })
	.catch(next); // error handling
});

// GET all people in the database
router.get('/people', (req, res, next) => {
  People.findAll()
  .then( people => res.status(200).send(people))
  .catch(next);
});

// POST/create a new person
router.post('/people', (req, res, next) => {
  People.create(req.body)
  .then( createdPerson => res.status(201).send(createdPerson))
  .catch(next);
});

// // GET the object created in most previous create
// router.get('/people/latest', (req, res, next) => {
//   People.findOne({
//     where: {
//     }
//   })
//   .then( createdPerson => res.status(201).send(createdPerson))
//   .catch(next);
// });

// GET a specific user
router.get('/people/:userId', (req, res, next) => {
  const foundUser = req.user;
  if (!foundUser){
    res.sendStatus(204);
  } else {
    res.status(200).send(foundUser);
  }
});

// PUT/modify an existing user
router.put('/people/:userId', (req, res, next) => {
  const userToUpdate = req.foundUser;
  userToUpdate.update(req.body)
  .then( updatedUser => res.status(201).send(updatedUser))
  .catch(next);
});

// Delete a specific user
router.delete('/people/:userId', (req, res, next) => {
  const foundUser = req.user;
  if (!foundUser) {
    res.sendStatus(204);
  }
  foundUser.destroy()
  .then( () => res.sendStatus(204))
  .catch(next);
});


module.exports = router;
