import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {

  const handleclick = (e) => {
    console.log(e.target)
  }
  return (
    <div className="nav">
      <div className="header">
        <h3>Icare </h3>
        <h5>Project Manager</h5>
      </div>
      <ul className="list">
        {/*          <li className="list-item">
          <NavLink to="home">Home</NavLink >
        </li>
      <li className="list-item">
          <div className="subnav" onClick={handlerSubMenu}>
            useState <span className="flecha">&gt;</span>
          </div>

          <ul className="submenu">
            <li className="list-item">
              <NavLink to="counterapp">CounterApp</NavLink>
            </li>
            <li className="list-item">
              <NavLink to="usestate">CustomHook</NavLink>
            </li>
          </ul>
        </li>  */}

        <li className="list-item">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>

        <li className="list-category">Projects</li>
        <ul className="sub-list">
          <li className="sub-item">
            <NavLink to="/project/add">Add Project</NavLink>
          </li>
          <li className="sub-item">
            <NavLink to="/projects">List Projects</NavLink>
          </li>
        </ul>

        <li className="list-category">Resources</li>
        <ul className="sub-list">
          <li className="sub-item">
            <NavLink to="/resource/add">Add Resource</NavLink>
          </li>
          <li className="sub-item">
            <NavLink to="/resources">List Resources</NavLink>
          </li>
        </ul>
      </ul>
    </div>
  )
}
