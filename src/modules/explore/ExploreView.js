import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'



class ExploreView extends Component {



  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.request()
  }

  render() {
    return (
      <View><Text>Explore</Text></View>
    )
  }

}


export default ExploreView
