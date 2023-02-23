import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/store';
import Nav from '../Components/navbar';
import Models from '../Components/render';
import Crypto from '../Components/crypto';

const crypto = { FULLName: 'bitcoin', img: 'new' };
jest.mock('axios');

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
