import React from 'react';
import './AddPopup.css'; // Assume you have a corresponding CSS file for styling
import Background from "./backgrond-popup.png";
import { FaListUl } from "react-icons/fa6";


const AddPopup = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                {children}
                <div className="add-popup-content">
                    <h1 className="popup-header">Taskify</h1>
                    <p className="add-popup-description">List Description</p>
                    <p className="popup-list-icon"><FaListUl/> Name</p>
                    <input
                        type="text"
                        className="add-popup-input"
                        placeholder="Enter list name"
                    />
                    <button className="create-list-button" onClick={onClose}>Create List</button>

                </div>
                <div className="image-container">
                    <img src={Background} alt="Popup Visual" className="background-img-popup" />
                </div>

            </div>
        </div>
    );
};

export default AddPopup;
