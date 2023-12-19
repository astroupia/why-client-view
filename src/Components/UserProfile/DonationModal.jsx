// DonationModal.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DonationModal.css";

const DonationModal = ({ isOpen, onClose, onDonate }) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonate = () => {
    // Validate donation amount (you can add more validation logic here)
    if (donationAmount > 0) {
      onDonate(donationAmount);
      setDonationAmount(0);
      onClose();
    }
  };

  return (
    <div className={`donation-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Donate</h2>
        <form>
          <label>
            Amount:
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(parseInt(e.target.value, 10))}
            />
          </label>
          <div className="button-container">
            <button
              type="button"
              onClick={handleDonate}
              className="donate-button"
            >
              Donate
            </button>
            <button type="button" onClick={onClose} className="close-button">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

DonationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDonate: PropTypes.func.isRequired,
};

export default DonationModal;
