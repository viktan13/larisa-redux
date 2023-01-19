import {v4 as uuidv4} from 'uuid';

const initialState = {
    todoList: [
        {
            id: uuidv4(),
            title: 'Learn JS',
            isDone: true
        },
        {
            id: uuidv4(),
            title: 'Learn React',
            isDone: false
        },
        {
            id: uuidv4(),
            title: 'Get a Job!!!',
            isDone: false
        },
    ],
    appHeader: 'ToDo List',
    version: '1.1.1',
    menu: ['Home', 'Todo List', 'Contacts', 'Settings', 'About'],
}

const reducer = (state=initialState, action) => {
   switch(action.type) {
       case 'ADD_NEW_TASK':
           return {
               ...state,
               todoList: [...state.todoList, {
                   id: uuidv4(),
                   title: action.payload,
                   isDone: false,
               }]
           };

       case 'DELETE_TASK':
           const newList = state.todoList.filter(el => el.id !== action.payload);
           return {
               ...state,
               todoList: newList,
           }

       default:
           return state;
   }
}

export default reducer;