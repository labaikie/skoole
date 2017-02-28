import React, { PropTypes } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Card, CardItem, Left, Right, Thumbnail, Body, Text, Button, Icon } from 'native-base'

function UserCard({ user, onPress }) {
  return (
    <Card>

      <CardItem>
        <Left>
          <Thumbnail source={require('../../images/school_seal.png')} />
          <Body>
            <Text>Sue Parker</Text>
            <Text note>Pepperdine Univeristy</Text>
          </Body>
        </Left>
      </CardItem>

      <Image
        source={require('../../images/student.jpg')}
        style={styles.container}>
        <Text>category, category, category</Text>
      </Image>

      <CardItem content>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: 200,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default UserCard

