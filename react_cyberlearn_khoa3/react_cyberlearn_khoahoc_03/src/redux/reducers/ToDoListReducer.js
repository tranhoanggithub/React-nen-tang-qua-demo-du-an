import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Themes/ToDoListDarkTheme"
import { ToDoListLightTheme } from "../../JSS_StyledComponent/Themes/ToDoListLightTheme"
import { add_task } from "../types/ToDoListTypes"



const initialState ={
    themeToDoList: ToDoListLightTheme,
    taskList:[
        {id:'task-1',taskName:'task1',done:true},
        {id:'task-2',taskName:'task2',done:false},
        {id:'task-3',taskName:'task3',done:true},
        {id:'task-4',taskName:'task4',done:false},
    ]

}

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task:{
      // console.log('todo',action.newTask)
      // Kiểm tra rỗng
      if(action.newTask.taskName.trim()===''){
        alert('Task name is required')
        return {...state}
      }
      //Kiểm tra tồn tại
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(task=>task.taskName=== action.newTask.taskName);
      if(index!==-1){
        alert('task name already exits');
        return{...state};
      }
      taskListUpdate.push(action.newTask)

      //Xử lý xong thì gán taskList mới vào taskList hiện tại

      state.taskList =taskListUpdate;
      // return {...state}
    }


  default:
    return {...state}
  }
}
