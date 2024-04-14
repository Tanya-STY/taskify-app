import React, { useState } from 'react';
import '../Task_forms/Task_forms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faClock, faTag, faUser, faFilter, faStarHalfStroke, faTrash } from '@fortawesome/free-solid-svg-icons';

import HomepageBanner from '../HomepageBanner/HomepageBanner';


function TodoApp() {
  const [title, setTitle] = useState('Develop Login Page');
  const [subtitle, setSubtitle] = useState('Implement login');

  const [tag, setTag] = useState('UI');
  const [tags, setTags] = useState(['UI']);
  const [selectedList, setSelectedList] = useState('Sprint1');
  const [isListDropdownOpen, setIsListDropdownOpen] = useState(false);
  const [priority, setPriority] = useState('medium');

  const [selectedMonth, setSelectedMonth] = useState(6);
  const [selectedDate, setSelectedDate] = useState('27');
  const [selectedYear, setSelectedYear] = useState('2028');


  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && tag.trim() !== '') {
      setTags([tag.trim()]);
      setTag('');
    }
  };

  const removeTag = () => {
    setTags([]);
  };

  function getFormattedDate() {
    const options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    const currentDate = new Date();
    return currentDate.toLocaleString('en-US', options);
  }

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ].map((month, index) => (
    <option key={index + 1} value={index + 1}>{month}</option>
  ));

  const daysInMonth = new Date(new Date().getFullYear(), selectedMonth, 0).getDate();
  const dates = Array.from({ length: daysInMonth }, (_, i) => (
    <option key={i + 1} value={i + 1}>{i + 1}</option>
  ));

  const startYear = new Date().getFullYear();
  const endYear = startYear + 100;
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => {
    const year = startYear + i;
    return <option key={year} value={year}>{year}</option>;
  });

  const [teamMembers, setTeamMembers] = useState([
    'Tanya', 'Shamma', 'Fadoua', 'Asmae', 'Ihana', 'Muiz', 'John', 'Alice', 'Bob', 'Emily', 'Michael', 'Sarah', 'David', 'Emma', 'James', 'Olivia',
    'Daniel', 'Sophia', 'Matthew', 'Isabella', 'Christopher', 'Mia', 'Andrew', 'Charlotte', 'Joseph', 'Amelia'
  ]);

  const [selectedMembers, setSelectedMembers] = useState(['Tanya', 'Shamma', 'Fadoua', 'Asmae']);
  const [selectedMember, setSelectedMember] = useState();

  const handleMemberSelect = (member) => {
    if (member.trim() !== '') {
      setSelectedMembers([...selectedMembers, member.trim()]);
      setSelectedMember('');
      setTeamMembers(teamMembers.filter((m) => m !== member)); // Remove the selected member from the dropdown menu
    }
  };
  

  const handleMemberKeyDown = (event) => {
    if (event.key === 'Enter' && selectedMember.trim() !== '') {
      handleMemberSelect(selectedMember);
    }
  };

  const removeMember = (member) => {
    setSelectedMembers(selectedMembers.filter((m) => m !== member));
  };

  const renderMemberTags = () => {
    return selectedMembers.map((member, index) => (
      <div
        key={index}
        className="selectedMember"
        onClick={() => removeMember(member)}
      >
        @{member}
      </div>
    ));
  };

  const addMember = () => {
    if (selectedMember.trim() !== '') {
      handleMemberSelect(selectedMember);
    }
  };

  const handleListSelect = (list) => {
    setSelectedList(list);
    setIsListDropdownOpen(false);
  };

  const clearSelectedList = () => {
    setSelectedList('');
    setIsListDropdownOpen(true);
  };

  const handlePriorityClick = (value) => {
    setPriority(value);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    // Validate if all required fields are filled
    if (title.trim() === '' || selectedList === '' || priority === '' || selectedMembers.length === 0) {
      alert('Please fill out all required fields: Title, Subtitle, Due Date, Tag, Assign, Group, and Priority.');
      return;
    }
    // Proceed with task creation logic here
    console.log('Task created successfully!');
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleGarbageClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      // Logic to delete the task
      console.log('Task deleted');
    }
    setShowConfirmation(false);
  };

  return (
    <div>
      <HomepageBanner/>
  <div className='Task_forms'>
    <div className='taskContainer'>
      <div className='row1 col1'>
        <div className="col1-child1">
          <div style={{height:'18px', width:'18px', borderRadius:5, backgroundColor:'#00B884', outline:'1px solid black'}}></div>
        </div>
        <div className="col1-child2" style={{fontSize:22}}>
          <input
            type="text"
            placeholder="Enter Title of The Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{border: 'none', outline: 'none', fontSize: 22, width: '250px'}}
          />
        </div>
          <div className="col1-child3">
            <FontAwesomeIcon icon={faPen} style={{width:20, height:20}}/>
          </div>
        </div>
        <div className='row2 col1'>
        <div className="col1-child1">
          <div style={{height:'18px', width:'18px', borderRadius:5, backgroundColor:'#ffffff', outline:'1px white'}}></div>
        </div>
        <div className="col1-child2" style={{fontSize:16}}>
          <input
            type="text"
            placeholder="Enter a Subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            style={{border: 'none', outline: 'none', fontSize: 18, width: '250px', paddingBottom: '20px'}}
          />
        </div>

        </div>
        <div className='row3 col1'>
          <div className='col1-child4'>
            <FontAwesomeIcon icon={faClock} style={{width:20, height:20}}/>
          </div>
          <div className='col1-child5'>Due Date</div>
          <div className='col1-child6'>
            <div className='col1-child6-3'>
              <select className='mm' style={{padding:'5px', border:'1px solid #ccc', borderRadius:'5px', width:'60px'}} value={selectedMonth}
  onChange={(e) => setSelectedMonth(e.target.value)}>
                {months}
                <option value="MM" >MM</option>
              </select>
              <select className='dd' style={{padding:'5px', border:'1px solid #ccc', borderRadius:'5px', width:'60px'}} value={selectedDate}
  onChange={(e) => setSelectedDate(e.target.value)}>
                {dates}
                <option value="DD">DD</option>
              </select>
              <select className='yyyy' style={{padding:'5px', border:'1px solid #ccc', borderRadius:'5px', width:'80px'}} value={selectedYear}
  onChange={(e) => setSelectedYear(e.target.value)}>
                {years}
                <option value="YYYY">YYYY</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row4 col1'>
          <div className='col1-child7'>
            <FontAwesomeIcon icon={faTag} style={{width:20, height:20}}/>
          </div>
          <div className='col1-child8'>Tag</div>
          <div className='col1-child9'>
            <div className='col1-child9'>
              {tags.length === 0 ? (
                  <input
                    type="text"
                    placeholder="Enter tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{padding:'5px', border:'1px solid #ccc', borderRadius:'5px', width:'150px'}}
                  />
                ) : (
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(253, 113, 175, 0.3)',
                      color: 'rgba(253, 113, 175, 1)',
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      borderRadius: '33px',
                      cursor: 'pointer',
                    }}
                    onClick={removeTag}
                  >
                    {tags[0]}
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className='row5 col1'>
          <div className='col1-child10'>
            <FontAwesomeIcon icon={faUser} style={{width:20, height:20}}/>
          </div>
          <div className='col1-child11'>Assign</div>
          <div className='col1-child12'>
          <div className="memberDropdown">
              <select
                value={selectedMember}
                onChange={(e) => setSelectedMember(e.target.value)}
                onKeyDown={handleMemberKeyDown}
              >
                <option value="">Select a member</option>
                {teamMembers.map((member) => (
                  <option
                    key={member}
                    value={member}
                    onClick={() => handleMemberSelect(member)}
                  >
                    {member}
                  </option>
                ))}
              </select>
              <button onClick={addMember} style={{padding:'5px', border:'1px solid #ccc', borderRadius:'5px', width:'50px'}}>Add</button>

            </div>
            <div className="selectedMembers">
              {renderMemberTags()}
            </div>
          </div>
        </div>
        <div className='row6 col1'>
          <div className='col1-child13'>
            <FontAwesomeIcon icon={faFilter} style={{width:20, height:20}}/>
          </div>
          <div className='col1-child14'>Group</div>
          <div className='col1-child15'>
            {selectedList ? (
              <div
                style={{
                  backgroundColor: '#00B884',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={clearSelectedList}
              >
                {selectedList}
              </div>
            ) : (
              <select
                value={selectedList}
                onChange={(e) => setSelectedList(e.target.value)}
              >
                <option value="">Select a list</option>
                <option value="Sprint1">Sprint1</option>
                <option value="Sprint2">Sprint2</option>
                {/* Add more list options here */}
              </select>
            )}
          </div>
        </div>
        <div className='row7 col1'>
          <div className='col1-child16'>
            <FontAwesomeIcon icon={faStarHalfStroke} style={{width:20, height:20}}/>
          </div>
          <div className='col1-child17'>Priority</div>
          <div className='col1-child18'>


            <button
              className="priority-button"
              style={{
                paddingLeft: '10px', backgroundColor: priority === 'high' ? 'rgb(254, 0, 0, 0.5)' : 'rgb(254, 0, 0, 0.5)',
                boxShadow: priority === 'high' ? '0 0 5px 2px rgba(0, 0, 0, 0.3)' : 'none',
                border: priority === 'high' ? '2px solid black' : 'none',
                marginRight: '5px', marginLeft: '10px', height: '27px', borderRadius: '5px'
              }}
              onClick={() => handlePriorityClick('high')}
            >
              High
            </button>
            <button
              className="priority-button"
              style={{
                backgroundColor: priority === 'medium' ? 'rgb(255, 168, 0, 0.7)' : 'rgb(255, 168, 0, 0.7)',
                boxShadow: priority === 'medium' ? '0 0 5px 2px rgba(0, 0, 0, 0.7)' : 'none',
                border: priority === 'medium' ? '2px solid black' : 'none',
                marginRight: '5px', height: '27px', borderRadius: '5px'
              }}
              onClick={() => handlePriorityClick('medium')}
            >
              Medium
            </button>
            <button
              className="priority-button"
              style={{
                backgroundColor: priority === 'low' ? 'rgb(80, 249, 0, 0.4)' : 'rgb(80, 249, 0, 0.4)',
                boxShadow: priority === 'low' ? '0 0 5px 2px rgba(0, 0, 0, 0.3)' : 'none',
                border: priority === 'low' ? '2px solid black' : 'none',height: '27px', borderRadius: '5px'
              }}
              onClick={() => handlePriorityClick('low')}
            >
              Low
            </button>
          </div>
        </div>

        <div className='col1-child19'></div>
        <div className='col1-child20' style={{paddingBottom:'10px', paddingTop:'20px'}}>
          <FontAwesomeIcon icon={faPen} style={{ width: '20px', height: '20px', paddingRight: '15px' }} />
          Description/Notes
        </div>

          <div className='col1-child21'>
          <textarea
            style={{ width: '430px', height: '175px', resize: 'none', borderRadius: '10px', backgroundColor: 'rgba(195, 195, 195, 0.3)', padding:'10px' }}
            placeholder="Description/Notes"
          ></textarea>
          </div>
        <div className='row1 col2' style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div className="col2-child1" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.5)' }}>
            <div>CREATED</div>
            <div>{getFormattedDate()}</div>
          </div>
          <div className="col2-child2" style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.5)' }}>
            <div>LAST</div>
            <div>{getFormattedDate()}</div>
          </div>
        </div>
        <div className='row2 col2' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <button className='taskCompletedButton' >
              Task Completed
            </button>
          
        </div>
        <div className='row3 col2' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <label htmlFor="fileInput" className="fileInputLabel" >
              Attach File
            </label>
            <input
              id="fileInput"
              type="file"
              accept=".csv, .xlsx, .xls, .pdf"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          
        </div>
        <div className='row4 col2' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {selectedFile && (
            <div style={{ border:'1px solid #ccc', borderRadius:'5px', width:'70%', height:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <p>{selectedFile.name}</p>
              {/* You can display more information about the selected file if needed */}
            </div>
          )}
        </div>
        <div className='row5 col2'></div>
        <div className='row6 col2'></div>
        <div className='row7 col2'></div>
        <div className='row8 col2'></div>
        <div className='row9 col2'></div>
        <div className='row10 col2' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {showConfirmation && (
          <div className="confirmation">
            <div>Are you sure you want to permanently delete this task?</div>
            <div>
              <div>              
                <button onClick={() => handleConfirmation(true)} style={{padding:'5px', border:'1px solid #ccc', borderRadius:'5px', width:'150px', marginBottom:'5px'}}>Yes, delete the task</button>
              </div>

              <div>              
                <button onClick={() => handleConfirmation(false)} style={{padding:'5px', border:'1px solid #ccc', borderRadius:'5px', width:'60px'}}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Garbage icon */}
        {/* <div className='row10 col2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
          {/* <FontAwesomeIcon icon={faTrash} className='garbageIcon' style={{ width: 20, height: 20 }} onClick={handleGarbageClick} /> */}
        {/* </div> */}
        {/* Replace the "Create Task" button with the garbage icon */}
        <FontAwesomeIcon icon={faTrash} className='garbageIcon' style={{width:20, height:20}} onClick={handleGarbageClick}/>
      </div>
        <div >
          </div>
      </div>
    </div>
    </div>
  );
}

export default TodoApp;
