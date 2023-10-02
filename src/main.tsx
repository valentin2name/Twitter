import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import TwitsPage from './Components/TwitsPage/TwitsPage';
import AnswersPage from './Components/AnswersPage/AnswersPage';
import ForYouPage from './Components/ForYouPage/ForYouPage';
import MediaPage from './Components/MediaPage/MediaPage';
import LikedPage from './Components/LikedPage/LikedPage';
import {store} from './Store'
import {Provider} from 'react-redux'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='/twits' element={<TwitsPage />}></Route>
          <Route path='/answers' element={<AnswersPage />}></Route>
          <Route path='/for' element={<ForYouPage />}></Route>
          <Route path='/media' element={<MediaPage />}></Route>
          <Route path='/liked' element={<LikedPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
