//react
import React from 'react';

//components
import HeaderWithButton from './components/HeaderWithButton'

//styles
import './App.css'

function App() {

  return (
    <>
    <div className='main'>
      <div className='navigation-bar'>
        <logo/>
        <menu/>
      </div>
      <div className='main-content'>
        <div className='main-article'>
          <main-image/>
          <big-header/>
          <description/>
        </div>
        <div className='new-artivle'>
          <title/>
          <new-article-1/>
          <new-article-2/>
          <new-article-3/>
        </div>
        <div className='top-3-articles'>
          <top-article-1/>
          <top-article-2/>
          <top-article-3/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
