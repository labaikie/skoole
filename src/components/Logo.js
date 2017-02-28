import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Logo({ size, color }) {
  return (
    <View style={styles[size]}>
      <Text style={styles[color]}>Snoop</Text>
    </View>
  )
}

Logo.propTypes = {
  size: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  large: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  medium: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  white: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})


export default Logo;
