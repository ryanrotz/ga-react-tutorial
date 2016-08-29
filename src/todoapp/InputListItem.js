import React, { Component } from 'react';
// prop and context are objects (the arguments) but instead we're going to call it listitem
const InputListItem = ({ listitem, updateListItem, addItemToList }) => {
// same as saying 
// (props) -- the argument
// var listItem = props.listItem  - called destructuring
  return (
      <form onSubmit={addItemToList}>
        <div
          className="form-group">
          <label
            htmlFor="listInput">
            Add List Item
          </label>
          <input
            type="text"
            className="form-control"
            id="listItemInput"
            placeholder="Add new todo"
            value={listitem}
            onChange={updateListItem}
          />
          <button
            className="btn btn-primary">
            Add Item
          </button>
        </div>
      </form>
    )
}

// This helps show errors about propTypes in the console
InputListItem.propTypes = {
  listItem: React.PropTypes.string,
  updateListItem: React.PropTypes.func.isRequired
}

export default InputListItem;