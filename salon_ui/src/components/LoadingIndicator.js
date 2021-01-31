
import React from 'react';
import { Progress } from 'reactstrap';


 import Messenger from '../service/MessengerService'




 export default class LoadingIndicator extends React.Component
 {

   _isMounted = false;

  constructor(props)
  {
     super(props);
     // Don't call this.setState() here!
     //this.state = { "showservices":false,"services":[]};
     this.state = {percentage:0,isLoaded:false}
   }

   componetWillUnmount()
   {
     this._isMounted = false;
     Messenger.unsubscribe();
   }

   componentDidMount()
   {
     this._isMounted = true;

     let thispercentage = this.state.percentage;

      Messenger.subscribe((message) =>
      {
        console.log('LOADINGINDICATOR Messenger message.percentage ' + message.percentage);
        console.log('LOADINGINDICATOR Messenger message.loadresult ' + message.loadresult);


        if(message.percentage > 0)
        {
          console.log('LOADINGINDICATOR Messenger setting percentage ');

         thispercentage = message.percentage;
        }

        console.log('LOADINGINDICATOR Messenger ' + message + ' thispercentage ' + thispercentage);

        /* add this */
        console.log('LOADINGINDICATOR _isMounted evaluation ');

        if (this._isMounted==true)
        {
        this.setState({percentage:thispercentage,isLoaded:true});
        console.log('LOADINGINDICATOR IS _iaMounted - after setState ' + this.state.percentage);

        }
        else
        {
          console.log('LOADINGINDICATOR NOT _iaMounted - after setState ' + this.state.percentage);

        }



      });


    }



   render()
   {
     console.log('LOADINGINDICATOR Render: percentage ' + this.state.percentage);

        return(
          <div>
          <h5>Loading..</h5>
          <Progress color="success"  value={this.state.percentage} />
          </div>);
   }
 }
