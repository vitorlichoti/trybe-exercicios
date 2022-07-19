import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Content />
      </main>      
      <footer className="footer">
        <Footer />
      </footer>
      
    </div>    
  );
}

export default App;
