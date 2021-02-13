import React from 'react'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
const Profile = (props) => {
console.log(props)
return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.children} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>{props.profession}</Card.Text>
    <Card.Text>{props.bio}</Card.Text>
    <Button variant="primary" onClick={(name)=>props.handleName(props.name)}>Click Here!!</Button>
  </Card.Body>
</Card>)
}
Profile.defaultProps={
  name: "your full name",
  profession: "your profession",
  bio:"your biography"
}

export default Profile
