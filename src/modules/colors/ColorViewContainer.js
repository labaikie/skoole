import {connect} from 'react-redux'
import ColorView from './ColorView'
import { flipCard, nextCard } from './ColorState'

export default connect(
  state => {
    const currentIndex = state.getIn(['color', 'current'])
    return {
      card: state.getIn(['color', 'cards', currentIndex]).toJS(),
      back: state.getIn(['color', 'back']),
    }
  },
  { flipCard, nextCard }
)(ColorView)
