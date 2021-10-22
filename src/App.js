import logo from './logo.png'
import classes from './App.module.css';
import ProductData from './ProductData'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src={logo} alt="" />
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src='https://imgur.com/iOeUBV7.png' alt="" />
        </div>
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          console.log(ProductData.title);
          <p className={classes.ProductDescription}>{ProductData.description}</p>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div >
          <img  className={classes.ProductImage}
          src='https://imgur.com/PTgQlim.png' alt="" />
           <img  className={classes.ProductImage}
          src='https://imgur.com/PTgQlim.png' alt="" />
           <img  className={classes.ProductImage}
          src='https://imgur.com/PTgQlim.png' alt="" />
           <img  className={classes.ProductImage}
          src='https://imgur.com/PTgQlim.png' alt="" />
        </div>
        </div>

      </div>
    </div >


  );
}

export default App;
