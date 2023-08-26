import React, { useState, useEffect } from "react";
import "./objectShots.css";

const ObjectShots = () => {
	const [drinkName, setDrinkName] = useState("");
	const [cocktailData, setCocktailData] = useState(null);

	useEffect(() => {
		if (cocktailData) {
			document.querySelector("h2").innerText = cocktailData.strDrink;
			document.querySelector("img").src = cocktailData.strDrinkThumb;
			document.querySelector("h3").innerText = cocktailData.strInstructions;
		}
	}, [cocktailData]);

	const getDrink = () => {
		fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.drinks && data.drinks.length > 0) {
					setCocktailData(data.drinks[0]);
				}
			})
			.catch((err) => {
				console.log(`error ${err}`);
			});
	};

	return (
		<div className="container">
			<dive className='input'>
				<h1>Which Cocktail recipe would you like?</h1>
				<input
					type="text"
					name="drinkName"
					placeholder="Enter a drink name..."
					value={drinkName}
					onChange={(e) => setDrinkName(e.target.value)}
				/>
				<br /><br/>
				<button type="button" onClick={getDrink}>
					Get Cocktail
				</button>
			</dive>
            
			{cocktailData && (
				<div className="description">
					<h2>{cocktailData.strDrink}</h2>
					<img src={cocktailData.strDrinkThumb} alt="" />
                    <h1>Recipe</h1>
					<h3>{cocktailData.strInstructions}</h3>
				</div>
			)}
		</div>
	);
};

export default ObjectShots;
