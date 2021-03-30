import logo from './logo.svg';
import Header from './components/header';
import Box from './components/box';
import Statebox from './components/state_box/statebox';
import Main_slider from './components/slider/Slider-main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Box />
      <Statebox />
      <Main_slider />
    </div>
  );
}

export default App;
