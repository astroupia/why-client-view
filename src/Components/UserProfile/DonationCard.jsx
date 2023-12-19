import "./DonationCard.css";

// DonationCard.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import DonationModal from "./DonationModal";

const DonationCard = ({ image, title, description, goal, onDonateClick }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [donatedAmount, setDonatedAmount] = useState(0);

  const percentage = Math.min((donatedAmount / goal) * 100, 100);

  const handleDonate = (donationAmount) => {
    setDonatedAmount((prevDonatedAmount) => prevDonatedAmount + donationAmount);
    setModalOpen(false); // Close the modal after donation
  };

  return (
    <div className="donation-card">
      <img src={image} alt={title} className="donation-card-image" />
      <div className="donation-card-info">
        <h2 className="donation-card-title">{title}</h2>
        <p className="donation-card-description">{description}</p>
      </div>
      <div className="donation-card-details">
        <p className="donation-card-goal">Goal: ${goal}</p>
        <p className="donation-card-donated">Donated: ${donatedAmount}</p>
        <div className="donation-card-progress-bar">
          <div
            className="donation-card-progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="donation-card-percentage">
          Achieved: {percentage.toFixed(2)}%
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="donation-card-donate-button"
        >
          Donate
        </button>
      </div>
      <DonationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onDonate={handleDonate}
      />
    </div>
  );
};

DonationCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  goal: PropTypes.number.isRequired,
  onDonateClick: PropTypes.func.isRequired,
};

export default DonationCard;
