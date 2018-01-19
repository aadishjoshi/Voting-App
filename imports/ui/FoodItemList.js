import React from 'react';
import FlipMove from 'react-flip-move';
import Food from './Food';

export default class PlayerList extends React.Component {
    renderFood(){
        return this.props.fooditems.map(function(fooditems){
          return <Food key={fooditems._id} fooditems={fooditems}/>;
          // return <Player key={player._id}/>;
        });
      }

    render(){
      return (
        <FlipMove duration={750} easing="ease-out">
        {this.renderFood()}
        </FlipMove>
      );
    }
}
