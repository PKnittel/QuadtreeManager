import App from './App';
import {connect} from 'react-redux';
import * as actions from './actions';

function mapStateToProps(state) {
  return {
  	viewMode: state.viewMode
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showContextMenu(e) {
      e.preventDefault();
      dispatch(actions.showContextMenu({x: e.pageX, y: e.pageY}));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)