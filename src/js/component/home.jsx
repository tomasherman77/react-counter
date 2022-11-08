import React, { useState, useEffect } from "react";
import Counter from "./Counter.jsx";
import ClockIcon from "./ClockIcon.jsx";

//create your first component
const Home = () => {
	const [count, setCount]= useState(0)

	useEffect(() => {
        const interval = setInterval(() => {
            setCount(count=> count+1);
            }, 1000);
            return () => clearInterval(interval);
        }, []);

		const inputSeconds= count.toString().split('').reverse()

	return (
		<div className="bg-light container-fluid d-flex justify-content-center flex-wrap pt-3">
			<ClockIcon/>
			<Counter seconds={inputSeconds[5]}/>
			<Counter seconds={inputSeconds[4]}/>
			<Counter seconds={inputSeconds[3]}/>
			<Counter seconds={inputSeconds[2]}/>
			<Counter seconds={inputSeconds[1]}/>
			<Counter seconds={inputSeconds[0]}/>
		</div>
	)
};

export default Home;