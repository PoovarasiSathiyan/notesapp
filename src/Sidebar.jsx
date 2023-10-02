import React from 'react'
import noteimg from './images/description.svg'

function Sidebar() {
  return <>
       <div className="sidebar">
        <h1 className='notes'>Notes App</h1>
            <div className="active" ><img className="dash" src={noteimg}/>&nbsp;&nbsp; Notes</div>
</div>
</> 
    }

export default Sidebar