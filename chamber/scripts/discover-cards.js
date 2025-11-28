import places from "../data/places.mjs";

//Print to console :
//console.log(places) //UNCOMMENT FOR DEBUGGING

// get the container for the discover cards
const discoverCards = document.querySelector('main');

const displayDiscoverCards= (interestPlaces) => {
    interestPlaces.forEach(place => {
        /************ FOR POPULATING GRID IN DISCOVER PAGE ****************/
        //Create elements to build for each card:
        let card = document.createElement('div');
        let title = document.createElement('h2');
        let imgContainer = document.createElement('figure');
        let imgDescription = document.createElement('figcaption');
        let photo = document.createElement('img');
        let address = document.createElement('span');
        let description = document.createElement("p");
        let learnMoreBtn = document.createElement("button");

        //Build figure (fig) content -----------------------
        //Build img content:
        photo.setAttribute('src', place.image);
        photo.setAttribute('alt', `Photo of ${place.name}`);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '300');
        photo.setAttribute('height', '200');

        //Build figCaption content:
        imgDescription.textContent = `Photo of ${place.name}`;

        imgContainer.appendChild(photo);
        imgContainer.appendChild(imgDescription);
        //--------------------------------------------------
        //Build Place Name (h2) content
        title.textContent = place.Name;
        //--------------------------------------------------
        //Build the address (span tag) with content:
        address.textContent = `${place.address.street} ${place.address.city}, ${place.address.country} ${place.address.zip}`;
        //--------------------------------------------------
        //Build the description (p) tag with content: 
        description.textContent = place.description;
        //--------------------------------------------------
        //Build the Learn More Button:
        learnMoreBtn.textContent = "Learn More";

        //Append all content to card(div):
        card.appendChild(title);
        card.appendChild(imgContainer);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(learnMoreBtn);

        //Append the card(section) to businessCard(#div):
        discoverCards.appendChild(card);
    });
}

displayDiscoverCards(places);