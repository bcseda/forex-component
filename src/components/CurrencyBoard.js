import React from 'react'
import CurrencyRow from './CurrencyRow'

const CurrencyBoard = ({store}) => {
  const { currencies } = store.state;

  return (
    <div id="currency-board">
    <h3>CurrencyBoard</h3>
    <ul>
      {
        currencies.map(c => <CurrencyRow
          key={c.name}
          currency={c}
          actions={store.actions}/>)
      }
    </ul>
  </div>
  )
}

export default CurrencyBoard;
