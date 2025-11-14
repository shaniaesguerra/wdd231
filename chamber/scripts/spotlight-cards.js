// store the URL of the JSON resource:
const url = './data/members.json';

// get the container for the business cards
const spotlightCards = document.querySelector("#spot-business-cards");

//Get the buttons in the menu:
const gridViewBtn = document.querySelector("#grid");
const listViewBtn = document.querySelector("#list");

//Function to get the data from the JSON file:
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.businesses); //test on console if it is fetching data
    displayBusinessGrid(data.businesses);
}

//Create content for Grid view
const displayBusinessGrid = (businesses) => {
    businesses.forEach(business => {
        if ((business.membership_lvl == 3 || business.membership_lvl == 2)) {
            /************ FOR POPULATING SPOTLIGHT CARDS IN LANDDING PAGE ****************/
            //Create elements to build for each card:
            let card = document.createElement('section');
            let icon = document.createElement('img');
            let businessName = document.createElement('h2');

            //info container contents:
            let address = document.createElement('p');
            let phoneNumber = document.createElement('p');
            let website = document.createElement("a");
            let membershipLvl = document.createElement('p');

            //Build icon (img) content:
            icon.setAttribute('src', business.image);
            icon.setAttribute('alt', `Icon for ${business.name}`);
            icon.setAttribute('loading', 'lazy');
            icon.setAttribute('width', '300');
            icon.setAttribute('height', 'auto');

            //Build businessName (h2) content
            businessName.textContent = `${business.name}`;

            //Build the (p) tags with content: 
            address.textContent = `${business.address.street}, ${business.address.city}, ${business.address.country} ${business.address.zip}`;
            phoneNumber.textContent = `${business.phone_number}`;

            if (business.membership_lvl == 3) {
                membershipLvl.textContent = `Membership Level: Gold`;
            }
            else if (business.membership_lvl == 2) {
                membershipLvl.textContent = `Membership Level: Silver`;
            }

            //Build website(a) content:
            website.href = `${business.url}`;
            website.target = '_blank';
            website.textContent = business.url;

            //Append all content to card(section):
            card.appendChild(icon);
            card.appendChild(businessName);
            card.appendChild(address);
            card.appendChild(phoneNumber);
            card.appendChild(website);
            card.appendChild(membershipLvl);

        
            //Append the card(section) to businessCard(#div):
            spotlightCards.appendChild(card);  
        }
    });
}

getBusinessData();