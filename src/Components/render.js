import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { fetchFinanceData } from '../Redux/data';
import Crypto from './crypto';

const Models = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.crypto);
  const display = cryptos.filter((item) => item.Name.toLowerCase().includes(input.toLowerCase()));
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (cryptos.length === 0) dispatch(fetchFinanceData());
  }, [dispatch, cryptos.length]);

  return (
    <>
      <form className="mb-5 nav">
        <input
          className="InputField"
          type="text"
          value={input}
          aria-label="search"
          placeholder="Crypto Currency"
          onChange={handleChange}
        />
      </form>
      <div className="BG">
        <div className="grid1">
          {display.map((crypto) => (
            <div key={uuidv4()}>
              <NavLink
                to={`/${crypto.id}`}
              >
                <Crypto crypto={crypto} />
              </NavLink>
            </div>
          )) }
        </div>
      </div>
    </>
  );
};

export default Models;
