import React from 'react';
import './App.css';
import './index.scss';
import 'bootstrap';
import { NavBar } from './components/nav_bar.js';
import { HomePage } from './components/home_page.js';
import { Profile } from './components/profile.js';
import { Services } from './components/services.js';
import { SignUp } from './components/sign_up.js';
import { LogIn } from './components/login.js';
import { AddService } from './components/add_service.js';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.navigation)
  return (
    <div className="App body">
      <div 
        className={this.props.modals.fadeOn ? 
                  'modal_fade modal_fade_trick' 
                : 'modal_fade'}>

      </div>
      <SignUp 
        signUp = {this.props.modals.signUp}
        outModals = {this.props.outModals}
      />
      <LogIn
        makeLogIn = {this.props.logIn}
        logIn = {this.props.modals.logIn}
        outModals = {this.props.outModals}
      />

      <div id = 'home'></div>
      <header className='header header--fixed container--flex'>
        <NavBar 
        loged = {this.props.user.loged} 
        toHome = {this.props.toHome}
        toProfile = {this.props.toProfile}
        toServices = {this.props.toServices}
        toSignUp = {this.props.toSignUp}
        toLogIn = {this.props.toLogIn}
        />
      </header>
      <main className="main main--regular">  
        { this.props.navigation.atHome ? <HomePage />
          : this.props.navigation.atProfile ? 
          <Profile 
            user = {this.props.user}
            deleteService = {this.props.deleteService}                             
          />
          : <Services 
              addService = {this.props.addService}
              user = {this.props.user}
            />
        }
      </main>
      <footer className = 'footer footer--fixed container--flex direction--row justify--start align--end items--end'>
        <span className = 'text-color-dark mg-b-5'>© EPAM, React Project. 2020</span>
      </footer>

    </div>
  );
  }
}

export default App;