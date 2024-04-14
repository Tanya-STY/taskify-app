import { useState } from 'react'; // Import useState hook
import "./NotificationAlerts.css";

const NotificationsAlerts = () => {
  // Use useState to manage the active button state
  const [activeButton, setActiveButton] = useState('alerts');

  // Function to handle button clicks
  const toggleButton = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="containerbox">
      <div className='headerbox'>
        <div className="topbar">
          <div className="date">Monday - April 1st -2024</div>
          <div className="notif">Notifications</div>
        </div>
        <div className="bottombar">
          <div className="messages">
            <div className="welcomemessage1">Hello Meredith!</div>
            <div className="welcomemessage2">Welcome back! Each day I will accomplish one thing on my to do list.</div>
          </div>
          <div className="notif-bell">
            <div className='cloche'></div>
          </div>
        </div>
      </div>
      <div className="alertbutton">

        <div className={`alerts ${activeButton === 'alerts' ? 'active' : ''}`} onClick={() => toggleButton('alerts')}>Alerts</div>
        <div className={`reminders ${activeButton === 'reminders' ? 'active' : ''}`} onClick={() => toggleButton('reminders')}>Reminders</div>
      </div>
      <div id="alertsContent" className={`content ${activeButton === 'alerts' ? 'active' : ''}`}>
        {activeButton === 'alerts' && (
          <div className='task-list'>
            <div className='div-tasks'>
              <div className='displaybox'>
                <div className='imagecircle'></div>
                <div className='tasks-assigned'>
                  <div className="new-task">New Task Assigned</div>
                  <div className="mini-cap">Mini-Capstone {'>'} Sprint 2</div>
                </div>
              </div>
              <div className='see-task'>See Task</div>
            </div>
            <div className='div-tasks'>
              <div className='displaybox'>
                <div className='imagecircle'></div>
                <div className='tasks-assigned'>
                  <div className="new-task">New Task Assigned</div>
                  <div className="mini-cap">Mini-Capstone {'>'} Sprint 2</div>
                </div>
              </div>
              <div className='see-task'>See Task</div>
            </div>
            <div className='div-tasks'>
              <div className='displaybox'>
                <div className='imagecircle'></div>
                <div className='tasks-assigned'>
                  <div className="new-task">Note Added to Task</div>
                  <div className="mini-cap">Mini-Capstone {'>'} Sprint 2 {'>'} Sign In Feature</div>
                </div>
              </div>
              <div className='see-task'>See Task</div>
            </div>
            <div className='div-tasks'>
              <div className='displaybox'>
                <div className='imagecircle'></div>
                <div className='tasks-assigned'>
                  <div className="new-task">Attachment Added to Task</div>
                  <div className="mini-cap">Mini-Capstone {'>'} Sprint 2 {'>'} Profile Feature</div>
                </div>
              </div>
              <div className='see-task'>See Task</div>
            </div>
            <div className='div-tasks'>
              <div className='displaybox'>
                <div className='imagecircle'></div>
                <div className='tasks-assigned'>
                  <div className="new-task">New Task Assigned</div>
                  <div className="mini-cap">Mini-Capstone {'>'} Sprint 2 {'>'} Profile Feature</div>
                </div>
              </div>
              <div className='see-task'>See Task</div>
            </div>
          </div>
        )}
      </div>
      <div id="remindersContent" className={`content ${activeButton === 'reminders' ? 'active' : ''}`}>
        {activeButton === 'reminders' && (
          <div className='reminderslist'>
            <div className='titles'>
              <div className='todaytask'>
                <p className='tasktext'>Today's tasks due</p>
              </div>
              <div className='thisweektask'>
                <p className='tasktext'>This week's tasks due</p>
              </div>
            </div>
            <div className='componentbox'>
              <div className='separation'>
                <div className='todaycomponent'>
                  <div className='taskdef'>
                    <div className='taskname'>React Tutorial <br/> <p className='learn'>Learn React Fundamentals</p></div>
                    <div className='taskdate'>1 APR 2024</div>
                  </div>
                  <div className='taskbut'>
                    <div></div>
                    <p className='divtask'>See Task</p>
                  </div>
                </div>
                <div className="separator"></div>
                <div className='tmrwcomponent'>
                <div className='taskdef'>
                    <div className='taskname'>React Tutorial <br/> <p className='learn'>Learn React Fundamentals</p></div>
                    <div className='taskdate'>1 APR 2024</div>
                  </div>
                  <div className='taskbut'>
                    <div></div>
                    <p className='divtask'>See Task</p>
                  </div>
                </div>
              </div>
              <div className='separation'>
                <div className='todaycomponent'>
                <div className='taskdef'>
                    <div className='taskname'>Gym Workout <br/> <p className='learn'>Strength Training Session</p></div>
                    <div className='taskdate'>1 APR 2024</div>
                  </div>
                  <div className='taskbut'>
                    <div></div>
                    <p className='divtask'>See Task</p>
                  </div>
                </div>
                <div className="separator"></div>
                <div className='tmrwcomponent'>
                <div className='taskdef'>
                    <div className='taskname'>Write Blog Post <br/> <p className='learn'>benefits of Meditation</p></div>
                    <div className='taskdate'>1 APR 2024</div>
                  </div>
                  <div className='taskbut'>
                    <div></div>
                    <p className='divtask'>See Task</p>
                  </div>
                </div>
                </div>
              <div className='separation'>
                <div className='todaycomponent'>
                <div className='taskdef'>
                    <div className='taskname'>Write Blog Post <br/> <p className='learn'>benefits of Meditation</p></div>
                    <div className='taskdate'>1 APR 2024</div>
                  </div>
                  <div className='taskbut'>
                    <div></div>
                    <p className='divtask'>See Task</p>
                  </div>
                </div>
                
                <div className="separator"></div>
                <div className='tmrwcomponent'>
                <div className='taskdef'>
                    <div className='taskname'>Write Blog Post <br/> <p className='learn'>benefits of Meditation</p></div>
                    <div className='taskdate'>1 APR 2024</div>
                  </div>
                  <div className='taskbut'>
                    <div></div>
                    <p className='divtask'>See Task</p>
                  </div>
                </div>
                </div>
              </div>
              <div className='separation'>
                <div className='nothing'>
                  <div>
                    <div className></div>
                    <div className></div>
                  </div>
                  <div>
                    <div></div>
                    <p></p>
                  </div>
                </div>
                <div className="separator"></div>
                <div className='tmrwcomponent'>
                <div className='taskdef'>
                    <div className='taskname'>React Tutorial <br/> <p className='learn'>Learn React Fundamentals</p></div>
                    <div className='taskdate'>1 APR 2024</div>
                  </div>
                  <div className='taskbut'>
                    <div></div>
                    <p className='divtask'>See Task</p>
                  </div>
                </div>
              </div>
              <div className='separation'>
                <div className='nothing'>
                  <div>
                    <div className></div>
                    <div className></div>
                  </div>
                  <div>
                    <div></div>
                    <p></p>
                  </div>
                </div>
                <div className="separator"></div>
                <div className='tmrwcomponent'>
                <div className='taskdef'>
                    <div className='taskname'>React Tutorial <br/> <p className='learn'>Learn React Fundamentals</p></div>
                    <div className='taskdate'>1 APR 2024</div>
                  </div>
                  <div className='taskbut'>
                    <div></div>
                    <p className='divtask'>See Task</p>
                  </div>
                </div>
              </div>
            </div>
            
        )}
      </div>
    </div>
  );
};

export default NotificationsAlerts;
