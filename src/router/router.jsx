import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyMarathons from "../pages/MyMarathons";
import MyApplications from "../pages/MyApplications";
import AddMarathon from "../pages/AddMarathon";
import MarathonDetails from "../pages/MarathonDetails";
import SignIn from "../pages/SignIn";
import Marathons from "../pages/Marathons";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";





const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
              path:'/',
              element:<HomePage></HomePage>
            },{
                path:'/marathons',
                element:<PrivateRoute>
                    <Marathons></Marathons>
                </PrivateRoute>,
                loader:()=> fetch('https://marathon-x-server.vercel.app/marathons')
            },{
                path:'/login',
                element:<SignIn></SignIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },{
                path: '/marathon/:id',
                element: <PrivateRoute>
                    <MarathonDetails></MarathonDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://marathon-x-server.vercel.app/marathon/${params.id}`)
            },{
                path:'about',
                element:<About></About>
            }

        ]
    },{
        path: "/dashboard",
        element:<DashBoardLayout></DashBoardLayout>,
        children:[
            
                 {
                    path:'add-marathon',
                    element:<PrivateRoute><AddMarathon></AddMarathon></PrivateRoute>
                 },{
                    path: "/dashboard/my-marathons",
                    element:<PrivateRoute>
                         <MyMarathons></MyMarathons>
                    </PrivateRoute>,
                },
                  {
                    path: "my-applications",
                    element:<PrivateRoute>
                        <MyApplications></MyApplications>
                    </PrivateRoute>,
                  },
        ]
    },{
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])

export default router;