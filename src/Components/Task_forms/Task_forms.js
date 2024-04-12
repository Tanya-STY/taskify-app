import React, { useState } from 'react';
import '../Task_forms/Task_forms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faClock, faTag, faUser, faFilter, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';


function TodoApp() {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedList, setSelectedList] = useState('');
  const [isListDropdownOpen, setIsListDropdownOpen] = useState(false);
  const [priority, setPriority] = useState('');

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

  const [selectedMonth, setSelectedMonth] = useState(1);
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

  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');

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
          <div className='col1-child6'>
            <div className='col1-child6-3'>
              <select>
                {months}
                <option value="MM">MM</option>
              </select>
              <select>
                {dates}
                <option value="DD">DD</option>
              </select>
              <select>
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
          <div className='col1-child8'>Tags</div>
          <div className='col1-child9'>
            <div className='col1-child9'>
              {tags.length === 0 ? (
                  <input
                    type="text"
                    placeholder="Enter tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                ) : (
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#00B884',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '5px',
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
              <button onClick={addMember}>Add</button>
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
                backgroundColor: priority === 'high' ? '#FE0000' : '#FFFFFF',
                boxShadow: priority === 'high' ? '0 0 5px 2px rgba(0, 0, 0, 0.5)' : 'none',
                border: priority === 'high' ? '2px solid black' : 'none',
                marginRight: '5px'
              }}
              onClick={() => handlePriorityClick('high')}
            >
              High
            </button>
            <button
              className="priority-button"
              style={{
                backgroundColor: priority === 'medium' ? '#FFA800' : '#FFFFFF',
                boxShadow: priority === 'medium' ? '0 0 5px 2px rgba(0, 0, 0, 0.5)' : 'none',
                border: priority === 'medium' ? '2px solid black' : 'none',
                marginRight: '5px'
              }}
              onClick={() => handlePriorityClick('medium')}
            >
              Medium
            </button>
            <button
              className="priority-button"
              style={{
                backgroundColor: priority === 'low' ? '#50F900' : '#FFFFFF',
                boxShadow: priority === 'low' ? '0 0 5px 2px rgba(0, 0, 0, 0.5)' : 'none',
                border: priority === 'low' ? '2px solid black' : 'none',
              }}
              onClick={() => handlePriorityClick('low')}
            >
              Low
            </button>
          </div>
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
        <div className='row2 col2'></div>
        <div className='row3 col2'></div>
        <div className='row4 col2'></div>
        <div className='row5 col2'></div>
        <div className='row6 col2'></div>
        <div className='row7 col2'></div>
        <div className='row8 col2'></div>
        <div className='row9 col2'></div>
        <div className='row10 col2'></div>
        <div className='row11 col2'></div>
      </div>
    </div>
  );
}

export default TodoApp;
