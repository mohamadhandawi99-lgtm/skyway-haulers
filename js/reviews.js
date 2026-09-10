//Retrieves and displays all reviews from data.js
function displayReviews() {

	const reviewsList = document.querySelector(".reviews___reviews-list");
	data.list_of_reviews.forEach(review => {

		const reviewBox = document.createElement("div");
		reviewBox.className = "review-box fading-element";

		const reviewHeader = document.createElement("div");
		reviewHeader.className = "review-box___header";

		const reviewName = document.createElement("p");
		reviewName.className = "review-box___header___name";
		reviewName.textContent = review.name;

		const reviewDate = document.createElement("p");
		reviewDate.className = "review-box___header___date";
		reviewDate.textContent = review.date;

		const reviewBody = document.createElement("p");
		reviewBody.className = "review-box___body";
		reviewBody.textContent = review.review_text;

		reviewHeader.append(reviewName, reviewDate);
		reviewBox.append(reviewHeader, reviewBody);
		reviewsList.append(reviewBox);

	});

}

displayReviews();