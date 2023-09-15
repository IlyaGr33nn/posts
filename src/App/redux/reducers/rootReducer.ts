const initialState: GlobalState.State = {}

export const rootReducer = (state: GlobalState.State = initialState, action: GlobalState.Action) => {
  switch (action.type) {
    default:
      return state;
  }
}
