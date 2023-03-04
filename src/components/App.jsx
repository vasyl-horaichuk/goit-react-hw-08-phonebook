import { Home } from 'page/Home';
import { Contacts } from 'page/Contacts';
import { Login } from 'page/Login';
import { Register } from 'page/Register';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  <Routes path="/" element={Home}>
    <Route to="/" />
    <Route />
    <Route />
  </Routes>;
  return <div>React homework template. Hello world!</div>;
};
