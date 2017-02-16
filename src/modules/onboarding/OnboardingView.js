import React, {PropTypes, Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import ActionButton from '../../components/ActionButton'

class OnboardingView extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
    exitOnboarding: PropTypes.func.isRequired,
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.centered}>
          <Text>Skoole</Text>
          <ActionButton
            action={this.props.exitOnboarding}
            text='Explore'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default OnboardingView
