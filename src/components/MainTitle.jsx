import React from 'react'
import '../components/MainTitle.css'

const MainTitle = ({ page }) => {
  return (
    <div className="maintitle">
    <h1>{page}</h1>    
    </div>
  )
}

export default MainTitle