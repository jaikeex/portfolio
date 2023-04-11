import React from 'react';
import { About, Footer, Header, Navbar, Projects, Skills } from './templates';

const App = () => {
  return (
    <div className="theme-light">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
