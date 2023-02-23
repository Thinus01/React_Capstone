import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFinanceData } from '../Redux/data';

const Details = () => {
  const cryptos = useSelector((state) => state.crypto);
  const { id } = useParams();
  const filter = cryptos.filter((crypto) => (crypto.id === id));
  const dispatch = useDispatch();
  useEffect(() => {
    if (cryptos.length === 0) dispatch(fetchFinanceData());
  }, [dispatch, cryptos.length]);

  return (
    <div>
      <div className="Flex">
        <div className=" w-100">
          <img className="images ml-50 w-100 w" src={`https://www.cryptocompare.com${filter[0].img} `} alt="symbol" />
        </div>
        <div className="DetailContainer">
          <div>
            <p>
              <span className="Detail">Name:</span>
              {filter[0].Name}
            </p>
            <p />
            <p>
              <span className="Detail">
                Average price:
              </span>
              {filter[0].price}
            </p>
            <p>
              <span className="Detail">
                Todays lowest sale:
              </span>
              {filter[0].lowDay}
            </p>
            <p>
              <span className="Detail">
                Todays highest sale:
              </span>
              {filter[0].highDay}
            </p>
            <div className="gap-5 ">
              <span className="Detail">
                Algorithm:
              </span>
              { filter[0].algo }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
