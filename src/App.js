
import classes from './App.module.css';
import Header from './Header';
import ProductPreview from './ProductPreview'
import ProductDetalisApp from './ProductDetalis/ProductDetalisApp'


function App() {

  return (
    <div className="classes.App">
      <Header/>

      <div className={classes.MainContainer}>
 
        <ProductPreview />
        <ProductDetalisApp />
      


      </div>
    </div >


  );
}

export default App;
