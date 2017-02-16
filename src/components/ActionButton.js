import React, {PropTypes, Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function ActionButton({action, text}) {
  return (
    <TouchableOpacity
      onPress={action}
      style={styles.button}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

ActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ActionButton;
