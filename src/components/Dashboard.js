import React, { useState } from 'react';
import '../styles/Dashboard.css';
import '../styles/Dash.css';
import Header from './Header';


const Dashboard = () => {
  const [sections, setSections] = useState({
    recents: true,
    agenda: true,
    myWork: true,
    assigned: true,
    prsnl: true,
    assign: true,
    line: true,
  });

  const [tasks, setTasks] = useState({
    recents: ['Task 1 • in Project 2', 'Task 2 • in Project 2', 'Task 3 • in Project 2', 'Task 1', 'Task 2', 'Task 3'],
    agenda: [],
    myWork: [],
    assigned: [],
    prsnl: [],
    assign: [],
    line: [],
  });

  const handleRemove = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: false,
    }));
  };

  const handleAddTask = (section) => {
    const taskName = prompt("Enter new task name:");
    if (taskName) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [section]: [...prevTasks[section], taskName],
      }));
    }
  };

  return (
    <>
      <div>
          <Header />
        <div className="container">
          <header className="dashboard-header mb-4">
            <h1>Good afternoon, Vaibhav</h1>
          </header>
          <div className="row">
            {sections.recents && (
              <div className="col-md-6 mb-4">
                <div className="card p-3 card-hover card-hover1">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>Recents</h2>
                    <div>
                      {/* <button className="btn btn-success me-2" onClick={() => handleAddTask('recents')}>Add</button> */}
                      <button className="btn btn-danger" onClick={() => handleRemove('recents')}>Remove</button>
                    </div>
                  </div>
                  <ul className="list-unstyled">
                    {tasks.recents.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {sections.agenda && (
              <div className="col-md-6 mb-4">
                <div className="card p-3 card-hover card-hover1 ">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2>Agenda</h2>
                    
                    <div>
                      
                      <button className="btn btn-danger" onClick={() => handleRemove('agenda')}>Remove</button>
                    </div>
                  </div>
                  <p>Aug 6, Tue</p>
                  <ul className="list-unstyled">
                    {tasks.agenda.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                  <p>Agenda items from your calendars will show here. <a href="#!">Learn more</a></p>
                  <button className="btn btn-primary" onClick={() => handleAddTask('agenda')}>+ Add calendar integrations</button>
                </div>
              </div>
            )}
          </div>
          <div className="row">
            {sections.myWork && (
                <div className="col-md-6 mb-4">
                    <div className="card p-3 card-hover card-hover1">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>My Work</h2>
                        <div>
                        
                        <button className="btn btn-danger" onClick={() => handleRemove('myWork')}>Remove</button>
                        </div>
                    </div>
                    <ul className="list-unstyled">
                      {tasks.myWork.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                    <p>Tasks and Reminders assigned to you will show here.. <a href="#!">Learn more</a></p>
                    <button className="btn btn-primary" onClick={() => handleAddTask('myWork')}>+ Add Task or reminder</button>
                    </div>
                </div>
                )}
                {sections.assigned && (
                <div className="col-md-6 mb-4">
                    <div className="card p-3 card-hover card-hover1">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Assigned to me</h2>
                        <div>
                        
                        <button className="btn btn-danger" onClick={() => handleRemove('assigned')}>Remove</button>
                        </div>
                    </div>
                    <ul className="list-unstyled">
                      {tasks.assigned.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                    <p>Tasks and Reminders assigned to you will show here.. <a href="#!">Learn more</a></p>
                    <button className="btn btn-primary" onClick={() => handleAddTask('assigned')}>+ Add Task or reminder</button>
                    </div>
                </div>
                )}
            
            
          </div>
          <div className="row">
            {sections.prsnl && (
                <div className="col-md-6 mb-4">
                    <div className="card p-3 card-hover card-hover1">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Personal List</h2>
                        <div>
                        
                        <button className="btn btn-danger" onClick={() => handleRemove('prsnl')}>Remove</button>
                        </div>
                    </div>
                    <ul className="list-unstyled">
                      {tasks.prsnl.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                    <p>Personal List is a home for your task. <a href="#!">Learn more</a></p>
                    <button className="btn btn-primary" onClick={() => handleAddTask('prsnl')}>+ Add Task or reminder</button>
                    </div>
                </div>
                )}
                {sections.assign && (
                <div className="col-md-6 mb-4">
                    <div className="card p-3 card-hover card-hover1">
                    <div className="d-flex justify-content-between align-items-center">
                        
                        <h2>Assigned comments</h2>
                        <b>No comments!!</b>
                        <div>
                        
                        <button className="btn btn-danger" onClick={() => handleRemove('assign')}>Remove</button>
                        </div>
                    </div>
                    <ul className="list-unstyled">
                      {tasks.assigned.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                    <p>You don't have any assigned comments.. <a href="#!">Learn more</a></p>
                    <button className="btn btn-primary" onClick={() => handleAddTask('assign')}>+ Add Task or reminder</button>
                    </div>
                </div>
                )}
            
            
          </div>
          <div className="row">
            {sections.line && (
                <div className="col-md-12 mb-6">
                    <div className="card p-3 card-hover card-hover1">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Line Up</h2>
                        <div>
                        
                        <button className="btn btn-danger" onClick={() => handleRemove('line')}>Remove</button>
                        </div>
                    </div>
                    <ul className="list-unstyled">
                      {tasks.line.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                    <p>LineUp keeps your most important tasks in one list. Add your most important task to get started.. <a href="#!">Learn more</a></p>
                    <button className="btn btn-primary" onClick={() => handleAddTask('line')}>+ Add Task </button>
                    </div>
                </div>
                )}
                
            
            
          </div>
          
        </div>
         
      </div>
    </>
  );
};

export default Dashboard;
