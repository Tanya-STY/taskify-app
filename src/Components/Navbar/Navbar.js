import React, { useState } from 'react';
import './Navbar.css';
import "@fontsource/playfair-display";
import "@fontsource/plus-jakarta-sans";
import { VscListFlat } from "react-icons/vsc";
import AddPopup from '../Popups/AddPopup.js'; // Import the Popup component
import Logo from "../Popups/task.png";
import ModifyListPopup from "../Popups/ModifyListPopup.js";
import AddTeamsPopup from "../Popups/AddTeamPopup.js";
import { IoIosMore } from "react-icons/io";
import ModifyTeamListPopup from "../Popups/ModifyTeamListPopup.js";
import { FaCog, FaSignOutAlt } from "react-icons/fa"; // Import icons for settings and logout

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAddPopupVisible, setIsAddPopupVisible] = useState(false);
    const [isModifyListPopupVisible, setIsModifyListPopupVisible] = useState(false);
    const [isModifyTeamListPopupVisible, setIsModifyTeamListPopupVisible] = useState(false);
    const [isAddTeamsPopupVisible, setIsAddTeamsPopupVisible] = useState(false);

    const toggleNavbar = () => {
        setIsVisible(!isVisible);
    };

    const toggleAddPopup = () => {
        setIsAddPopupVisible(!isAddPopupVisible);
    };

    const toggleModifyListPopup = () => {
        setIsModifyListPopupVisible(!isModifyListPopupVisible);
    };

    const toggleAddTeamsPopup = () => {
        setIsAddTeamsPopupVisible(!isAddTeamsPopupVisible);
    };

    const toggleModifyTeamListPopup = () => {
        setIsModifyTeamListPopupVisible(!isModifyTeamListPopupVisible);
    };

    const handleSettingsClick = () => {
        // Handle settings icon click
        console.log("Settings clicked");
    };

    const handleLogoutClick = () => {
        // Handle logout icon click
        console.log("Logout clicked");
    };

    const burgerStyle = {
        left: isVisible ? '16%' : '2%',
        top: isVisible ? '-3%' : '2%',
        color: isVisible ? 'black' : '#000',
        fontSize: isVisible ? '50px' : '30px',
    };

    return (
        <>
            <div className="burger" onClick={toggleNavbar} style={burgerStyle}>
                {isVisible ? '«' : '☰'}
            </div>
            <div className={isVisible ? "navbar visible" : "navbar"}>
                <h1 className="navbar-header">
                    <img className="logo" src={Logo} />
                    Taskify
                </h1>

                <div className="list-header">
                    <p className="my-list">MY LISTS</p>
                    <p className="add-icon" onClick={toggleAddPopup}>+</p>
                </div>
                <div className="list-item">
                    <p className="list-item-paragraph">
                        <VscListFlat className="list-icon" />
                        MY TO-DO LIST</p>
                    <p className="add-icon-list" onClick={toggleAddPopup}>+</p>
                </div>
                <div className="last-list-item">
                    <p className="list-item-paragraph">
                        <VscListFlat className="list-icon" />
                        GROCERY LIST</p>
                    <IoIosMore className="more-icon" onClick={toggleModifyListPopup}/>

                    <p className="add-icon-list" onClick={toggleAddPopup} >+</p>
                </div>
                <div className="team-header">
                    <p className="my-list">TEAMS</p>
                    <p className="add-icon" onClick={toggleAddTeamsPopup}>+</p>
                </div>
                <div className="team-list">
                    <h1 className="team-icon">M</h1>
                    <p className="minicapstone">MINI-CAPSTONE</p>
                    <IoIosMore className="more-icon" onClick={toggleModifyTeamListPopup}/>
                    <p className="add-icon-list-minicapstone" onClick={toggleAddPopup} >+</p>
                </div>
                <div className="chat">
                    <p>CHAT</p>
                </div>
                <div className="sprints">
                    <p>SPRINT 1</p>
                    <IoIosMore className="more-icon" onClick={toggleModifyListPopup}/>
                    <p className="add-icon-round" onClick={toggleAddTeamsPopup}>+</p>

                </div>
                <div className="sprints">
                    <p>SPRINT 2</p>
                    <IoIosMore className="more-icon" onClick={toggleModifyListPopup}/>
                    <p className="add-icon-round" onClick={toggleAddTeamsPopup}>+</p>

                </div>
                {/* Bottom div */}
                <div className="bottom-div">
                    <p className="username" style={{fontSize:'20px'}}>Meredith Grey</p>
                    <div className="icon-container">
                        <FaCog className="icon" onClick={handleSettingsClick} style={{height:'20px', width:'20px'}}/>
                        <FaSignOutAlt className="icon" onClick={handleLogoutClick} style={{height:'20px', width:'20px'}}/>
                    </div>
                </div>
            </div>
            {/* AddPopup, ModifyListPopup, AddTeamsPopup, and ModifyTeamListPopup components */}
            <AddPopup isOpen={isAddPopupVisible} onClose={toggleAddPopup} />
            <ModifyListPopup isOpen={isModifyListPopupVisible} onClose={toggleModifyListPopup} />
            <AddTeamsPopup isOpen={isAddTeamsPopupVisible} onClose={toggleAddTeamsPopup} />
            <ModifyTeamListPopup isOpen={isModifyTeamListPopupVisible} onClose={toggleModifyTeamListPopup} />
        </>
    );
};

export default Navbar;

