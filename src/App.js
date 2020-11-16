import { useSpring, animated } from 'react-spring';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

const App = () => {
  let parallax;
  return (
    <Parallax pages={4} ref={(ref) => (parallax = ref)}>
      <ParallaxLayer offset={0.1} speed={0}>
        <div style={{ backgroundColor: 'blue' }}>One</div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={1}>
        <div style={{ backgroundColor: 'red' }}>Two</div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={2}>
        <div style={{ backgroundColor: 'orange' }}>Three</div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.4} speed={3}>
        <div style={{ backgroundColor: 'pink' }}>Four</div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default App;
