import './App.css';
import { Footer, Blog, Header, WhatGPT3, Features, Possibility } from './containers';
import { Brand, CTA, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <div className='gradient-bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
