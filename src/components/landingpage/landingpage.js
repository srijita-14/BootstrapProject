import React from 'react';

import { Service, About,Featuring } from './dependencies';

let aboutContent = {
  Introduction: "Happy to meet your need!",
  Heading:"We care about you.",
  Body:"Happy Booking understand the value of your money and desire to travel.To make your train booking more convenient,we are pleased to tie up with IRCTC.",
  Head1:"PNR Status",
  body1:"Check the pnr status of the assigned railway ticket!",
  Head2:"Live Station",
  body2:"Get to know about the delays and arrivals of Indian Railway Train schedule.",
  mainbody:"Railway is the most affordable way to travel in India and as a trustworthy travel brand; HappyBooking understands the value of your money and desire to travel. To make your train ticket booking more convenient, we are pleased to tie up IRCTC. Customer can book IRCTC train tickets in the most convenient way with our website. The best thing is that you will get the cheapest train tickets for your preferred locations through HappyBooking as we don’t charge convenience fee train ticket booking as well. So, get ready for amazing offers on railway booking and plan your trip soon."
};

let aboutservice ={
  head1:"Happy Booking is one of the topmost travel companies of India and is a trusted name in Indian travel industry. It is also known for providing the best travel deals to the travelers. Being a strong network of 52,752 travel agents (as on September 30,2019) and having more than 9.27 million direct customers, the company can satisfy your all travel needs",
  head2:"Happy to help you.Please contact +91876765447.",
  top1:"Having problem?",
  top2:"New user Offer",
  top3:"HDFC Offer",
  top4:"Mobikwik Offer",
  top5:"World Tour",
  top6:"Our Travel blog",
  str1:"Register fast and get discount!",
  str2:"Enjoy 10% off on your first booking.",
  str3:"Huge discount on usage of this debit card!",
  str4:"Enjoy flat 23% Mobikwik cashback!",
  str5:"Grab the opportunity by being lucky customer.One time offer!",
  str6:"Check out the latest travel blog tips and guides about how to book the cheapest trains and its tickets, travel trip, and favorite holiday destinations.!"
};

let aboutFeature ={
    feature1:"24/7 Customer Support",
    string1:"we are here to help whenever you need us.",
    feature2:"Trusted by members.",
    string2:"we have earned 4.8/5 stars on playstore",
    feature3:"Secure Booking Process",
    string3:"Your personal information is secured using the latest industry standards.",
    feature4:"9.27 Million Happy Members",
    string4:"Millions of members worldwide rely on HappyBooking.com for their travel needs."
};

function LandingPage() {
  return (
    <React.Fragment>
      <Service content={aboutservice} />
      <About content={aboutContent}/>
      <Featuring content={aboutFeature}/>
    </React.Fragment>
  );
}

export default LandingPage;
