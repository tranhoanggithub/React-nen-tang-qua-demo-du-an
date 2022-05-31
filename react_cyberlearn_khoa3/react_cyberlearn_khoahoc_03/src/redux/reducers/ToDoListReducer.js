import { ToDoListDarkTheme } from "../../JSS_StyledComponent/Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../JSS_StyledComponent/Themes/ToDoListLightTheme";
import {
  add_task,
  done_task,
  delete_task,
  edit_task,
} from "../types/ToDoListTypes";
import { arrTheme } from "../../JSS_StyledComponent/Themes/ThemeManager";
import { change_theme } from "../types/ToDoListTypes";

const initialState = {
  themeToDoList: ToDoListLightTheme,
  taskList: [
    { id: "task-1", taskName: "task1", done: true },
    { id: "task-2", taskName: "task2", done: false },
    { id: "task-3", taskName: "task3", done: true },
    { id: "task-4", taskName: "task4", done: false },
  ],
  taskEdit: { id: "task-1", taskName: "task1", done: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      // console.log('todo',action.newTask)
      // Kiểm tra rỗng
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required");
        return { ...state };
      }
      //Kiểm tra tồn tại
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("task name already exits");
        return { ...state };
      }

      taskListUpdate.push(action.newTask);

      //Xử lý xong thì gán taskList mới vào taskList hiện tại

      state.taskList = taskListUpdate;
      // return {...state}
    }
    case change_theme: {
      //Tìm theme dựa vào action
      let theme = arrTheme.find((theme) => theme.id == action.themeId);
      if (theme) {
        console.log(theme);
        //set lại theme cho state.themeToDoList
        state.themeToDoList = { ...theme.theme };
      }
      return { ...state };
      console.log(action);
    }
    case done_task: {
      //Click vafo button onClick=>dipatch lên action có taskId
      // console.log('done_task',action)
      let taskListUpdate = [...state.taskList];
      //Từ task id tìm ra task đó ở vị trí nào đó trong mảng tiến hành cập nhập lại thuộc tính done true và cập nhập lại state của redux
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index !== -1) {
        taskListUpdate[index].done = true;
      }

      state.taskList = taskListUpdate;
      return { ...state, taskList: taskListUpdate };
    }
    case delete_task: {
      let taskListUpdate = [...state.taskList];
      // Gán lại giá trị cho mảng update băng chính nó nhưng filter không có taskId đó
      taskListUpdate = taskListUpdate.filter(
        (task) => task.id !== action.taskId
      );
      return { ...state, taskList: taskListUpdate };
    }
    case edit_task: {
      return { ...state, taskEdit: action.task };
    }

    default:
      return { ...state };
  }
};
