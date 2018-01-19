import React from 'react';
import TitleBar from './TitleBar';
import FoodItemList from './FoodItemList';


export default class App extends React.Component {
  render(){
    return (
      <div>
      <TitleBar title= {this.props.title} subtitle="©www.aadishjoshi.com"/>
      <div className='wrapper'>
      <FoodItemList fooditems={this.props.fooditems}/>
      </div>
      </div>
    );
  }
}
