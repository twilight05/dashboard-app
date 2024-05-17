import React from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import './App.css'

const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard--content">
       <Main />
      </div>
    </div>
  )
}

export default App