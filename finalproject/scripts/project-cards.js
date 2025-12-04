// store the URL of the JSON resource:
const url = './data/projects.json';

//Function to get the data from the JSON file:
async function getProjectData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.projects); //test on console if it is fetching data
    displayProjectCards(data.projects);
}

// get the container for the project cards
const projectCards = document.querySelector('#couse-contatiner');

const displayProjectCards= (projects) => {
    projects.forEach(project => {
        /************ FOR POPULATING COURSE WORK PROJECT DIV ****************/
        //Create elements to build for each card:
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let imgContainer = document.createElement('figure');
        let photo = document.createElement('img');
        let description = document.createElement("p");
        let url = document.createElement('a');

        //Build figure (fig) content -----------------------
        //Build img content:
        photo.setAttribute('src', project.image);
        photo.setAttribute('alt', `Photo of ${project.name}`);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '600');

        imgContainer.appendChild(photo);

        //--------------------------------------------------
        //Build Project Name (h2) content
        title.textContent = project.name;
        //--------------------------------------------------      
        //Build the description (p) tag with content: 
        description.textContent = project.description;
        //--------------------------------------------------
        //Build the link button:
        url.href = `${project.url}`;
        url.target = '_blank';
        url.textContent = "Look at the Project";

        //Append all content to card(div):
        card.appendChild(title);
        card.appendChild(imgContainer);
        card.appendChild(description);
        card.appendChild(url);
        card.classList.add('project-cards');

        //Append the card(div) to discoverCards(main):
        projectCards.appendChild(card);
    });
}

//Display the content for the cards
getProjectData();

