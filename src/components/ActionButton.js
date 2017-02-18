import React, { PropTypes, Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function ActionButton({ action, text, color }) {
  return (
    <TouchableOpacity
      onPress={action}
      style={styles.button}>
      <Text style={styles[color]}>{text}</Text>
    </TouchableOpacity>
  )
}

ActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  white: {
    color: 'white',
    fontSize: 18,
  }
});

export default ActionButton;
