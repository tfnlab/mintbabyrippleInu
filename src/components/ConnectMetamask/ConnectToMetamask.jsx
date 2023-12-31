import React, { useState } from "react";
import metamaskIcon from "./metamask.svg";
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
// import { Entity, Scene } from "aframe-react";
import "./styles.css";

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');

  const url = 'https://net.bnetly.com/post.jsp'; // replace with your target URL

  const handleClick = () => {
    if (value !== '') {
      const key = uuidv4(); // Generate a UUID key using the v4 function
      const data = { key: key, value: value }; // Include the key and value in the payload
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      fetch(url, requestOptions)
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    } else {
      console.error('Please enter a value');
    }
  };

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          Baby Ripple Inu
        </h1>
        Welcome to Our Token: The Ultimate Ripple Flipping Platform!
        <hr className="my-4" />

        Our mission is simple: to provide you with a seamless and profitable experience in flipping Ripple (XRP). With our platform, you can take advantage of the ever-changing cryptocurrency market and turn your Ripple investments into substantial profits.
        <hr className="my-4" />
        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter message here" style={{width: '100%'}} />

        <br className="my-2" />
        <br className="my-2" />
        <button onClick={handleClick}>Publish</button>

        <hr className="my-4" />
        Contract Address: 0xd02Ef3A9A13E47DDfb8eacdd90aBEb3d6CB7dA2C

        <br className="my-2" />
        Twitter:   https://twitter.com/BabyRippleInu
        <hr className="my-4" />
        <button
          onClick={connectToMetamask}
          className="btn btn-primary d-flex align-items-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
        >
          Connect Wallet
        </button>
        <hr className="my-4" />

      </div>
      <hr className="my-4" />

      <div className="container">
        <hr className="my-4" />
        bnet &copy; 2023 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
