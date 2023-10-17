
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Errorpage from '../Pages/Errorpage';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AddProduct from '../Pages/AddProduct';
import MyCart from '../Pages/MyCart';
import BrandDetails from '../Pages/BrandDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>
        , children: [
            {
                path: '/' , 
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: '/login', 
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/details',
                element: <BrandDetails></BrandDetails>,
               
            },
            {
                path: '/cart',
                element: <MyCart></MyCart>
            }
        ]
    }
]) 

export default router;