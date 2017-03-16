import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native'
import FlipCard from 'react-native-flip-card'

class ColorView extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired,
    back: PropTypes.bool.isRequired,
    flipCard: PropTypes.func.isRequired,
    nextCard: PropTypes.func.isRequired,
  }

  _afterFlip(isFlipped) {
    console.log('isFlipped', isFlipped)
  }

  _renderCard() {

  }

  render() {
    return (
      <View style={styles.container}>
        <FlipCard
          style={styles.card}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          onFlipped={this._afterFlip}
        >
          {/* Face Side */}
          <View style={styles.face}>
            <Text style={styles.center}>Back of the Card</Text>
          </View>
          {/* Back Side */}
          <View>
          <Image source={{uri: this.props.card.url}} />
          </View>
        </FlipCard>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flex: 1,
    width: 250,
    height: 500,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 5,
    borderColor: '#d6d7da',
  },
});

export default ColorView
