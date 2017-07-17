const TEXT = 'TEXT';
const TREE = 'TREE';
const MAP = 'MAP';

const reducer = (state = {
  actionFired: false,
  viewMode: TEXT
}, action) => {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return {
        ...state,
        actionFired: !state.actionFired
      }
    default:
      return state
  }
}

export default reducer