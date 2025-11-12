import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const RootLayouts = () => {
    return (
			<div className="w-11/12 mx-auto">
				<Navbar></Navbar>
				<Outlet></Outlet>
			</div>
		);
};

export default RootLayouts;