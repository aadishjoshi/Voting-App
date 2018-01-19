import React from 'react';
import {FoodItems} from './../api/fooditem';
export default class Food extends React.Component {
  render(){
        return (
          <div key={this.props.fooditems._id} className="item">
          <div className="foodie">
            <div>
              <h3 className="foodie_name">{this.props.fooditems.name}</h3>
              <p className="foodie_stats">
                {this.props.fooditems.score} points
              </p>
            </div>

            <div className="foodie_actions">
              <button className="button button--round" onClick = {()=>{
                FoodItems.update({_id:this.props.fooditems._id},{
                    $inc: {score: 1}
                });
              }}>+1</button>
              <button className="button button--round" onClick = {()=>{
                FoodItems.update({_id:this.props.fooditems._id},{
                    $inc: {score: -1}
                });
              }}>-1</button>
              <button className="button button--round" onClick = {()=>{
              FoodItems.remove(this.props.fooditems._id);
            }}>X</button>
            </div>

          </div>
          </div>
        );
  }
}
