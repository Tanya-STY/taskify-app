import React from 'react';
import './AddTeamPopup.css'; // Assume you have a corresponding CSS file for styling
import Background from "./backgrond-popup.png";
import { FaListUl } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";



const AddTeamsPopup = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="add-teams-popup-content" onClick={e => e.stopPropagation()}>
                {children}
                <div className="add-popup-content">
                    <h1 className="popup-header">Taskify</h1>
                    <p className="add-teams-popup-description">List Description</p>
                    <div className="add-teams-inputs">
                        <div className="add-teams-row">
                            <p className="add-teams-icon"><FaListUl className="add-teams-list-icon"/> Name</p>
                            <input
                                type="text"
                                className="add-teams-input"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="add-teams-row">
                            <p className="add-teams-icon"><FaListUl className="add-teams-list-icon"/>  List's Name</p>
                            <input
                                type="text"
                                className="add-teams-input"
                                placeholder="Enter list name"
                            />
                        </div>
                        <div className="add-teams-row">
                            <p className="collaborator-icon"><IoPersonOutline />
                                Assign
                                <button className="add-collaborator-button" onClick={onClose}>Add a collaborator</button>
                            </p>
                        </div>
                    </div>
                    <button className="create-list-button" onClick={onClose}>Create List</button>

                </div>
                <div className="image-container">
                    <img src={Background} alt="Popup Visual" className="background-img-popup" />
                </div>

            </div>
        </div>
    );
};

export default AddTeamsPopup;
