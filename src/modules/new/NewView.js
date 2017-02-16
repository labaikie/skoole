import * as NewState from './NewState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {Component, PropTypes} from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

class NewStateView extends Component {

  constructor(props) {
    super(props)
    this.change = this.change.bind(this)
  }

  change() {
    this.props.dispatch(NewState.change());
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.change}>
          <Text>
            {this.props.greeting}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

NewStateView.propTypes = {
  greeting: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default NewStateView
