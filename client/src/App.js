
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import { Route, Routes } from "react-router-dom"
import Error from './components/Error';
import { createContext, useReducer } from 'react';
import { intitailState, reducer } from "../src/components/reducer/UseReducer"
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/logout' element={<Logout />}></Route>
      <Route path='*' element={<Error />} />
    </Routes>
  );

}
function App() {
  const [state, dispatch] = useReducer(reducer, intitailState)
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <NavigationBar></NavigationBar>
        <Routing></Routing>
      </UserContext.Provider>
    </>
  );
}


export default App;
