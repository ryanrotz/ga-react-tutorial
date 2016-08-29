// Constants
// adding the @toDoApp/ will prevent errors if you for some reason use the variable 'SOME_CONTSTANT' somewhere else in your files
const SOME_CONSTANT = '@toDoApp/SOME_CONSTANT';
const UPDATE_LIST_ITEM = '@toDoApp/UPDATE_LIST_ITEM'
const ADD_ITEM_TO_LIST = '@toDoApp/ADD_ITEM_TO_LIST';
const COMPLETE_LIST_ITEM = '@toDoApp/COMPLETE_LIST_ITEM';

// Actions
// example Action:
// technically the return object is the action and the function is the action creator
export function completeListItem(index) {
  return {
    type: COMPLETE_LIST_ITEM,
    index
  }
}


export function addItemToList() {
  return {
    type: ADD_ITEM_TO_LIST
  }
}

export function updateListItem(value) {
  return {
    type: UPDATE_LIST_ITEM,
    value
  }
}

// function someAction() {
//   return {
//     type: SOME_CONSTANT,
//     thing1: foo,
//     thing2: bar,
//   }
// }

// Reducer

const initialState = {
  number: 0,
  listItems: [],
  newListItem: ''
}


export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case (SOME_CONSTANT):
      // do soemthing to state here
      break;
    case (UPDATE_LIST_ITEM):
      return Object.assign({},
        state, 
        {
          newListItem: action.value   // refers to the updateListItem function above
        });
    case (ADD_ITEM_TO_LIST):
      return Object.assign({},
        state,
        {
        // TAKEN FROM ToDoContainer.js addItemToList function
          newListItem: '',
        // the '...' iterates through array listItems, add the newListItem, and return the new, bigger listItems array
        // we'll make isComplete true in the future to cross out list items
        listItems: [...state.listItems, { item: state.newListItem, isComplete: false } ]
        });
    case (COMPLETE_LIST_ITEM):
      return Object.assign({},
        state,
        {
          listItems: [
        // making a copy of the listItems array
          ...state.listItems.slice(0, action.index),
          // to create a delete function, use the code in this function but delete the line below. (see notes)
          { item: state.listItems[action.index].item, isComplete: !state.listItems[action.index].isComplete},
          ...state.listItems.slice(action.index + 1)
        ]
        });
    default:
      return state;
  }
}