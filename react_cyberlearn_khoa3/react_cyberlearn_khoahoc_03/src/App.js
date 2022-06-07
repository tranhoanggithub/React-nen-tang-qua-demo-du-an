import logo from './logo.svg';
import './App.css';
import UserProfile from './FormValidation/UserProfile/UserProfile';
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS';
import DemoTheme from './JSS_StyledComponent/Themes/DemoTheme';
import ToDoList from './JSS_StyledComponent/BaiTapStyleComponent/ToDoList/ToDoList';
import LifeCycleReact from './LifeCycleReact/LifeCycleReact';
import DemoHookUseState from './Hooks/DemoHookUseState';
import DemoHookUseEffect from './Hooks/DemoHookUseEffect';
import DemoHookUseCallBack from './Hooks/DemoHookUseCallBack';
import DemoHookUseMemo from './Hooks/DemoHookUseMemo';
import DemoUseRef from './Hooks/DemoUseRef';
import DemoUseReducer from './Hooks/DemoUseReducer';
import DemoUserContext from './Hooks/DemoUserContext';
import ContextProvider from './Hooks/Context/ContextProvider';
import DemoReduxApp from './Hooks/DemoReduxApp';
import DemoUseSpring from './Hooks/ReactSpring/DemoUseSpring';
import Ex2UseSpring from './Hooks/ReactSpring/Ex2UseSpring';
import BaiTapGameBauCua from './BaiTapTongHop/BaiTapGameBauCua';



function App() {
  return (
    <ContextProvider>
      {/* <UserProfile/> */}
      {/* <DemoJSS/> */}
      {/* <DemoTheme/> */}
      {/* <ToDoList/> */}
      {/* <LifeCycleReact/> */}
      {/* <DemoHookUseState/> */}
      {/* <DemoHookUseEffect/> */}
      {/* <DemoHookUseCallBack/> */}
      {/* <DemoHookUseMemo/> */}
      {/* <DemoUseRef/> */}
      {/* <DemoUseReducer/> */}
      {/* <DemoUserContext/> */}
      {/* <DemoReduxApp/> */}
      {/* <DemoUseSpring/> */}
      {/* <Ex2UseSpring/> */}
      <BaiTapGameBauCua/>
    </ContextProvider>
  );
}

export default App;
