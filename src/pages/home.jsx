import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  Block,
  Toolbar,
  Link,
  NavRight,
  Searchbar,
  
} from 'framework7-react';
import HeroSection from '../components/HeroSection';
import himage from '../assets/pics/third.jpg';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Data from '../components/Data';

const HomePage = () => (
  <Page name="home"  style={{ maxWidth:"1300px"}}  >
    <Navbar  style={{ maxWidth:"1300px"}} >
      <img 
        src={himage} 
        alt="himage" 
        width={40} 
        height={40} 
        style={{ borderRadius: '50%', margin:"20px" }} 
      />
      <NavTitle>EamonSite</NavTitle>
      <Searchbar className="small-searchbar" />
<NavRight>
  <NavTitle></NavTitle>
<Toolbar top  style={{ right:"100px" }} >
        <Link>home</Link> 
        <Link>contact</Link> 
       
        
     
    </Toolbar>
</NavRight>
     

    </Navbar>
    <Block>
      <HeroSection />
      <Benefits />
      <Services />
      <Blog />
      <Contact />
     
    </Block>
    
    <Block>
    <Data />
      <Footer />
    </Block>
  </Page>
);

export default HomePage;
