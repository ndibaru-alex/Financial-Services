import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Contact from "../pages/Contact"
import About from '../pages/About'
import Services from '../pages/Servies'
import Fund from "../pages/Fund";
import Gratuity from "../pages/Gratuity";
import Training from "../pages/Training";

const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children:[
        {
            path : '',
            element : <Home/>
        },
        {
            path : '/contact',
            element : <Contact/>
        },
        {
            path : '/about',
            element : <About/>
        },
        {
            path : '/services',
            element :<Services/>,
            children : [
                {
                    path : '',
                    element : <Fund/>
                },
                {
                    path : 'gratuity',
                    element : <Gratuity/>
                },
                {
                    path : 'training',
                    element : <Training/>
                }
               
            ]
        }

        ]
    }

])

export default router