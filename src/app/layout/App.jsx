import React, { Component } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailed from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';

import NavBar from '../../features/nav/NavBar/Navbar';
import {Container} from 'semantic-ui-react';
import {Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Container className="main">
      <Route exact path='/' component={HomePage}/>
      <Route path='/events' component={EventDashboard}/>
      <Route path='/events/:id' component={EventDetailedPage}/>
      <Route path='/people' component={PeopleDashboard}/>
      <Route path='/profile/:id' component={UserDetailed}/>
      <Route path='/settings' component={SettingsDashboard}/>
      <Route path='/createEvent' component={EventForm}/>

      </Container>
      </div>
    );
  }
}

export default App;
