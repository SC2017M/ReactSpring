import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";





export default class ServiceCard extends React.Component
{

 constructor(props)
 {
    super(props);
    // Don't call this.setState() here!
    //this.state = { "showservices":false,"services":[]};
  }


  render()
  {

    console.log('ServiceCard: - item JSONstringify ' + JSON.stringify(this.props.salonservices));


    return(
      <Card  key={this.props.salonservices.id} className="text-center" style={{ width: '40rem' }}>
      <Card.Header>{this.props.salonservices.name}</Card.Header>
      <Card.Body>
        <Card.Text >
          {this.props.salonservices.price}
        </Card.Text>
        <Card.Text >
          {this.props.salonservices.name + " from AR Salon"}
        </Card.Text>
        <Card.Text >
          {"Duration :" + this.props.salonservices.time_in_minutes + " minutes"}
        </Card.Text>
        <Card.Subtitle >
          {"description: " + this.props.salonservices.description + " "}
        </Card.Subtitle>
      </Card.Body>
      <Button bg="white" text="blue">Book Now </Button>
    </Card>);

  }

}

/*
export default {ServiceCard};
*/
