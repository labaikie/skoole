import {connect} from 'react-redux';
import NewView from './NewView';

export default connect(
  state => ({
    greeting: state.getIn(['greeting', 'greeting'])
  })
)(NewView);
