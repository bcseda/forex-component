import React from 'react'
import initialState from './initialState'
import storeFactory from './storeFactory'

const store = storeFactory(initialState)

const ForEx = () => (
  <div>
    <h1>For-Ex</h1>
    <pre>{JSON.stringify(store.state)}</pre>
  </div>
)

export default ForEx;
