import React from 'react';
import './App.css';
import CarouselComponents from './components/carousel/CarouselComponents';
import RouterConfiguration from './router/RouterConfiguration';

function App() {
  return (
    <div className="App">
      <CarouselComponents />
      <RouterConfiguration />
    </div>
  );
}

export default App;
