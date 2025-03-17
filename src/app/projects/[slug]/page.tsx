"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import BackButton from "../../components/BackButton"
import { FaGithub } from "react-icons/fa"

interface ProjectData {
  [key: string]: {
    slug: string
    title: string
    image: string
    description: string | null
    technologies: string
    challenges: string
    github?: string | null
  }
}

const PROJECT_DATA: ProjectData = {
  "neon-calculator": {
    slug: "neon-calculator",
    title: "Neon Calculator",
    image: "/images/calculator.png",
    description: "Description détaillée du projet 1",
    technologies: "React, Next.js, Tailwind CSS",
    challenges: "Intégration d'une API externe et animation",
    github: "https://github.com/yourUsername/neon-calculator",
  },
  "la-porte": {
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
<br/>`,
    technologies: "Node.js, Express, JavaScript, HTML/CSS, JSON",
    challenges:
      "Log properly the positions of the characters, adding scores based on that and avoid re-adding them",
    github: "https://github.com/yourUsername/la_porte",
  },
  "todo-list": {
    slug: "todo-list",
    title: "Todo List",
    image: "/images/todolist.png",
    description: `<h1>Todo Application</h1>

<h2>1. Application Overview</h2>
<p>
  This <strong>Todo application</strong> allows users to add tasks, mark tasks as completed, archive tasks, and filter them. A search functionality has been included to filter tasks by text, as well as an option to include or exclude archived tasks from the active list. The application uses <strong>React</strong> with modular components and <strong>CSS</strong> styles to create a clean and intuitive user interface.
</p>

<h2>2. Folder and File Structure</h2>
<pre>
├── src
│   ├── assets                    # Folder for asset files (images, icons, etc.)
│   ├── components                # Folder for application components
│   │   ├── Header.jsx            # Header component displaying the app title
│   │   ├── ToDoHero.jsx          # Component showing total and completed task count
│   │   ├── TodoForm.jsx          # Form for adding new tasks
│   │   ├── TodoList.jsx          # Task list with options to complete/archive
│   │   └── TodoItem.jsx          # Individual task item component
│   ├── App.css                   # Global styles for the application
│   ├── App.jsx                   # Main component managing application state
│   ├── index.css                 # Global CSS for the application
│   └── main.jsx                  # Main entry point for React rendering
├── index.html                    # Base HTML file for rendering the application
├── README.md                     # README file for project documentation
</pre>

<h2>3. Challenges Encountered During Development</h2>
<p>
  <strong>a. Centralized State Management</strong><br>
  One of the primary challenges was managing the global state of the application, especially synchronizing the actions of each component (add, complete, archive) so that all components receive updates. As a result, it was necessary to centralize the state to ensure consistent synchronization of tasks across various components (<em>App, TodoList, ToDoHero</em>, etc.).
</p>
<p>
  <strong>b. Task Filtering and Searching</strong><br>
  Integrating dynamic search and filtering of archived tasks was another challenge. The application required a system that filters tasks while conditionally displaying or hiding archived tasks based on user input. This required adjustments in logic and conditional rendering to accurately filter tasks.
</p>
<p>
  <strong>c. Component Alignment and Styling</strong><br>
  Another difficulty was maintaining consistent styling and aligning elements, especially the search input and the "Show Archived" checkbox. The challenge was to ensure these elements align correctly with a uniform style across the application.
</p>
<h2>4. Solutions Implemented to Overcome These Challenges</h2>
<p>
  <strong>a. Centralizing State in App.jsx</strong><br>
  To manage tasks and ensure synchronization across each component, I centralized state management within the <em>App.jsx</em> component. This allowed me to pass task-handling functions as props to child components, simplifying global state management.
</p>
<p>
  <strong>b. Dynamic Filtering Based on User Input</strong><br>
  I added a search input field in <em>App.jsx</em> to capture search queries and a checkbox to show or hide archived tasks. Passing these values as props to <em>TodoList</em>, I was able to implement filtering logic within <em>TodoList</em> to display only relevant tasks based on search and archival criteria.
</p>
<p>
  <strong>c. Flexbox for Element Alignment</strong><br>
  To unify the layout, I used <em>Flexbox</em> to align search and filtering elements horizontally and prevent the label text from wrapping. This improved the aesthetics and usability of the application, providing a clean and professional interface.
</p>
<h2>5. Key Learnings from this Project</h2>
<ul>
  <li><strong>Centralizing state:</strong> Managing state centrally in a React application ensures consistent synchronization among components, simplifying shared data management.</li>
  <li><strong>Flexibility with controlled components:</strong> Using controlled components for inputs (search input, checkbox) helped me manage and manipulate values in real time within the user interface.</li>
  <li><strong>Efficient use of Flexbox:</strong> Flexbox layout proved crucial in aligning and spacing elements precisely within the application.</li>
</ul>
<h2>6. Potential Improvements</h2>
<ul>
  <li><strong>Adding local storage or a database:</strong> Using <em>localStorage</em> or a database to store tasks would preserve data after page reloads.</li>
  <li><strong>Enhanced sorting options:</strong> Adding options to sort tasks alphabetically, by creation date, or by status could offer more flexibility for the user.</li>
  <li><strong>Visual notifications:</strong> Including notifications or animations to indicate successful actions, like adding or archiving a task.</li>
  <li><strong>Task pagination:</strong> If the number of tasks grows significantly, pagination could improve performance and user experience.</li>
</ul>`,
    technologies: "React, Next.js, Tailwind CSS",
    challenges: "Integration of an external API and animation",
    github: "https://github.com/o-Bunny-o/calculator",
  },
  "la-porte": {
    slug: "la-porte",
    title: "La Porte",
    image: "/images/laportelogo.png",
    description: `<!-- FEATURES SECTION -->
<h2>FEATURES</h2>
<ul>
  <li><strong>User Authentication:</strong> Players can log in, register, and view their saved scores.</li>
  <li><strong>Dynamic Game Board:</strong> Interactive 8×8 grid where the player must pick up a key and reach the exit door.</li>
  <li><strong>Score Tracking:</strong> Scores are updated based on performance and saved between sessions.</li>
  <li><strong>Random Enemy Movement:</strong> Enemies move randomly on the grid, adding extra challenge.</li>
  <li><strong>Statistics Page:</strong> Displays all players’ scores in a table format.</li>
</ul>

<!-- TECHNOLOGIES USED SECTION -->
<h2>TECHNOLOGIES USED</h2>
<ul>
  <li><strong>Node.js:</strong> Backend server environment.</li>
  <li><strong>Express.js:</strong> Framework for handling routes, authentication, and game logic.</li>
  <li><strong>JavaScript (ES6+):</strong> Implements game logic on both client and server.</li>
  <li><strong>HTML/CSS:</strong> Provides structured and styled user interface.</li>
  <li><strong>JSON:</strong> Stores game state and user data.</li>
</ul>

<!-- INSTALLATION SECTION -->
<h2>INSTALLATION</h2>
<ol>
  <li>Clone this repository:
    <pre><code>git clone https://github.com/o-Bunny-o/la_porte/</code></pre>
  </li>
  <li>Navigate to the project directory:
    <pre><code>cd la_porte</code></pre>
  </li>
  <li>Install the dependencies:
    <pre><code>npm install</code></pre>
  </li>
</ol>

<!-- USAGE SECTION -->
<h2>USAGE</h2>
<ol>
  <li>Start the server:
    <pre><code>npm start</code></pre>
  </li>
  <li>Open your browser and navigate to:
    <pre><code><a href="http://localhost:81" target="_blank">http://localhost:81</a></code></pre>
  </li>
</ol>

<!-- GAME RULES SECTION -->
<h2>GAME RULES</h2>
<ul>
  <li><strong>Objective:</strong> Pick up the key and reach the door to escape.</li>
  <li><strong>Movement:</strong> Use arrow keys to move up, down, left, or right.</li>
  <li><strong>Key Pickup:</strong> Move onto the cell containing the key to pick it up.</li>
  <li><strong>Avoid Enemies:</strong> Moving onto a cell occupied by an enemy results in a game loss.</li>
  <li><strong>Victory:</strong> Successfully reaching the door with the key awards 10 points.</li>
</ul>

<!-- FILE STRUCTURE SECTION -->
<h2>FILE STRUCTURE</h2>
<ul>
  <li><strong>server.js:</strong> Main server file (game logic, user authentication, and routes).</li>
  <li><strong>client.js:</strong> Client-side JavaScript (user interactions, game rendering, and movements).</li>
  <li><strong>index.html:</strong> Frontend HTML structure of the game.</li>
  <li><strong>styles.css:</strong> Layout, style, and responsive design.</li>
  <li><strong>game_state.json:</strong> Stores current positions (player, key, door, enemies).</li>
  <li><strong>users.json:</strong> Stores user credentials and scores.</li>
  <li><strong>public/assets:</strong> Background images and other visual resources.</li>
</ul>

<!-- CUSTOMIZATION SECTION -->
<h2>CUSTOMIZATION</h2>
<ul>
  <li><strong>Change game board size:</strong> Edit grid size in <code>client.js</code> and <code>server.js</code> for different layouts.</li>
  <li><strong>Add more enemies:</strong> Update enemy positions in <code>game_state.json</code> and adjust enemy logic in <code>server.js</code>.</li>
  <li><strong>Adjust points awarded:</strong> Modify scoring logic in <code>server.js</code>.</li>
  <li><strong>Customize styles:</strong> Edit <code>styles.css</code> to modify colors, button sizes, or layout.</li>
</ul>

<!-- FUTURE IMPROVEMENTS SECTION -->
<h2>FUTURE IMPROVEMENTS</h2>
<ul>
  <li><strong>Difficulty Levels:</strong> Add settings for varying enemy speeds or adding obstacles.</li>
  <li><strong>High Score Table:</strong> Store scores in a database to create leaderboards.</li>
  <li><strong>Sound Effects:</strong> Add audio effects for actions, victories, or defeats.</li>
  <li><strong>Responsive Design:</strong> Optimize UI for better mobile and tablet experience.</li>
</ul>`,
    technologies: "Node.js, Express, JavaScript, HTML/CSS, JSON",
    challenges:
      "Log properly the positions of the characters, adding scores based on that and avoid re-adding them",
    github: "https://github.com/o-Bunny-o/la_porte",
  },
  "premiers-vendredis": {
    slug: "premiers-vendredis",
    title: "Les Premiers Vendredis",
    image: "/images/premiers.jpg",
    description: null,
    technologies: "Next.js, Tailwind CSS",
    challenges: "Server-side rendering and SEO optimization",
    github: null,
  },
  "icons": {
    slug: "icons",
    title: "Milano Cortina",
    image: "/images/icons.jpg",
    description: null,
    technologies: "Next.js, Tailwind CSS",
    challenges: "Server-side rendering and SEO optimization",
    github: null,
  },
}

const slideFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
}

const slideFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
}

export default function ProjectDetailPage() {
  const params = useParams() as { slug: string }
  const slug = params.slug
  const project = PROJECT_DATA[slug]

  if (!project) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl text-primary">Project Not Found</h1>
      </div>
    )
  }

  return (
    <section className="max-w-3xl mx-auto">
      {/* Back Button */}
      <BackButton />
      <div className="flex flex-col md:flex-row gap-4 mt-5">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-60 h-auto object-cover rounded mb-4 mx-auto md:mx-0"
          initial="hidden"
          animate="visible"
          variants={slideFromLeft}
        />
        <motion.div
          className="flex flex-col justify-center text-left ml-8 mr-8 md:ml-0 md:mr-0"
          initial="hidden"
          animate="visible"
          variants={slideFromRight}
        >
          {/* Title and GitHub Icon */}
          <div className="flex items-center">
            <h1 className="text-5xl text-primary font-semibold">
              {project.title}
            </h1>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <FaGithub className="text-3xl text-gray-400 hover:text-white transition-colors duration-300" />
              </a>
            )}
          </div>
          <p className="mb-2 text-lg text-accent-light font-quicksand font-normal">
            <strong>Tech Used:</strong> {project.technologies}
          </p>
          <p className="mb-2 text-lg text-accent-light font-quicksand">
            <strong>Challenges | Struggles:</strong> {project.challenges}
          </p>
        </motion.div>
      </div>
      <motion.p
        className="text-secondary text-white font-quicksand mb-4 whitespace-pre-line mt-4 ml-8 mr-8 md:ml-0 md:mr-0"
        dangerouslySetInnerHTML={{ __html: project.description?.trim() || "" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      />
      {slug === "icons" && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: 50 }}
        >
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
        </motion.div>
      )}
      {slug === "premiers-vendredis" && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: 50 }}
        >
          <iframe 
            src="https://www.behance.net/embed/project/138667857?ilo0=1" 
            height="316" 
            width="404" 
            allowFullScreen 
            loading="lazy"
            allow="clipboard-write" 
            referrerPolicy="strict-origin-when-cross-origin"
            className="mx-auto"
          ></iframe>
        </motion.div>
      )}
    </section>
  )
}
