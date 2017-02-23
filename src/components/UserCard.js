import React, { PropTypes } from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Left, Right, Thumbnail, Body, Text, Button, Icon } from 'native-base'

function UserCard({ user }) {
  return (
    <Card>

      <CardItem>
        <Left>
          <Thumbnail source={require('../../images/pepperoni.png')} />
          <Body>
            <Text>Student Name</Text>
            <Text note>Pepperdine Univeristy</Text>
          </Body>
        </Left>
      </CardItem>

      <CardItem cardBody>

      </CardItem>

      <CardItem content>
        <Text>categories, categories, categories</Text>
      </CardItem>

      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Reviews</Text>
          </Button>
        </Body>
        <Right>
          <Text>11h ago</Text>
        </Right>
      </CardItem>

    </Card>
  )
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserCard

        // <Left>
        // </Left>
