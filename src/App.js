import {BrowserRouter, Route} from 'react-router-dom'
import Header from './screens/Header'
import './App.css'
import Navbar from './screens/Navbar'
import Footer from './screens/Footer'
import Home from './screens/Home'
function App() {
  return (
   <BrowserRouter className="App">
       
       <header>
        <Navbar />
       </header>
          
        <main>
          <Route path='/' exact={true} component={Home} ></Route>
        </main>

        <footer>
        <Footer></Footer>
        </footer>
   </BrowserRouter>
  );
}

export default App;
