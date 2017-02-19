import { connect } from 'react-redux'
import ExploreView from './ExploreView'
import { request } from './ExploreState'

export default connect(
  state => ({
    students: state.getIn(['explore', 'students', 'list'])
  }),
  { request }
)(ExploreView);
