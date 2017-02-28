import React, { PropTypes, Component } from 'react'
import { Container, Content } from 'native-base'
import UserCard from '../../components/UserCard'

class StudentsView extends Component {

  static propTypes = {
    request: PropTypes.func.isRequired,
    students: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { students, request } = this.props
    if(!students.length) request()
  }

  _renderCards() {
    return this.props.students.map(i => {
      return <UserCard key={i._id} user={i} />
    })
  }

  render() {
    return (
      <Container>
        <Content>
          {this._renderCards()}
        </Content>
      </Container>
    )
  }

}


export default StudentsView
