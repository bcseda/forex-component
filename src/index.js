import React from 'react'
import initialState from './initialState'
import storeFactory from './storeFactory'
import CurrencyBoard from './components/CurrencyBoard'
import './index.css';


const store = storeFactory(initialState)

const ForEx = () => (
  <div>
    <h1>For-Ex</h1>
    <CurrencyBoard store={store} />
  </div>
)

export default ForEx;
