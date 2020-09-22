import React from 'react';
import { Navbar} from 'react-bootstrap';






class SalonNavigationBar extends React.Component
{
   render()
   {
     return     <Navbar bg="dark" variant="dark" expand="lg" brand="react-bootstrap">
     <Navbar.Text className="justify-content-end">AR Salon and Day Spa Services</Navbar.Text>
     </Navbar>;
   }

}

export default SalonNavigationBar;
