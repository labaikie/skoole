import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ActionButton from '../../components/ActionButton'
import Logo from '../../components/Logo'

class OnboardingView extends Component {

  static propTypes = {
    exitOnboarding: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
  }

  // TODO : refactor styles,
  // TODO : make container / box / bg_image components
  render() {
    return(
      <Image
        source={require('../../../images/bg_onboarding.jpg')}
        style={styles.container}>
        <View style={styles.center}>
          <Logo
            size={'medium'}
            color={'white'}
          />
          <View style={styles.box}>
            <ActionButton
              action={this.props.exitOnboarding}
              color={'white'}
              text='Explore'
            />
          </View>
        </View>
      </Image>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 50,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
  }
})

export default OnboardingView
