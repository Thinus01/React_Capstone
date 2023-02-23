import React from 'react';
import PropTypes from 'prop-types';

const Crypto = ({ crypto }) => {
  const {
    Name, img,
  } = crypto;

  return (
    <div className=" CryptoList">
      <div>
        <p className="Font">
          {' '}
          {Name}
        </p>
        <div className="Currency">
          <img className="images" src={`https://www.cryptocompare.com${img} `} alt="symbol" />
        </div>
        <p />
      </div>
    </div>
  );
};

Crypto.propTypes = {
  crypto: PropTypes.shape({
    img: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
  }).isRequired,
};
export default Crypto;
