import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Detail from '../pages/Detail';
import Main from '../pages/Main';

import Write from '../pages/Write';
import Signup from '../pages/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/write' element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
