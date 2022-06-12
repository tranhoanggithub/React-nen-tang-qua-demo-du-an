import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Header from "./components/Home/Header/Header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import Todolist from "./pages/Todolist/Todolist";
import TodolistRFC from "./pages/Todolist/TodolistRFC.js";


function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/',element:<Home/>},
      {path:'/contact',element:<Contact/>},
      {path:'/about',element:<About/>},
      {path:'/login',element:<Login/>},
      {path:'/detail/:id',element:<Detail/>},
      {path:'/profile',element:<Profile/>},
      {path:'/todolistrcc',element:<Todolist/>},
      {path:'/todolistrfc',element:<TodolistRFC/>},
      {path:'*',element:<Home/>},
      
    ]
  )
  return routes;
}
function App(){
  return (
    <Router>
      <Header/>
      <AppRoutes />
    </Router>
  )
}

export default App;
