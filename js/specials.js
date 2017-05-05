var specials = {
	"special" : [
		{
			"id": "ba-baw",
			"name": "Monday: Ba Baw",
			"price": "$7.00",
			"description": "Savory Cambodian style rice porridge with combination of chicken, pork, and pork blood.",
			"image": "images/dishes/ba-baw.jpg",
			"altText": "ba-baw"
		},
		{
			"id": "salaw-machu-youn",
			"name": "Tuesday: Salaw Machu Youn",
			"price": "$9.00",
			"description": "Cambodian sour soup with fish, shrimp, and fresh herbs.",
			"image": "images/dishes/Salaw-Machu-Youn.jpg",
			"altText": "Salaw-Machu-Youn"
		},
		{
			"id": "loc-lac",
			"name": "Wednesday: Loc Lac",
			"price": "$8.00",
			"description": "Savory sautéed beef over fresh vegetables with side of pepper lime sauce.",
			"image": "images/dishes/Loc-Lac.jpg",
			"altText": "loc-lac"
		},
		{
			"id": "Yom-salad",
			"name": "Thursday: Yom Salad",
			"price": "$9.00",
			"description": "Traditional Khmer salad with shrimp, chicken, fresh veggies, vermicelli, and our traditional house sauce.",
			"image": "images/dishes/Yom-salad.jpg",
			"altText": "Yom-salad"
		},
		{
			"id": "Ban-Xeo",
			"name": "Friday: Ban Xeo (2 Crepes)",
			"price": "$8.00",
			"description": "Cambodian style sizzling pancake with ground chicken with a side of fresh veggies and special sweet fish sauce.",
			"image": "images/dishes/Ban-Xeo.jpg",
			"altText": "Ban-Xeo"
		},
		{
			"id": "curry",
			"name": "Saturday: Red (Chicken) / Green (Fish) Curry",
			"price": "$8.00",
			"description": "Traditional Cambodian curry served with noodles with your choice of red or green type of curry. Red curry is made with chicken, Green curry is made with fish.",
			"image": "images/dishes/chicken-curry.jpg",
			"altText": "curry"
		},
		{
			"id": "Beef-Pahok",
			"name": "Sunday: Beef Pahok",
			"price": "$8.00",
			"description": "Tender beef steak cooked medium well and sliced. Served with our spicy traditional Khmer Prahok sauce.",
			"image": "images/dishes/Beef-Pahok.jpg",
			"altText": "Beef-Pahok"
		}
	]
}

specials.display = function(specialsArray, CarouselLocation) {
	specialsArray.forEach(function(special) {
	    var formattedName = HTMLdishName.replace("%data%", special.name);
	    var formattedPrice = HTMLdishPrice.replace("%data%", special.price);
		var formattedSpecialDescription = SpecialDescription.replace("%data%", special.description);
		var formattedFullDishPic = HTMLfulldishPic.replace("%data%", special.image);

		var CarouselText = '<div class="carousel-text text-center">' + formattedName + formattedSpecialDescription + formattedPrice + /*ModalOrderButton +*/ '</div>';
		var CarouselCell = '<div class="carousel-cell carousel-cell--height">' + formattedFullDishPic + CarouselText + '</div>';

		$(CarouselLocation).append(CarouselCell);

	});
};

specials.display(specials.special, "#carousel");