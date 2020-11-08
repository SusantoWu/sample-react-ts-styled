import Home from './pages/Home';
import Form from './pages/Form';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/form/:page',
    exact: true,
    component: Form,
  },
  {
    path: '',
    redirect: '/',
  },
];