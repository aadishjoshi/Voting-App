import { Meteor } from 'meteor/meteor';
import {FoodItems} from './../imports/api/fooditem';
Meteor.startup(() => {

  FoodItems.insert({
    name: 'Apple',
    score: 0
  });

  FoodItems.insert({
    name: 'Orange',
    score: 0
  });

  FoodItems.insert({
    name: 'Banana',
    score: 0
  });

  FoodItems.insert({
    name: 'PineApple',
    score: 0
  });
});
