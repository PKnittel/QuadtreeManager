export const TEXT = 'TEXT';
export const TREE = 'TREE';
export const MAP = 'MAP';

const reducer = (state = {
  viewMode: MAP
}, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return {
        ...state,
        viewMode: action.payload,
      }
    default:
      return state
  }
}

export default reducer