import React from 'react'
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <>
    <div className='menu'>
     <h2>Dashboard</h2>
           
    

    <div className="menu--list">
        <a href="#" className="item">Dashboard</a>
        <a href="#" className="item">Billers</a>
        <a href="#" className="item">Mandates</a>
        <a href="#" className="item">Transactions</a>
        <a href="#" className="item">Reports</a>
        <a href="#" className="item">Settings</a>
        <a href="#" className="item">Features</a>

    </div>
    </div>
    </>
  )
}

export default Sidebar