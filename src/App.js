import logo from './Images/icons/dev.png';
import './App.css';
import Header from './Components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Project from './Components/Projects/Project';
import { useEffect, useRef, useState } from 'react';
import ProjectDetails from './Components/Projects/ProjectDetails';

function App() {
	const titleRef = useRef();
	const titleRef2 = useRef();
	const isDarkModeEnabled = localStorage.getItem('theme') === "darkTheme";
	const [nightMode, setNightMode] = useState(isDarkModeEnabled);

	let systemTheme = window.matchMedia("(prefers-color-scheme: dark)");


	const checked = (value) => {
		if (value) {
			setNightMode(true);
		  localStorage.setItem("theme", "darkTheme");
		} else {
			setNightMode(false);
		  localStorage.setItem("theme", "mytheme");
		}
	  };

	useEffect(() => {
		if(!localStorage.getItem("theme")){
			setNightMode(systemTheme.matches)
		}
		systemTheme.addEventListener("change", (e) => {
			console.log(e.target.matches);
			checked(e.target.matches)});
	  }, [systemTheme]);

	function handleBackClick(ref) {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}
	return (
		<div data-theme={nightMode ? "darkMode" : "mytheme"} className="App">
			<Header reference={titleRef2} click={() => handleBackClick(titleRef)} nightMode={nightMode} setNightMode={checked} />
			<Routes>
				<Route path="/" element={<Home reference={titleRef} />}></Route>
				<Route path="/home" element={<Home reference={titleRef} />}></Route>
				<Route path="/project" element={<Project />}></Route>
				<Route path="/projectDetails/:index" element={<ProjectDetails />}></Route>
			</Routes>
		</div>
	);
}

export default App;
