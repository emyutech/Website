import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom';
import React from 'react'
import './App.css'
import MainLayout from './MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PageinProcess from './pages/PageinProcess';
import Journal from './pages/Journal';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
      <Route path='/PageinProcess' element={<PageinProcess/>}/>
      <Route path='/Journal' element={<Journal/>}/>
      <Route path='/Projects' element={<PageinProcess/>}/>
      <Route path='/AboutMe' element={<PageinProcess/>}/>
      <Route index element={<HomePage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )
  );


return <RouterProvider router ={router}/>;
}

export default App
