import React, { PropTypes } from 'react'
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base'

function UserCard({ user }) {
  return (
    <Card>

      <CardItem>
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
