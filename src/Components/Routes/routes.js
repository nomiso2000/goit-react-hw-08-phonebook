import {lazy} from 'react';
// import Home from '../HomePage/HomePage';
// import Register from '../Register/Register';
// import Login from '../Login/Login';
// import Contacts from '../Contacts/Contacts'
// export default {
//     HOME: "/",
//     REGISTER: "/register",
//     LOGIN: "/login",
//     CONTACTS: "/contacts",
// }

export default [ 
{
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('../HomePage/HomePage')),
    private: false,
    restricted: false,
},
{
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('../Register/Register')),
    private: false,
    restricted: true,
},
{
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('../Login/Login')),
    private: false,
    restricted: true,
},
{
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('../Contacts/Contacts')),
    private: true,
    restricted: false,
},
];
