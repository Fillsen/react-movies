import React, { useState, useEffect } from "react";
import { Movielist } from "../components/Movielist";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import "../App.css";

// HIDE API KEY
const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
	const [movielist, setMovielist] = useState([]);
	const [loading, setLoading] = useState(true);

	const searchMovies = (str, type = "all") => {
		setLoading(true);
		fetch(
			`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
				type !== "all" ? `&type=${type}` : ""
			}`
		)
			.then((response) => response.json())
			.then((data) => {
				setLoading(false);
				setMovielist(data.Search);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=The Avengers`)
			.then((response) => response.json())
			.then((data) => {
				setMovielist(data.Search);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);

	return (
		<main className='container content'>
			<Search searchMovies={searchMovies} />
			{loading ? <Preloader /> : <Movielist movielist={movielist} />}
		</main>
	);
}

export { Main };
