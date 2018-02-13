import React from 'react';

const CurrencyCell = ({ label, tokens }) => {
  return (
    <div className="currency-cell">
      <div>{label}</div>
      {tokens.map(t => {
        const key = `${label}-${t.id}`;
        const classes = `token token-${t.id}`;
        
        return (
          <div className={classes} key={key}>{t.id}</div>
        );
      })}
    </div>
  );
};

export default CurrencyCell;
