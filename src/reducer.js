const initialState = {value: '', history: ''}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return {
        ...state,
        value:  state.value + '1',
        history: state.history + '1'
      };
    case '2':
      return {
        ...state,
        value:  state.value + '2',
        history: state.history + '2'
      };
    case '3':
      return {
        ...state,
        value:  state.value + '3',
        history: state.history + '3'
      };
    case '4':
      return {
        ...state,
        value:  state.value + '4',
        history: state.history + '4'
      };
    case '5':
      return {
        ...state,
        value:  state.value + '5',
        history: state.history + '5'
      };
    case '6':
      return {
        ...state,
        value:  state.value + '6',
        history: state.history + '6'
      };
    case '7':
      return {
        ...state,
        value:  state.value + '7',
        history: state.history + '7'
      };
    case '8':
      return {
        ...state,
        value:  state.value + '8',
        history: state.history + '8'
      };
    case '9':
      return {
        ...state,
        value:  state.value + '9',
        history: state.history + '9'
      };
    case '0':
      return {
        ...state,
        value:  state.value + '0',
        history: state.history + '0'
      };
    case '+/-':
      return {
        ...state,
        value:  state.value + '+/-',
        history: state.history + '+/-'
      };
    case '/':
      return {
        ...state,
        value:  state.value + '/',
        history: state.history + '/'
      };
    case '*':
      return {
        ...state,
        value:  state.value + '*',
        history: state.history + '*'
      };
    case '-':
      return {
        ...state,
        value:  state.value + '-',
        history: state.history + '-'
      };
    case '+':
      return {
        ...state,
        value:  state.value + '+',
        history: state.history + '+'
      };
    case '%':
      return {
        ...state,
        value:  state.value + '%',
        history: state.history + '%'
      };
    case '.':
      return {
        ...state,
        value:  state.value + '.',
        history: state.history + '.'
      };
    case 'c':
      return {
        ...state,
        value:  '',
        history: ''
      };
    case '=':
      return {
        ...state,
        value:  state.value + '=',
        history: state.history + '='
      };
    default:
      return state;
  }
}

export default reducer;