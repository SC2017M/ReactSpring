import React from 'react';


//react bootstrap components
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { of,from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError, mergeMap } from 'rxjs/operators';


import ServiceCard  from './ServiceCard';
import ServiceRow from './ServiceRow';

import Messenger from '../service/MessengerService';

import LoadingIndicator from './LoadingIndicator';
import AppNotificationComponent from './AppNotificationComponent';

//dummy data
//import {servicedata} from '../data/servicedata.js';


//const APIURI = 'http://anapi.com';
const APIURL = process.env.REACT_APP_APICONFIG;

console.log('RAW fromFetch Call ');


const DataObservable = fromFetch(APIURL).pipe
(

 switchMap(response =>
 {
   if (response.ok)
   {
     // OK return data
     //return response.json();
      Messenger.next({loadresult:"loaded",percentage:100})
      console.log('DATAOBSERVABLE  - response OK');

      return of({ error:false, data: response.json()});
   }
   else
   {
     // Server is returning a status requiring the client to try something else.
     let errorstatus = response.status
     Messenger.next({loadresult:"not loaded " + errorstatus,percentage:100})
     console.log('DATAOBSERVABLE  - Error response');
     return of({ error: true, message: `Error ${response.status}`});

     //how does this send to Messenger ?

   }
 }),
 catchError(err =>
 {
   // Network or other error, handle appropriately
   console.error(err);
   console.log('DATAOBSERVABLE  - Error Response');

   //include error ?
   Messenger.next({loadresult:"not loaded " +err.message,percentage:100})

   return of({ error: true, message: err.message});
 })
);



class ChooseService extends React.Component
{

 _isMounted = false;
 workingCardArray={};
 responseData={};

 constructor(props)
 {
    super(props);
    // Don't call this.setState() here!
    this.state = { "showservices":false,"services":[],"cardArray":[]};
  }

  componetWillUnmount()
  {
    this._isMounted = false;
  }


  componentDidMount()
  {
    this._isMounted = true;
  }


    clickListServices = () =>
    {
      Messenger.next('percentage:0')
      var localshowservices  = this.state.showservices;

      console.log('APIURL is   ' + APIURL);

      //NB If we have clicked 'show' and current 'state' is DON'T then we want to retrieve data
      if(!localshowservices)
      {


           DataObservable.subscribe((data) =>
           {
             console.log('DataObservable data: ' + data.data);

             //resolve the promise
             data.data.then((response) =>
               {this.responseData=response;
                console.log('Subscribe ' + this.responseData)
                this.generateCardArray();

              });


           });

      }
      console.log('outside DataObservable subscribe ' + this.responseData);


    }


   slicearray(array, size)
   {

     console.log('inside slicearray length and size ' + array.length + ' ' + size);


     var results = [];
     while (array.length)
     {
       results.push(array.splice(0, size));
     }

     console.log('splicearray results ' + results);
     return results;
   };







  generateCardArray()
  {
     console.log('Called GenerateCardArray ');

    var splicedservices=[];

    var localshowservices = this.state.showservices;

    var stateServicesData = this.responseData;
    console.log('GenerateCardArray reponseData' + JSON.stringify(this.responseData));
    console.log('THIS.STATE.SERVICES:  ' + stateServicesData);


    splicedservices = this.slicearray(stateServicesData,3);
    console.log('generateArray splicedservices:  ' + JSON.stringify(splicedservices));
    console.log('generateCardArray SPLICEDSERVICES LENGTH:  ' + splicedservices.length);

    var splicedservicesindex=0;
    var theservices = [];
    var serviceRows='';

    console.log('generateCardArray : - splicedservices[0] ' + JSON.stringify(splicedservices[0]));
    console.log('generateCardArray : - splicedservices[0] ' + splicedservices[0]);

    console.log('generateCardArray : - splicedservices[1] ' + JSON.stringify(splicedservices[1]));
    console.log('generateCardArray : - splicedservices[2] ' + JSON.stringify(splicedservices[2]));

    this.workingCardArray = splicedservices.map(item => {
      console.log('map item: ' + item);
      console.log('map item length: ' + item.length);
      console.log('map item[0]: ' + JSON.stringify(item[0]));
      return (<ServiceRow salonservices={item} />)
    })


    //update showservices state - THIS TRIGGERS RENDER ()
    if(this._isMounted==true)
    {
      console.log('calling set state  ');
    this.setState({showservices:!localshowservices,services:this.responseData,cardArray:this.workingCardArray});
    }

  }

   renderButton()
   {
     return(
    <Container>
    <LoadingIndicator/>
    <AppNotificationComponent/>
   <Button  onClick={this.clickListServices} >show services</Button>
    </Container>
  );

 }

  renderCards()
  {
    const displayCardArray = this.state.cardArray;

    return(
   <Container>
   <LoadingIndicator/>
   <AppNotificationComponent/>
   {displayCardArray}
   </Container>
 );


  }


   render()
   {
     var rendershowservices = this.state.showservices;

     var   RenderOptionalContent='';

     if(!rendershowservices)
     {
       console.log('ChooseService RENDER Button');
       return this.renderButton();
     }
     else
     {
        console.log('ChooseService RENDER All Cards');
        return this.renderCards();
     }



    }



 }

 export default ChooseService;
