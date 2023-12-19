import React, { useState } from "react";
import DonationCard from "./DonationCard";
import "./UserProfile.css";
import Profile from "../../assets/ProfilePicture.jpeg";
const UserProfile = () => {
  const [goal, setGoal] = useState(10000);
  const [donatedAmount, setDonatedAmount] = useState(5000);

  const handleDonateClick = (donationAmount) => {
    const tokens = generateTokens(donationAmount);

    // Update goal and donatedAmount
    setGoal((prevGoal) => prevGoal + donationAmount);
    setDonatedAmount((prevDonated) => prevDonated + tokens);

    // Implement your donation logic here
    console.log(`Donation button clicked! Donated: $${donationAmount}`);
  };

  return (
    <>
      <div className="UserProfileContainer">
        <div className="profileContainer">
          <div className="profileDescription">
            <p className="name">Michael seyoum</p>
            <img
              src={Profile}
              className="profilePicture"
              alt="profile Picture"
            ></img>
          </div>
          <div className="tokenContainer">
            <div className="tokenBox">
              <p className="tokenText">Token</p>
            </div>
            <div className="tokenAmount">
              <p className="tokenAmountText">1000</p>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <p className="FundsText">Funds</p>
        <DonationCard
          image={Profile}
          title="Michael Broke At the moment"
          description="Help michael become a millionaire"
          goal={1000000}
          onDonateClick={handleDonateClick}
        />

        <DonationCard
          image={Profile}
          title="Me again this time make me a billionare"
          description="Help michael become a billionare"
          goal={100000000}
          onDonateClick={handleDonateClick}
        />
      </div>
    </>
  );
};

export default UserProfile;
