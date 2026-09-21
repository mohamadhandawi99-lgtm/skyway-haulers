//Retrieves and displays all services from data.js
function displayServices() {

	const servicesList = document.querySelector(".services___list");
	data.services_and_prices.list_of_services.forEach(service => {

		const serviceItem = document.createElement("div");
		serviceItem.className = "services___list___item fading-element";

		const serviceInformation = document.createElement("div");
		serviceInformation.className = "services___list___item___information";

		const serviceTitle = document.createElement("h3");
		serviceTitle.className = "services___list___item___information___title";
		serviceTitle.textContent = service.service_title;

		const serviceDescription = document.createElement("p");
		serviceDescription.className = "services___list___item___information___body";
		serviceDescription.innerHTML = service.service_description;

		const serviceBoxes = document.createElement("div");
		serviceBoxes.className = "services___list___item___boxes";

		const reviewBox = document.createElement("div");
		reviewBox.className = "review-box";

		const reviewHeader = document.createElement("div");
		reviewHeader.className = "review-box___header";

		const reviewName = document.createElement("p");
		reviewName.className = "review-box___header___name";
		reviewName.textContent = service.name;

		const reviewDate = document.createElement("p");
		reviewDate.className = "review-box___header___date";
		reviewDate.textContent = service.date;

		const reviewBody = document.createElement("p");
		reviewBody.className = "review-box___body";
		reviewBody.textContent = service.review_text;


		const priceLink = document.createElement("a");
		priceLink.className = "services___list___item___boxes___price";
		priceLink.href = `../prices/#${service.service_title.replace(/\s/g, "")}`;
		priceLink.innerHTML = "View prices <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"5 5 32 14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"services___list___item___boxes___price___image\"><path d=\"M5 12h30\"/><path d=\"m29 5 7 7-7 7\"/></svg>";

		reviewHeader.append(reviewName, reviewDate);
		reviewBox.append(reviewHeader, reviewBody);
		serviceInformation.append(serviceTitle, serviceDescription);
		serviceBoxes.append(reviewBox, priceLink);
		serviceItem.append(serviceInformation, serviceBoxes);
		servicesList.append(serviceItem);

	});

}

displayServices();
