import React from 'react';
import './ModifyListPopup.css'; // Assume you have a corresponding CSS file for styling
import Background from "./backgrond-popup.png";
import { FaListUl } from "react-icons/fa6";


const ModifyListPopup = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="modify-list-popup-content" onClick={e => e.stopPropagation()}>
                {children}
                <div className="add-popup-content">
                    <h1 className="popup-header">Taskify</h1>
                    <p className="add-popup-description">List Description</p>
                    <p className="modify-list-popup-list-icon"><FaListUl/> Name</p>
                    <input
                        type="text"
                        className="add-popup-input"
                        placeholder="Enter list name"
                    />
                    <button className="create-list-button" onClick={onClose}>Save Name</button>
                    <button className="delete-list-button" onClick={onClose}>Delete List</button>

                </div>
                <div className="image-container">
                    <img src={Background} alt="Popup Visual" className="background-img-popup"/>
                </div>

            </div>
        </div>
    );
};

export default ModifyListPopup;
