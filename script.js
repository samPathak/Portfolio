document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "E-commerce Website",
            imgSrc: "./assets/Ecommerce.png",
            description: "This e-commerce website is built using React and Firebase, incorporating modular UI components, Firebase Realtime Database, Authentication, and Cloud Functions. It features a responsive design and secure payment integration."
        },
        {
            title: "Snake Game",
            imgSrc: "./assets/snake.jpg",
            description: "The Snake Game is a fun and addictive game where players control a snake using arrow keys to eat food and grow longer. Food appears randomly on the grid, and each bite increases the snake's length and the player's score. The challenge is to avoid colliding with the walls or the snake's own body, which ends the game. As the snake grows, maneuvering becomes more difficult, making it exciting and challenging. It's a simple yet engaging game built with JavaScript for endless entertainment."
        }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project fade-in";
        
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.imgSrc}" alt="${project.title}">
            <p>${project.description}</p>
        `;
        
        projectList.appendChild(projectDiv);
    });
});
