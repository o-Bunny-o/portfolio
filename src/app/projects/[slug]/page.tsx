"use client"

import { useParams } from "next/navigation"

interface ProjectData {
  [key: string]: {
    video: any
    slug: string
    title: string
    image: string
    description: string
    technologies: string
    challenges: string
  }
}

const PROJECT_DATA: ProjectData = {
  "neon-calculator": {
    video: null,
    slug: "neon-calculator",
    title: "Neon Calculator",
    image: "/images/calculator.png",
    description: "",
    technologies: "React, Next.js, Tailwind CSS",
    challenges: "",
  },
  "la-porte": {
    video: null,
    slug: "la-porte",
    title: "La Porte",
    image: "/images/laportelogo.png",
    description: `<strong>FEATURES</strong>
<br/>
• User Authentication: Players can log in, register, and view their saved scores.
• Dynamic Game Board: An interactive 8×8 grid where the player must pick up a key and reach the exit door.
• Score Tracking: Scores are updated based on performance and saved between sessions.
• Random Enemy Movement: Enemies move randomly on the grid, adding an extra challenge.
• Statistics Page: Displays all players’ scores in a table format.
<br/>
<strong>TECHNOLOGIES USED</strong>
<br/>
• Node.js: Backend server using the Express framework.
• Express: Handles routes, authentication, and game logic.
• JavaScript (ES6+): Implements the game logic on both client and server sides.
• HTML/CSS: Provides structure and styling for the user interface.
• JSON: Stores the game state and user data.
<br/>
<strong>INSTALLATION</strong>
<br/>
1. Clone this repository:
<br/>git clone https://github.com/o-Bunny-o/la_porte/
<br/>
2. Navigate to the project directory:
<br/>   cd la_porte
<br/>
3. Install the dependencies:
<br/>   npm install
<br/>
<strong>USAGE</strong>
<br/>
1. Start the server:
<br/>   npm start
<br/>
2. Open your browser and go to http://localhost:81 to access the game.
<br/><br/>
<strong>GAME RULES</strong>
<br/><br/>
• Objective: Reach the door with the key to escape.
<br/>
• Movement: Use the arrow keys to move up, down, left, or right.
<br/>
• Key Pickup: Move onto the cell with the key to pick it up.
<br/>
• Avoid Enemies: If you move onto a cell occupied by an enemy, you lose the game.
<br/>
• Victory: If you reach the door with the key, you earn 10 points.
<br/>
<strong>FILE STRUCTURE</strong>
<br/>
• server.js: Main server file containing game logic, user authentication, and routes.
• client.js: Client-side JavaScript managing user interactions, login, game rendering, and movements.
• index.html: HTML structure for the game’s frontend.
• styles.css: CSS for layout, style, and responsive design.
• game_state.json: Stores the current game state, including player position, key, door, and enemy locations.
• users.json: Stores user credentials and scores.
• public/assets: Contains background images and other visual resources.
<br/>
<strong>CUSTOMIZATION</strong>
<br/>
• Change the game board size: Edit the grid size in client.js and server.js for a different layout.
• Add more enemies: Add more enemy positions in game_state.json and adjust enemy movement logic in server.js.
• Adjust points: Modify the score increment in server.js to increase or decrease points awarded for winning.
• Change the style: Update styles.css to change colors, button sizes, or other layout properties.
<br/>
<strong>FUTURE IMPROVEMENTS</strong>
<br/>
• Difficulty Levels: Add settings to vary enemy speed or introduce additional obstacles.
• High Score Table: Store scores in a database and display a leaderboard of top players.
• Sound Effects: Enhance the gaming experience with sounds for movement, victory/defeat, and interactions.
• Responsive Design: Optimize the user interface for mobile and tablet views.
<br/>`,
    technologies: "Node.js, Express, JavaScript, HTML/CSS, JSON",
    challenges:
      "Log properly the positions of the characters, adding scores based on that and avoid re-adding them",
  },
  "todo-list": {
    video: null,
    slug: "todo-list",
    title: "Todo List",
    image: "/images/todolist.png",
    description: "Description détaillée du projet 3",
    technologies: "React, Redux",
    challenges: "Gestion d'état complexe",
  },
  "premiers-vendredis": {
    video: null,
    slug: "premiers-vendredis",
    title: "Les Premiers Vendredis",
    image: "/images/premiers.jpg",
    description: "Description détaillée du projet 4",
    technologies: "Next.js, Tailwind CSS",
    challenges: "Rendu côté serveur et optimisation SEO",
  },
  "icons": {
    video: null,
    slug: "icons",
    title: "Milano Cortina",
    image: "/images/icons.jpg",
    description: "Description détaillée du projet 4",
    technologies: "Next.js, Tailwind CSS",
    challenges: "Rendu côté serveur et optimisation SEO",
  },

}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = PROJECT_DATA[slug];

  if (!project) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl text-primary">Projet introuvable</h1>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 mt-20">
        <img
          src={project.image}
          alt={project.title}
          className="w-80 h-auto object-cover rounded mb-4"
        />
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-5xl text-primary font-semibold mb-4">
            {project.title}
          </h1>
          <p className="mb-2 text-lg text-accent-light font-quicksand font-normal">
            <strong>Tech Used:</strong> {project.technologies}
          </p>
          <p className="mb-2 text-lg text-accent-light font-quicksand">
            <strong>Challenges | Struggles:</strong> {project.challenges}
          </p>
        </div>
      </div>
      <p
        className="text-secondary text-white font-quicksand mb-4 whitespace-pre-line mt-4"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
      {/* video only if project.video exists */}
      {project.video && (
        <div className="mt-8">
          <video controls className="w-full rounded">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {slug === "icons" && (
        <div className="mt-8">
          <iframe
            src="https://www.behance.net/embed/project/143737055?ilo0=1"
            height="316"
            width="404"
            allowFullScreen
            loading="lazy"
            frameBorder="0"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
            className="mx-auto rounded"
          ></iframe>
        </div>
      )}
    </section>
  );
}
