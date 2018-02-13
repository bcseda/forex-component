const shiftDown = p => p + (p < 10);

const sort = arr => arr.sort((a,b) => a.order - b.order);

const storeFactory = (initialState) => {
  const state = {...initialState}

  function strengthenCurrency(id){
    this.setState(prevState => {
      const {currencies} = prevState;

      const current = currencies.find(({name}) => name === id);
      const others = currencies.filter(c => c !== current);

      const flipped = others.filter(c => {
        const weakeningCurrent = c.weakerCurrencies.find(w => w.id === current.name)
        return weakeningCurrent && weakeningCurrent.position === 0;
      }).map(c => ({
        id: c.name,
        position: 0,
      }));

      const adjustedOthers = others.map(c => {
        const weakerCurrencies = c.weakerCurrencies.map(w => {
          return {
            id: w.id,
            position: w.position - (w.id === current.name),
          }
        })
        .filter(w => w.position >= 0);

        return Object.assign({}, c, { weakerCurrencies });
      });

      const adjustedCurrent = Object.assign({}, current, {
        weakerCurrencies: [
          ...flipped,
          ...current.weakerCurrencies
          .map(c => ( {id: c.id, position: shiftDown(c.position) })),
        ]
      });

      return {
        currencies: sort([adjustedCurrent, ...adjustedOthers])
      }
    })
  }

  function weakenCurrency(id){
    this.setState(prevState => {
      const {currencies} = prevState;
      const current = currencies.find(({name}) => name === id);
      const others = currencies.filter(c => c !== current);
      const flipped = current.weakerCurrencies
        .filter(w => w.position === 0)
      const adjustedCurrent = Object.assign({}, current, {
        weakerCurrencies: current.weakerCurrencies
        .filter(w => w.position > 0)
        .map(w => ({
          id: w.id,
          position: w.position - 1,
        }))
      });

      const adjustedOthers = others.map(c => {
        const weakerFlipped = flipped.filter(w => w.id === c.name)
        .map(w => ({
          id: current.name,
          position: 0,
        }));

        return {
          name: c.name,
          order: c.order,
          weakerCurrencies: [
            ...weakerFlipped,
            ...c.weakerCurrencies.map(w => Object.assign({}, w, {
              position: w.position + (w.id === current.name && w.position < 10)
            }),
          )],
        };
      });

      return {
        currencies: sort([adjustedCurrent, ...adjustedOthers])
      }
    })
  }

  return {
    state,
    strengthenCurrency,
    weakenCurrency,
  }
}

export default storeFactory
