import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Page/Home/Home';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <h3>Login</h3>,
            },
        ],
    },
]);

export default Router;
