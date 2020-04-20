import React from 'react';
import './style/App.scss';
import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Choose from './components/choose';
import Software from './components/software';
import Works from './components/works';

function App() {
  return (
    <div className="App">
     <Header />
     <Banner />
     <About />
     <Choose />
     <Software />
     <Works />
    </div>
  );
}

export default App;
