//Get a pizza from the dog.ceo api and place the photo in the DOM

// let pizza ={}

// pizza.size = 'large'
// pizza.toppings = ['spinach', 'onion', 'jalapenoes', 'banana peppers', 'garlic']
// pizza.crust= 'stuffed'
// pizza.sauce = 'heavy'

// pizza.estimatedDeliveryTime = function (){
//     console.log('Calculating...')
// }
// pizza.burnMouth = function(){
//     console.log("You're burning your mouth")  //This is an example of how you can call functions inside other functions, which are
// }
// pizza.frisbee=function(){
//     console.log('YEEEEeeeettttt')
// }

fetch("https://dog.ceo/api/breeds/image/random")
	.then((res) => res.json()) // parse response as JSON
	.then((data) => {
		console.log(data.message);
		document.querySelector("img").src = data.message;
	})
	.catch((err) => {
		console.log(`error ${err}`);
	});
