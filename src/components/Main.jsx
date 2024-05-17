import React from 'react'
import MainTitle from './MainTitle'
import '../components/Main.css'
import Dashboard from './Dashboard'


const Main = () => {
  return (
<main  id='main' className='main'>
<MainTitle page='NIBSS DIRECT DEBIT MANDATE' /> <span>INSTRUCTIONS HANDLED BRILLIANTLY'</span> 
<Dashboard />
</main>


  )
}

export default Main