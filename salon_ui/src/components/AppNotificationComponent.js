
import React from 'react';
import Messenger from '../service/MessengerService'




 export default class AppNotificationComponent extends React.Component
 {
   _isMounted = false;

  constructor(props)
  {
     super(props);
     // Don't call this.setState() here!
     this.state = {
      loadresult: "not loaded",
      isLoaded: false,
      change:0
    }

   }

   componetWillUnmount()
   {
     this._isMounted = false;
     Messenger.unsubscribe();
   }

   //componentWillMount()
   componentDidMount()
   {
      this._isMounted = true;

     console.log('componentDidMount this.state.loadresult ' + this.state.loadresult);

                Messenger.subscribe((message) =>
                {
                  console.log('componentDidMount inside subscribe - this.state.loadresult ' + this.state.loadresult);

                 let thisloadresult="";
                 let thischange=0

                   if(message.loadresult != null)
                   {
                      thisloadresult = message.loadresult;
                      if (this._isMounted)
                      {
                        thischange = this.state.change;
                        thischange++;
                        this.setState({loadresult:thisloadresult,isLoaded:true,change:thischange});
                        this.forceUpdate();
                      }

                   }


                });


   }



   render()
   {
     console.log('AppNotificationComponent Render: ' + this.state.loadresult);

     return (
       <div><h5>{this.state.loadresult} </h5></div>
     );
   }

 }
