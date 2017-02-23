import { connect } from 'react-redux'
import ExploreView from './ExploreView'
import { request } from './ExploreState'

export default connect(
  state => ({
    students: state.getIn(['explore', 'students', 'list']).toJS(),
    filters: state.getIn(['explore', 'filters']).toArray()
  }),
  { request }
)(ExploreView);
