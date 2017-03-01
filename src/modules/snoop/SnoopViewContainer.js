import {connect} from 'react-redux';
import SnoopView from './SnoopView';

export default connect(
  state => ({
    // snoop: find the current snoop from List of user snoops and inject here
  })
)(SnoopView);
