import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {FoodItems} from './../imports/api/fooditem';
import App from './../imports/ui/App';

Meteor.startup(function(){

  Tracker.autorun(function(){
      let fooditems = FoodItems.find().fetch();
      let title = 'Voting App';
      ReactDOM.render(<App title={title} fooditems={fooditems}/>,document.getElementById('app'));
  });

});
