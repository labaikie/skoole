import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { Container, Content, Spinner } from 'native-base'
import { RTCView } from 'react-native-webrtc'

export default class ChatView extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    video: PropTypes.string.isRequired,
    isConnected: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // dispatch action to set stream to video
  }

  renderVideo() {
    const { video, isConnected } = this.props
    return isConnected ?
      <RTCView streamUrl={video} />
      :
      <Spinner color='green' />
  }

  render() {
    return (
      <Container>
        <Content>
          {this.renderVideo()}
        </Content>
      </Container>
    )
  }

}
