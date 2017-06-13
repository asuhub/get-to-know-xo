import React from 'react';
import Card from '../card/card.component.js';

const cards = [
    { picture: '/img/examplepic1.jpg', name: 'Stephanie Manwaring', title: 'Software Engineer', yoursTruly: 'Mountain loving, NYC street cycling, nape-cut having, techy with a twist' },
    { picture: '/img/examplepic2.jpg', name: 'Rachel Miller', title: 'Financial Manager', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
    { picture: '/img/examplepic3.jpg', name: 'Graci Chen', title: 'Vice President Engineering', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
    { picture: '/img/examplepic4.jpg', name: 'Elliot Cheney', title: 'Help Desk Director', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
    { picture: '/img/examplepic5.jpg', name: 'Jeff Wayne', title: 'Customer Service Rep', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
    { picture: '/img/examplepic6.jpg', name: 'Lucinda Jacob', title: 'Senior Accountant', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
    { picture: '/img/examplepic7.jpg', name: 'George Taveras', title: 'Financial Advisor', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
    { picture: '/img/examplepic8.jpg', name: 'Jessica Wallace', title: 'Accountant', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
    { picture: '/img/examplepic9.jpg', name: 'Logan Miles', title: 'Finance Specialist', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
    { picture: '/img/examplepic10.jpg', name: 'Buster Bluth', title: 'Social Media Specialist', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
    { picture: '/img/examplepic11.jpg', name: 'Greg Jefferson', title: 'Designer', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
    { picture: '/img/examplepic12.jpg', name: 'Liam Cyrus', title: 'Designer', yoursTruly: 'Mountain loving, burrito eating, coffee drinking techy' },
];

const Cards = () => (
    <div className="row">
        {cards.map((person) => <Card className="col-6" src={person.picture} name={person.name} tile={person.title} yoursTruly={person.yoursTruly} title={person.title}/>)}
    </div>
);

export default Cards;

