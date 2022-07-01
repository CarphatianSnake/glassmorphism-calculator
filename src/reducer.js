const initialState = {value: '0'}

const reducer = (state = initialState, action) => {
  const deleteFirstZero = value => {
    return +value;
  }
  switch (action.type) {
    case '1':
      return {
        ...state,
        value:  deleteFirstZero(state.value + '1')
      };
    case '2':
      return {
        ...state,
        value:  deleteFirstZero(state.value + '2')
      };
    case '3':
      return {
        ...state,
        value:  deleteFirstZero(state.value + '3')
      };
    case '4':
      return {
        ...state,
        value:  deleteFirstZero(state.value + '4')
      };
    case '5':
      return {
        ...state,
        value:  deleteFirstZero(state.value + '5')
      };
    case '6':
      return {
        ...state,
        value:  deleteFirstZero(state.value + '6')
      };
    case '7':
      return {
        ...state,
        value:  deleteFirstZero(state.value + '7')
      };
    case '8':
      return {
        ...state,
        value:  deleteFirstZero(state.value + '8')
      };
    case '9':
      return {
        ...state,
        value:  deleteFirstZero(state.value + '9')
      };
    case '0':
      return {
        ...state,
        value:  deleteFirstZero(state.value + '0')
      };
    case '+/-':
      return {
        ...state,
        value:  -state.value
      };
    case '/':
      return {
        ...state,
        value:  state.value + '/'
      };
    case '*':
      return {
        ...state,
        value:  state.value + '*'
      };
    case '-':
      return {
        ...state,
        value:  state.value + '-'
      };
    case '+':
      return {
        ...state,
        value:  state.value + '+'
      };
    case '%':
      return {
        ...state,
        value:  state.value / 100
      };
    case '.':
      return {
        ...state,
        value:  state.value + '.'
      };
    case 'c':
      return {
        ...state,
        value: '0'
      };
    case '=':
      return {
        ...state,
        value:  state.value + '='
      };
    default:
      return state;
  }
}

export default reducer;