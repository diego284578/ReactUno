
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="body">
      <div className="Header">
        <Header />
      </div>
     <div>
      <Main/>
     </div>
     <div>
      <Footer/>
     </div>
    
    </div>
  );
}

export default App;
