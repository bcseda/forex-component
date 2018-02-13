import React from 'react'
import CurrencyRow from './CurrencyRow'

class CurrencyBoard extends React.Component {

  constructor(props) {
    super(props)

    this.state = props.store.state
    this.strengthen = props.store.strengthenCurrency.bind(this)
    this.weaken = props.store.weakenCurrency.bind(this)
  }

  render() {
    const { currencies } = this.state

    return (
      <div id="currency-board">
        <h3>CurrencyBoard</h3>
        <ul>
          {currencies.map(c => <CurrencyRow
              key={c.name}
              currency={c}
              strengthen={this.strengthen}
              weaken={this.weaken}
              />
          )}
          </ul>
        </div>
    )
  }
}

export default CurrencyBoard
