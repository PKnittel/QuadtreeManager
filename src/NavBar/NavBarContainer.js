import NavBar from './NavBar';
import {connect} from 'react-redux';
import * as actions from '../actions';

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick() {
      dispatch(actions.dummyAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)