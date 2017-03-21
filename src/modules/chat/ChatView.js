import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'

export default class ChatView extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    // this.change = this.change.bind(this)
  }

  render() {
    return (
      <View>
        <Text>Will Render Video</Text>
      </View>
    )
  }

}
