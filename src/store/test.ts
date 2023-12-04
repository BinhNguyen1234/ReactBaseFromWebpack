const exampleThunkFunction = (dispatch: any, getState : any) => {
    const stateBefore = getState()
    console.log(`Counter before: ${stateBefore.counter}`)
    dispatch(increment())
    const stateAfter = getState()
    console.log(`Counter after: ${stateAfter.counter}`)
  }