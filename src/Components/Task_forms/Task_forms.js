import React, { useState } from 'react';
import '../Task_forms/Task_forms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faClock, faTag, faUser, faFilter, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';



function TodoApp() {
  // Function to get today's date in the specified format
  function getFormattedDate() {
    const options = {
      month: 'short', // Abbreviated month name (e.g., "Apr")
      day: 'numeric', // Numeric day of the month (e.g., "3")
      year: 'numeric', // Full year (e.g., "2024")
      hour: 'numeric', // Hour in 12-hour format (e.g., "10")
      minute: 'numeric', // Minute (e.g., "35")
      hour12: true // Whether to use 12-hour clock (e.g., "pm")
    };
    const currentDate = new Date();
    return currentDate.toLocaleString('en-US', options);
  }

  return (
    <div className='Task_forms'>
      <div className='taskContainer'>
        <div className='row1 col1'>
          <div className="col1-child1">
            <div style={{height:'18px', width:'18px', borderRadius:5, backgroundColor:'#00B884', outline:'1px solid black'}}></div>
          </div>
          <div className="col1-child2" style={{fontSize:22}}>
            TITLE OF THE TASK
          </div>
          <div className="col1-child3">
            <FontAwesomeIcon icon={faPen} style={{width:20, height:20}}/>
          </div>
        </div>
        <div className='row2 col1'>
          <p>row 2</p>
        </div>
        <div className='row3 col1'>
          <div className='col1-child4'>
            <FontAwesomeIcon icon={faClock} style={{width:20, height:20}}/>
          </div>
          <div className='col1-child5'>Due Date</div>
          <div className='col1-child6'>hey</div>
        </div>
        <div className='row4 col1'>
          <div className='col1-child7'>
            <FontAwesomeIcon icon={faTag} style={{width:20, height:20}}/>
          </div>
          <div className='col1-child8'>Tags</div>
          <div className='col1-child9'>hey9</div>
        </div>
        <div className='row5 col1'>
          <div className='col1-child10'>
          <FontAwesomeIcon icon={faUser} style={{width:20, height:20}}/>
          </div>
          <div className='col1-child11'>Assign</div>
          <div className='col1-child12'>hey12</div>
        </div>
        <div className='row6 col1'>
          <div className='col1-child13'>
            <FontAwesomeIcon icon={faFilter} style={{width:20, height:20}}/>
          </div>
          <div className='col1-child14'>Group</div>
          <div className='col1-child15'>hey15</div>
        </div>
        <div className='row7 col1'>
          <div className='col1-child16'>
            <FontAwesomeIcon icon={faStarHalfStroke} style={{width:20, height:20}}/>
          </div>
          <div className='col1-child17'>Priority</div>
          <div className='col1-child18'>hey18</div>
        </div>
        <div className='row8 col1'>

        </div>
        <div className='row9 col1'>

        </div>
        <div className='row10 col1'>

        </div>
        <div className='row11 col1'>

        </div>
        <div className='row1 col2' style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div className="col2-child1" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.5)' }}>
            <div>CREATED</div> {/* Divided into two rows */}
            <div>{getFormattedDate()}</div>
          </div>
          <div className="col2-child2" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.5)' }}>
            <div>LAST</div> {/* Divided into two rows */}
            <div>{getFormattedDate()}</div>
          </div>
        </div>
        <div className='row2 col2'>

        </div>
        <div className='row3 col2'>

        </div>
        <div className='row4 col2'>

        </div>
        <div className='row5 col2'>

        </div>
        <div className='row6 col2'>

        </div>
        <div className='row7 col2'>

        </div>
        <div className='row8 col2'>

        </div>
        <div className='row9 col2'>

        </div>
        <div className='row10 col2'>

        </div>
        <div className='row11 col2'>

        </div>
      </div>
    </div>
  );
}

export default TodoApp;
