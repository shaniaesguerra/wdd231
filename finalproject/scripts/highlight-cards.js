// store the URL of the JSON resource:
const url = './data/projects.json';

// get the container for the project cards
const projectCards = document.querySelector('#project-card-spotlight');

//Function to get the data from the JSON file:
async function getProjectData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.projects); //test on console if it is fetching data
    displayProjectCards(data.projects);
}

//Create content spotlighted projects
const displayProjectCards = (projects) => {
    //Filter projects to include only with ratings of 2 and 3:
    let projectRating = projects.filter(project => 
        project.rating === 3 || project.rating === 2
    );

    //Shuffle the filtered list to get a random project every page load:
    for (let i = projectRating.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // random number to change index with

        //Swap items in the list:
        let temp = projectRating[i];
        projectRating[i] = projectRating[j];
        projectRating[j] = temp;
    }

    //Store the top 3 businesses in the filtered list
    const topThreeProjects = projectRating.slice(0, 3);

    //Display just the first three businesses:
    topThreeProjects.forEach(project => {

        /************ FOR POPULATING COURSE WORK PROJECT DIV ****************/
        //Create elements to build for each card:
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let imgContainer = document.createElement('figure');
        let photo = document.createElement('img');
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
        //Build the link button:
        url.href = `${project.url}`;
        url.target = '_blank';
        url.textContent = "Look at the Project";

        //Append all content to card(div):
        card.appendChild(title);
        card.appendChild(imgContainer);
        card.appendChild(url);
        card.classList.add('project-cards');

        //Append the card(div) to discoverCards(main):
        projectCards.appendChild(card);
    });

    //Build a div for a call to action to view the projects page:
    let goToProjects = document.createElement('div');
    let title = document.createElement('h2');
    let description = document.createElement('p');
    let projectBtn = document.createElement('a');

    //--------------------------------------------------
    //Build title (h2) content
    title.textContent = 'Like to View More Projects?';
    //--------------------------------------------------      
    //Build the description (p) tag with content: 
    description.textContent = 'Click the button below to view more of my projects';
    //--------------------------------------------------
    //Build the link button:
    projectBtn.href = 'projects.html';
    projectBtn.textContent = "More Projects";

    //Append to div:
    goToProjects.appendChild(title);
    goToProjects.appendChild(description);
    goToProjects.appendChild(projectBtn);
    goToProjects.id = 'more-projects-section';

    //Append to parent container:
    projectCards.appendChild(goToProjects);
}

getProjectData();