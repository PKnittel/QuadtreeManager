import App from './App';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
  	viewMode: state.viewMode
  }
}

export default connect(mapStateToProps)(App)