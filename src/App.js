import { useSpring, animated } from 'react-spring';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Nav from './Components/Nav';

// ?Ideas:
// Slide in tech skills on scroll

const App = () => {
  let parallax;
  return (
    <div className="app">
      <Nav />
      <Parallax pages={2} ref={(ref) => (parallax = ref)}>
        <ParallaxLayer offset={0.0} speed={0}>
          <div className="bg1">One</div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0}>
          <div className="bg2">Two</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
