export const TEXT = 'TEXT';
export const TREE = 'TREE';
export const MAP = 'MAP';

const reducer = (state = {
  viewMode: MAP,
  contextMenu: {
    show: true,
    position: {
      x: 200,
      y: 200
    }
  }
}, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return {
        ...state,
        viewMode: action.payload,
      }
    case 'SHOW_CONTEXT_MENU':
      return {
        ...state,
        contextMenu:{
          show: true,
          position: action.payload,
        }
      }
    case 'HIDE_CONTEXT_MENU':
      return {
        ...state,
        contextMenu:{
          show: false,
          position: {x: 0, y: 0},
        }
      }
    default:
      return state
  }
}

export default reducer