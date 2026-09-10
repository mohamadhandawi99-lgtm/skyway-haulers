// Retrieves and displays all prices from data.js
function displayPrices() {

	const pricesList = document.querySelector(".prices___list");
	data.services_and_prices.list_of_services.forEach(service => {

		const priceItem = document.createElement("div");
		priceItem.className = "prices___list___item fading-element";
		priceItem.id = service.service_title.replace(/\s/g, "");

		const priceTitle = document.createElement("h3");
		priceTitle.className = "prices___list___item___title";
		priceTitle.textContent = service.service_title;

		const priceDescription = document.createElement("p");
		priceDescription.className = "prices___list___item___body";
		priceDescription.innerHTML = service.price_description;

		priceItem.append(priceTitle, priceDescription);
		pricesList.append(priceItem);

	});

}

displayPrices();
