import React, { Component } from "react";
import { Container } from "../../ComponentsToDoList/Container";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../../Themes/ToDoListPrimaryTheme";
import { Dropdown } from "../../ComponentsToDoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentsToDoList/Heading";
import { TextField, Label, Input } from "../../ComponentsToDoList/TextField";
import { Button } from "../../ComponentsToDoList/Button";
import {
  Table,
  Tr,
  Td,
  Th,
  Thead,
  Tbody,
} from "../../ComponentsToDoList/Table";
import { connect } from "react-redux";
import {
  addTaskAction,
  changeThemeAction,
  doneTaskAction,
  deleteTaskAction,
  editTaskAction
} from "../../../redux/actions/types/ToDoListAction";
import { arrTheme } from "../../../JSS_StyledComponent/Themes/ThemeManager";

class ToDoList extends Component {
  state = {
    taskName: "",
  };

  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "baseline" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button onClick={()=>{
                this.props.dispatch(
                editTaskAction(task)
                )
              }} className="ml-1">
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(doneTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button onClick={()=>{
                this.props.dispatch(deleteTaskAction(task.id))
              }} className="ml-1">
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTaskCompleted = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "baseline" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button onClick={()=>{this.props.dispatch(deleteTaskAction(task.id))}} className="ml-1">
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  //Viết hàm render theme import ThemeManger

  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return <option value={theme.id}>{theme.name}</option>;
    });
  };
  //Life cyie  bảng 16 nhận vào props mới được thực thi trước render

  componentWillReceiveProps(newProps){
    console.log('this.props',this.props);
    console.log('newProps',newProps);
    this.setState({
      taskName:newProps.taskEdit.taskName
    })
  }
  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <div>
          <Container className="w-50">
            <Dropdown
              onChange={(e) => {
                let { value } = e.target;
                //Dispatch value  lên reducer
                this.props.dispatch(changeThemeAction(value));
                this.props.dispatch({
                  type: "change_theme",
                  themeId: value,
                });
              }}
            >
              {/* <option>Dark time</option>
                  <option>Light time</option>
                  <option>Primary theme</option> */}
              {this.renderTheme()}
            </Dropdown>
            <Heading3 className="text-danger">To Do List</Heading3>
            <TextField value={this.state.taskName}
              onClick={(e) => {
                this.setState(
                  {
                    taskName: e.target.value,
                  },
                  () => {
                    console.log(this.state);
                  }
                );
              }}
              name="taskName"
              label="task name"
              className="w-50"
            />
            <Button
              onClick={() => {
                //Lấy thông tin người dùng nhập vào từ Input
                let { taskName } = this.state;

                //Tạo ra 1 task object
                let newTask = {
                  id: Date.now(),
                  taskName: taskName,
                  done: false,
                };
                console.log(newTask);
                //Đưa task object lên redux thông qua phương thức dispatch
                this.props.dispatch(addTaskAction(newTask));
              }}
              className="ml-2"
            >
              <i className="fa fa-plus"></i>Add task
            </Button>
            <Button className="ml-2">
              <i className="fa fa-upload"></i>Update task
            </Button>
          </Container>
          <hr />
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>
              {/* <Tr>
                     <Th style={{verticalAlign:'baseline'}}>Task name</Th>
                    <Th className="text-right">
                        <Button className="ml-1"><i className="fa fa-edit"></i></Button>
                        <Button className="ml-1"><i className="fa fa-check"></i></Button>
                        <Button className="ml-1"><i className="fa fa-trash"></i></Button>
                    </Th>
                </Tr> */}
              {this.renderTaskToDo()}
            </Thead>
          </Table>
          <Heading3>Task completest</Heading3>
          <Table>
            <Thead>
              {/* <Tr>
                    <Th>Task Name</Th>
                    <Th className="text-right"> 
                        <Button><i className="fa fa-trash"></i></Button>
                    </Th>
                </Tr>  */}
              {this.renderTaskCompleted()}
            </Thead>
          </Table>
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
    taskEdit:state.ToDoListReducer.taskEdit
  };
};

export default connect(mapStateToProps)(ToDoList);
