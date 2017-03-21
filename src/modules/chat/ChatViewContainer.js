import {connect} from 'react-redux'
import ChatView from './ChatView'

export default connect(
  state => ({
    isConnected: state.getIn(['chat', 'isConnected']),
    video: state.getIn(['chat', 'video'])
  })
)(ChatView)
