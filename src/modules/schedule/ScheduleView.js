// import * as NewState from './NewState';
import * as NavigationState from '../../modules/navigation/NavigationState'
import React, { Component, PropTypes } from 'react'
import { Container, Content, Left, Body, Right, ListItem, Thumbnail, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'

class ScheduleView extends Component {

  static propTypes = {
    // greeting: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    // this.change = this.change.bind(this)
  }

  // change() {
  //   this.props.dispatch(NewState.change());
  // }
  // TODO : chunk out an item and lists into custom 'List' components
  // TODO : create component for each custom 'ListItem' components
  render() {
    return (
      <Container>
        <Content>

          <ListItem itemDivider>
            <Text>Now</Text>
          </ListItem>

          <ListItem avatar>
            <Left>
              <Thumbnail source={require('../../../images/student.jpg')} />
            </Left>

            <Body>
              <Text>Sue Parker</Text>
              <Text note>Click to snoop with Sue</Text>
            </Body>

            <Right>
                <Text note>3:43 pm</Text>
            </Right>
          </ListItem>

          <ListItem itemDivider>
            <Text>Confirmed & Upcoming</Text>
          </ListItem>

          <ListItem>
            <Text>You have no upcoming snoops</Text>
          </ListItem>

          <ListItem itemDivider>
            <Text>Requested</Text>
          </ListItem>

         <ListItem>
            <Text>You have no requested snoops</Text>
          </ListItem>

        </Content>
      </Container>
    )
  }
}

export default ScheduleView
