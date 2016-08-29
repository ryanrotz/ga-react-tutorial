import React, {Component} from 'react';
// import './css.css'; // example
// const listStyle = {
//   marginRight: '10px'
// }

// Cody defaults to stateless components, unless he needs a lifecycel method
const ToDoList = ({list, completeListItem}) => {
  const createList = () => list.map((element, index) => {
    return (
        <li
        style={{ textDecoration: element.isComplete ? 'line-through' : 'none' }}
        onClick={completeListItem.bind(null, index)}
        key={index}
        >{element.item}</li>
      )
  });

  return (
    <div>
      <ul>
        {
          createList()
        }
      </ul>
    </div>  
  )
}

export default ToDoList;