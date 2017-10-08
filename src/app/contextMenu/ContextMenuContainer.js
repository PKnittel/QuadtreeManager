import ContextMenu from './ContextMenu';
import {connect} from 'react-redux';

import * as actions from '../actions';

function mapStateToProps(state) {
  return {
  	show: state.contextMenu.show,
  	position: state.contextMenu.position,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideContextMenu() {
      dispatch(actions.hideContextMenu());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu)