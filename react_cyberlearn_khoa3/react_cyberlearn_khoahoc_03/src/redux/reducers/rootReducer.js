import { combineReducers } from "redux";
import ToDoListReducer from "./ToDoListReducer";
import FakebookReducer from "./FakeBookReducer";

export const rootReducer = combineReducers({
    ToDoListReducer,
    FakebookReducer
})