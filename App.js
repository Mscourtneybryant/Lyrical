import React from 'react';
import './App.css';
import Nav from './Nav';
import MusicEvents from './MusicEvents';
import MusicVideos from './MusicVideos';
import MusicUpdates from './MusicUpdates';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData'
import Footer from './Footer';
import Login from './Login';
import Logout from './Logout';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice'
import SignupPage from './SignupPage';
import LyricalCloud from './LyricalCloud';



import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {

  const user = useSelector(selectUser);
  
  
  return (

   
    <Router>
      <div className='App'>
      {user ? <Logout /> : <Login />}
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/MusicVideos" component={MusicVideos} />
          <Route path="/MusicEvents" component={MusicEvents} />
          <Route path="/MusicUpdates" component={MusicUpdates} />
          <Route path="/LyricalCloud" component={LyricalCloud} />
          <Route path="/SignupPage" component= {SignupPage} />
        </Switch>
      
     </div>
    
    </Router>
  )
  
}



const Home = () =>(
  <div>
    <marquee direction="right" bgcolor="#006400"> <h2>Let's Get Lyrical</h2> </marquee>

    <div>

   
     <h1>Search Your Favorite Song Lyrics</h1>
    
     <p>Create an account or login to save your searched lyrics in LyricalCLoud</p>
     <input  type="text" name="photo" placeholder="Search music lyrics..."/>
     <button>Submit</button>

      </div>


  <div>
  <ImageSlider slides={SliderData} />
  </div>
  <Footer/>

  </div>


)

 export default App;
