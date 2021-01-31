
import React from 'react';


import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

import ServiceCard  from './ServiceCard';

export default class ServiceRow extends React.Component
{

 constructor(props)
 {
    super(props);
    // Don't call this.setState() here!
    //this.state = { "showservices":false,"services":[]};
      console.log('ServiceRow constructor')
  }


mapCards(salonservices)
{
  const cardArray = salonservices.map(item => {
    console.log('ServiceCards mapCards  item: ' + item);
    console.log('map item length: ' + item.length);
    console.log('map item[0]: ' + JSON.stringify(item[0]));
    return (<ServiceCard salonservices={item} />)
  })

  return(cardArray);
}


 generateCards(salonservices)
 {
   if(this.props.salonservices.length > 0 )
   {
    console.log('ServiceRow  - salonservices length : ' + this.props.salonservices.length);
    var servicesindex=0;
    var service = '';
    var serviceCards='';

     while(servicesindex < this.props.salonservices.length)
     {
       service = this.props.salonservices[servicesindex];
       console.log('ServiceRow: - services JSONstringify ' + JSON.stringify(service));
       serviceCards=serviceCards+'<ServiceCard salonsservices={'+service+'} />';
       servicesindex++;
     }
   }

    return(
        serviceCards
    );
 }




  render()
  {
    //props is array of 3 services
    console.log('rendering ServiceRow ');
   console.log('salonservices: ' + this.props.salonservices);

   /*
 <CardGroup>
  <ServiceCard>service=this.props.services[0]</ServiceCard>
  </CardGroup>
    */
  /*
  <ServiceCard salonservice={this.props.salonservices} />
  */

   return(
     <Row>
       <CardGroup>
            {this.mapCards(this.props.salonservices)}
        </CardGroup>
     </Row>
   );

    /*
    var varRow=<Row><CardGroup>;
    {this.props.services.map(function (service)
    {
          console.log(service);
          alert('ServiceRow: - item JSONstringify ' + JSON.stringify(service));
          varRow=varRow+<ServiceCard>{service}</ServiceCard>;
    })}

    varRow=varRow+</CardGroup></Row>;

    return varRow;
    */
  } //close render

}

/*
export default {ServiceRow};
*/
