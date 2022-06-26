import React from 'react';
import Insta from './img/istockphoto.jpg';
const hello = () => {
	return (
		<div className="flex shadow-md bg-violet-200 h-20">
			<div className="flex h-10 w-10">
				<img className="w-90 h-20" src={Insta} alt="lupa-logo" />
			</div>
			<div className="flex">
				<nav class="pl-96 ml-96 space-x-20 my-5">
					<a className="hover:text-teal-500 text-violet-700" href="https://www.google.com">
						Home
					</a>
					<a className="hover:text-teal-500 text-violet-700" href="https://www.google.com">
						Contact
					</a>
					<a className="hover:text-teal-500 text-violet-700" href="https://www.google.com">
						About
					</a>
					<a className="hover:text-teal-500 text-violet-700" href="https://www.google.com">
						Login
					</a>
				</nav>
			</div>
		</div>
	);
};

export default hello;
