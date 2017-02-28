import { connect } from 'react-redux'
import StudentsView from './StudentsView'
import { request } from './StudentsState'

export default connect(
  state => ({
    students: state.getIn(['students', 'list']).toJS(),
    filters: state.getIn(['students', 'config', 'filters']).toArray()
  }),
  { request }
)(StudentsView);
