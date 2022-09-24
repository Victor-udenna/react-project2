import './App.css';
import app_logo from './images/half-circle.png';
import avatarimg from './images/avatar.svg';
import mediaplay_icon from './images/play-fill.svg';
import rocket_img from './images/rocket_bg.jpg';
import arrow_left from './images/chevron-left-solid.svg';
import space_shipicon from './images/rocket-3431.svg';
import bulb_icon from './images/lightbulb-fill.svg';
function App() {
  return (
    <div className="App">
<header>
  <nav className='App_nav'>
  <div className='logo_container'><img src={app_logo} alt="app-logo" className='app_logo'/><span>ui</span></div>
    <ul className='nav-list link_container'>
<li className='nav-listItem active'>Home</li>
<li className='nav-listItem'>Key Features</li>
<li className='nav-listItem'>Pricing</li>
<li className='nav-listItem'>Testimonal</li>
<li className='nav-listItem'>FAQ</li>
    </ul>
    <ul className='nav-list login_option'>
    <li className=''>Log in</li>
    <li><button className='btn'>Sign Up</button></li>
    </ul>
  </nav>
</header>
<main className='App_main'>
  <section className='main_textcontent'>
   <h1 className='main_h1'> Powerful ui <br/> Builder</h1>
    <div className='details_container'>
   <div className='avatar_container'>
   <div className='avatar_bg'>
        <img src={avatarimg} alt=""avatar/>
      </div>
   </div>
      <p> We blends insight and strategy to create digital products for foward-thinking organisation</p>
    </div>
   <div className='btn_container'>
  <button className='contact_btn'> Contact Us</button>
<div className='mediaplay_container'>
<div className='half_circle'> <button className='playbtn'><img  src={mediaplay_icon}alt='media icon' className='media_icon'/></button></div>
<span>How its works</span>
</div>

 </div>
  </section>
<section className='rocket_container'> 
<div className='rocket_bg'>
<img src={rocket_img} alt="rocket_img" className='rocket_img'/>
</div>
</section>
</main>
<div className='app_card_container'>
  <div className='card card_services'><span>More Services</span>
 <div> <img src={arrow_left} alt="arrow left"/></div>
  </div>
  <div className='card card_option'>
  <div className='card_img'>
  <img src={bulb_icon} alt="bulb-icon"/>
</div>
<div className='card_text'>
  <h4 className='card_title'>Buisness planning</h4>
  <p className='card_p'>See more +</p>
</div>
  </div>
  <div className='card card_option'>
<div className='card_img'>
  <img src={space_shipicon} alt="space-icon"/>
</div>
<div className='card_text'>
<h4 className='card_title'>UI/UX Design</h4>
  <p className='card_p'>See more +</p>
</div>
  </div>
</div>
    </div>
  );
}

export default App;
