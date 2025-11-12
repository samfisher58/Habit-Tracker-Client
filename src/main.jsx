import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import RootLayouts from './Layouts/RootLayouts.jsx';
import Home from './Components/Home/Home.jsx';
import MyHabits from './Components/MyHabits/MyHabits.jsx';
import AddHabits from './AddHabits/Addhabits.jsx';
import PublicHabit from './Components/PublicHabits/PublicHabit.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		Component: RootLayouts,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: 'myHabits',
				// Component: MyHabits,
				element: (
					<PrivateRoute>
						<MyHabits></MyHabits>
					</PrivateRoute>
				),
			},
			{
				path: 'addHabits',
				// Component: AddHabits,
				element: (
					<PrivateRoute>
						<AddHabits></AddHabits>
					</PrivateRoute>
				),
			},
			{
				path: 'publicHabits',
				Component: PublicHabit,
			},
			{
				path: 'auth/register',
				Component: Register,
			},
			{
				path: 'auth/login',
				Component: Login,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />,
		</AuthProvider>
	</StrictMode>
);
