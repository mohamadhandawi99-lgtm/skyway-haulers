/* Services animation */

const homescreen___services = document.querySelector('.index___body___services');
const homescreen___serviceItems = homescreen___services?.querySelectorAll('.index___body___services___item');
if (homescreen___services && homescreen___serviceItems?.length) {

	const homescreen___showServiceItems = async () => {

		for (const item of homescreen___serviceItems) {

			await new Promise((resolve) => {

				item.addEventListener("transitionend", resolve, { once: true });
				requestAnimationFrame(() => {

					item.style.opacity = "1";
					item.style.transform = "translateX(0)";

				});

			});

		}

	};

	const homescreen___startServiceAnimation = () => {

		const homescreen___parentTransitionEnd = (event) => {

			if (event.propertyName !== "opacity") return;
			homescreen___services.removeEventListener("transitionend", homescreen___parentTransitionEnd);
			homescreen___showServiceItems();

		};

		homescreen___services.addEventListener("transitionend", homescreen___parentTransitionEnd);

	};

	const homescreen___servicesObserver = new MutationObserver(() => {

		if (!homescreen___services.classList.contains('fading-element___visible')) return;
		homescreen___servicesObserver.disconnect();
		homescreen___startServiceAnimation();

	});

	homescreen___servicesObserver.observe(homescreen___services, { attributes: true, attributeFilter: ["class"] });

}


/* Locations slider */

const homescreen___locationsSlider = document.querySelector('.index___body___locations___slider');
const homescreen___locationsSliderSpeed = 0.1;
const homescreen___locations = data?.important?.locations;
if (homescreen___locationsSlider && Array.isArray(homescreen___locations) && homescreen___locations.length) {

	homescreen___locations.forEach((location) => {

		const homescreen___locationItem = document.createElement('h3');
		homescreen___locationItem.className = 'index___body___locations___slider___item';
		homescreen___locationItem.textContent = location;
		homescreen___locationsSlider.append(homescreen___locationItem);

	});

	let homescreen___locationsSlider___position = 0;
    let homescreen___locationsSlider___lastTime = performance.now();

    const homescreen___moveLocationsSlider = (time) => {

        const deltaTime = time - homescreen___locationsSlider___lastTime;
        homescreen___locationsSlider___lastTime = time;
        homescreen___locationsSlider___position -= homescreen___locationsSliderSpeed * deltaTime;
        const firstBox = homescreen___locationsSlider.firstElementChild;
        const boxWidth = firstBox.offsetWidth;
        const gap = parseFloat(getComputedStyle(homescreen___locationsSlider).gap) || 0;
        const firstBoxDistance = boxWidth + gap;

        if (homescreen___locationsSlider___position <= -firstBoxDistance) {

            homescreen___locationsSlider___position += firstBoxDistance;
            homescreen___locationsSlider.append(firstBox);

        }

        homescreen___locationsSlider.style.transform = `translateX(${homescreen___locationsSlider___position}px)`;
        requestAnimationFrame(homescreen___moveLocationsSlider);

    };

    requestAnimationFrame(homescreen___moveLocationsSlider);

}


/* Reviews */

const homescreen___reviews = document.querySelector('.index___body___reviews');
const homescreen___reviewsData = data?.homescreen?.homescreen_reviews?.slice(0, 5);
if (homescreen___reviews && homescreen___reviewsData?.length) {

	const homescreen___createReviewBox = (review) => {

		const reviewBox = document.createElement('div');
		reviewBox.className = 'review-box';

		const reviewHeader = document.createElement('div');
		reviewHeader.className = 'review-box___header';

		const reviewName = document.createElement('p');
		reviewName.className = 'review-box___header___name';
		reviewName.textContent = review.name;

		const reviewDate = document.createElement('p');
		reviewDate.className = 'review-box___header___date';
		reviewDate.textContent = review.date;

		const reviewBody = document.createElement('p');
		reviewBody.className = 'review-box___body';
		reviewBody.textContent = review.review_text;

		reviewHeader.append(reviewName, reviewDate);
		reviewBox.append(reviewHeader, reviewBody);

		return reviewBox;

	};

	homescreen___reviewsData.forEach((review) => {

		homescreen___reviews.append(homescreen___createReviewBox(review));

	});

	const homescreen___viewAllReviews = document.createElement('a');
	homescreen___viewAllReviews.className = 'index___body___reviews___button';
	homescreen___viewAllReviews.href = 'reviews.html';
	homescreen___viewAllReviews.innerHTML = 'View all <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 5 32 14" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="index___body___reviews___button___image"><path d="M5 12h30"/><path d="m29 5 7 7-7 7"/></svg>';

	homescreen___reviews.append(homescreen___viewAllReviews);

}