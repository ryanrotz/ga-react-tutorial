import React from 'react';
import InputListItem from './InputListItem';
import ToDoList from './ToDoList';
import { Link} from 'react-router';
import { connect } from 'react-redux';
// import { updateListItem, addItemToList } from './toDoModule';
import * as actions from './toDoModule';  // can be written as this instead of above

// var React = require('react');  

class ToDoContainer extends React.Component {
  // componentWillMount() {
  //   // we don't need this line because es6's hash rocker =>
  //   // if it doesn't work though, use this line.
  //   // this.incrimentByOne = this.incrimentByOne.bind(this);

  //   this.setState({
  //     number: 0,
  //     listItems: [],
  //     newListItem: ''
  //   })
  // }

  // incrimentByOne = () => {
  //   // Arrow function
  //   this.setState((prevState)=>{
  //     return {
  //       number: prevState.number + 1
  //     }  
  //   })
  // }


  updateListItem = (event) => {
    // this.setState({
    //   newListItem: event.target.value
    // })

    this.props.updateListItem(event.target.value);
  }

  // method
  addItemToList = (event) => {
    event.preventDefault();
    this.props.addItemToList();
    // (prevState => {
    //   return {
    //   //   newListItem: '',
    //   //   // the '...' iterates through array listItems, add the newListItem, and return the new, bigger listItems array
    //   //   // we'll make isComplete true in the future to cross out list items
    //   //   listItems: [...prevState.listItems, { item: prevState.newListItem, isComplete: false } ]
    //   // }
    // });
  }

  completeListItem = (index) => {
    this.props.completeListItem(index);
    // this.setState(prevState => {
    //   return {
    //     // listItems: [
    //     // // making a copy of the listItems array
    //     //   ...prevState.listItems.slice(0, index),
    //     //   // to create a delete function, use the code in this function but delete the line below. (see notes)
    //     //   { item: prevState.listItems[index].item, isComplete: !prevState.listItems[index].isComplete},
    //     //   ...prevState.listItems.slice(index + 1)
    //     // ]
    //   };
    // });
  }


  // must have render
  render() {
  // render always returns JSX
    console.log(this.props)
    return (
      <div className="row">
       {/*  <div>Hello World!
           <div onClick={this.incrimentByOne}>
             { this.state.number }
           </div>
         </div>
        */}
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr/>
              <InputListItem
               listItem={this.props.toDoApp.newListItem}
               updateListItem={this.updateListItem}
               addItemToList={this.addItemToList}
                />
                <ToDoList 
                list={this.props.toDoApp.listItems}
                completeListItem={this.completeListItem}
                 />
              <Link to ="sign-up">You can't sign up but you can try</Link>      
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

    toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateListItem: (value) => dispatch(actions.updateListItem(value)),
    addItemToList: (item) => dispatch(actions.addItemToList(item)),
    completeListItem: (index) => dispatch(actions.completeListItem(index))

  }; // here we'll soon be mapping actions to props
}

// you can only have one 'export defautl but you can have many other 'export'
export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);
// module.exports = { ToDoContainer };