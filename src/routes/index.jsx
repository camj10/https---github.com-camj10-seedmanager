import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Layout from "../layouts/Layout";
import Seed from "../pages/Seed/Seed";
import SeedAdd from "../pages/Seed/SeedAdd";
import SeedDetails from "../pages/Seed/SeedDetails";
import SeedEditar from "../pages/Seed/SeedEditar";
import NotFound from "../pages/NotFound";


export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Login />
            },
            {
                path:'seed',
                element: <Seed />
            },

            {
                path:'seed/new',
                element: <SeedAdd />
            },
            {
                path:'seed/:id',
                element: <SeedDetails />
            },
            {
                path:'seed/:id/edit',
                element: <SeedEditar />
            },
        ]
    }
]);