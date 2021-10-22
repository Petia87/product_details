import logo from './logo.png'
import classes from './App.module.css';

import ProductPreview from './ProductPreview'
import ProductDetalis from './ProductDetalis/ProductDetalisApp'

function App() {

  return (
    <div className="classes.App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src={logo} alt="" />
        </nav>
      </header>

      <div className={classes.MainContainer}>
 
        <ProductPreview />
       
     
        <ProductDetalis />
      


      </div>
    </div >


  );
}

export default App;
