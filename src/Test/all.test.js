import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/store';
import Nav from '../Components/navbar';
import Models from '../Components/render';
import Crypto from '../Components/crypto';
import cryptoReducer, { fetchFinanceData } from '../Redux/data';

const crypto = { FULLName: 'bitcoin', img: 'new' };
jest.mock('axios');

describe('fetchFinanceData', () => {
  it('should fetch crypto data successfully', async () => {
    const result = await fetchFinanceData();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });
});

describe('Nav component', () => {
  it('renders Nav component', () => {
    const r = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(r).toMatchSnapshot();
  });
  it('renders Models component', () => {
    const m = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Models />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(m).toMatchSnapshot();
  });
  it('renders Crypto component', () => {
    const m = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Crypto crypto={crypto} />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(m).toMatchSnapshot();
  });
});

describe('cryptoReducer', () => {
  it('should return the initial state', () => {
    expect(cryptoReducer(undefined, {})).toEqual([]);
  });

  it('should handle FINANCIAL_MODELING/fulfilled action', () => {
    const prevState = [{ id: 1, Name: 'Bitcoin', price: 45000 }];
    const action = {
      type: 'FINANCIAL_MODELING/fulfilled',
      payload: [
        { id: 2, Name: 'Ethereum', price: 1500 },
        { id: 3, Name: 'Litecoin', price: 180 },
      ],
    };
    const nextState = [
      { id: 1, Name: 'Bitcoin', price: 45000 },
      { id: 2, Name: 'Ethereum', price: 1500 },
      { id: 3, Name: 'Litecoin', price: 180 },
    ];
    expect(cryptoReducer(prevState, action)).toEqual(nextState);
  });
});
