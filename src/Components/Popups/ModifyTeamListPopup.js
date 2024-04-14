import React from 'react';
import './ModifyTeamListPopup.css'; // Assume you have a corresponding CSS file for styling
import Background from "./backgrond-popup.png";
import { FaListUl } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";



const ModifyTeamListPopup = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="add-teams-list-popup-content" onClick={e => e.stopPropagation()}>
                {children}
                <div className="add-popup-content">
                    <h1 className="popup-header">Taskify</h1>
                    <p className="add-teams-popup-description">List Description</p>
                    <div className="add-teams-list-inputs">
                        <div className="add-teams-row">
                            <p className="add-teams-icon"><FaListUl className="add-teams-list-icon"/> Name</p>
                            <input
                                type="text"
                                className="add-teams-input"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="add-teams-list-row">
                            <p className="collaborator-icon-team-list"><IoPersonOutline />
                                Assign
                            </p>

                            <div className="collaborators">
                                <div className="collaborators-row">
                                    <div className="collaborator-username">
                                        @ mustafa
                                    </div>
                                    <div className="collaborator-username">
                                        @ mustafa
                                    </div>
                                </div>
                                <div className="collaborators-row">
                                    <div className="collaborator-username">
                                        @ mustafa
                                    </div>
                                    <div className="collaborator-username">
                                        @ mustafa
                                    </div>
                                </div>
                                <div className="collaborators-row">
                                    <div className="collaborator-username">
                                        @ mustafa
                                    </div>
                                    <div className="collaborator-username">
                                        @ mustafa
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button className="add-collaborator-button" onClick={onClose}>Add a collaborator</button>

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

export default ModifyTeamListPopup;
