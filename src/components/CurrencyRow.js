import React from 'react';
import { boardPositions } from '../constants';
import CurrencyCell from './CurrencyCell';

const CurrencyRow = ({ currency, actions }) => {
  const tokens = (position) => (
    currency.weakerCurrencies.filter(c => c.position === position)
  );

  return (
    <div className="currency-row">
      <div className={`currency-row-title-cell label-${currency.name}`} >
        <div className="currency-row-title">{currency.name}</div>
        <div className="btn-group">
          <div className="btn btn-dec"
            onClick={actions.weakenCurrency(currency.name)}>
            -
          </div>
          <div className="btn btn-inc"
            onClick={actions.strengthenCurrency(currency.name)}>
            +
          </div>
        </div>
      </div>
      {boardPositions.map((p, i) => (
        <CurrencyCell key={p.value} label={p.display} tokens={tokens(i)} />
      ))}
    </div>
  )
};

export default CurrencyRow;
