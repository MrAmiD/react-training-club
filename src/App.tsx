import React from 'react';
import 'typeface-roboto';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainContent />
        <Footer />
      </header>
    </div>
  );
};

export default App;
