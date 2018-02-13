const storeFactory = (initialState) => {

  const strengthenCurrency = () => {}
  const weakenCurrency = () => {}

  return {
    state: {...initialState},
    actions: {
      strengthenCurrency,
      weakenCurrency,
    },
  }
}

export default storeFactory
