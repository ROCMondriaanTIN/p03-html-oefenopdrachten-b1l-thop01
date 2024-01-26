const cars = [
    {brand: "bmw", description: "hier komt beschrijvingen"},
    {brand: "opel", description: "hier komt beschrijvingen"},
    {brand: "citroen", description: "hier komt beschrijvingen"},
    {brand: "toyota", description: "hier komt beschrijvingen"},
];

const projects = [
    { 
        title: "Hoger Lager", 
        description: "dit was mijn eerste schoolproject", 
        img: "img/cherrie.png"
    },
    { 
        title: "Escape room", 
        description: "This was escape ", 
        img: "img/escape.png"
    },
    
];



const cardContainer = document.querySelector(".cards-container");

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    cardContainer.innerHTML += createCard(car.brand, car.description); 
}

const projectsContainer = document.querySelector(".projects-container");
for (let index = 0; index < projects.length; index++) {
    const project = projects[index];
    projectsContainer.innerHTML += createProject(project.title, project.description, project.img);
}

function createCard(title, description){
    let cardHTML = `
    <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
        <button>klik hier</button>
    </div>
    `;
    return cardHTML;
}

function createProject(title, description, icon){
    let projectCard = `
        <div class="card">
            <h3>${title}</h3>
            <p>${description}</p>
            <img src="${icon}" alt="">
        </div>
    `;
    return projectCard;
}
