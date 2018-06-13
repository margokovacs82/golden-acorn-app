const initialState = {
  img: ''
};

function imgReducer(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_IMG':
      return {
      img:'🌰'
      };
      case 'HIDE_IMG':
      return {
      img:''
      };
    default:
      return state;
  }
}

export default imgReducer;
