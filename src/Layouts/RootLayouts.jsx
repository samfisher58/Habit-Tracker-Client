import React from 'react';
import { Outlet,useNavigation } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Loading from '../Components/Loading/Loading';
import { ToastContainer } from 'react-toastify';



const RootLayouts = () => {
	const navigation = useNavigation();

    return (
			<div className="w-11/12 mx-auto">
				<Navbar></Navbar>
				
				{navigation.state === 'loading' && (
					<div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
						<Loading />
					</div>
				)}
				<Outlet></Outlet>
				<Footer></Footer>

				<ToastContainer></ToastContainer>
			</div>
		);
		
};

export default RootLayouts;