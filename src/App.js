import Product from './component/Product';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ViewProdect from './component/ViewProdect';
function App() {
    // return(
    //   <>
    //   <Routes>
    //     <Route path='viewProduct' element={<></ViewProduct/>}/>

    //   </Routes>
    //   </>
    // )


    //component={ (id) => <ViewProdect {...id} /> }
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Product />} />
      <Route path="/ViewData/:id" element={ <ViewProdect />} />
      <Route path='/card' element={<Product />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
