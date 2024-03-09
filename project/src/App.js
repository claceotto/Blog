import '../src/Style/App.scss';
import Header from './Components/Header';
import Button from 'react-bootstrap/Button';
import HeroCard from './Components/HeroCard';

function App() {
  return (
    <div>
      <Header>

      </Header>
      <Button variant="primary">example</Button>
      <HeroCard
        cardTitle={`Hello, I'm Clarisse`}
        cardSubTitle={`A front-end developer`}
        cardText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque maximus nulla. Donec dictum at nisi sed tempor.`}
        buttonText={'Test Button'}
        image={"https://i.pravatar.cc/150?img=16"}>
      </HeroCard>
    </div>
  );
}

export default App;
