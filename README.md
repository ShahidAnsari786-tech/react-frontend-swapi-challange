
Star Wars Galaxy Explorer

Welcome to the Star Wars Galaxy Explorer! This project is a web application designed to provide users with an interactive experience to explore the vast and captivating universe of Star Wars. Whether you're a die-hard fan or a casual enthusiast, this app offers a unique journey through iconic planets, species, and cultures from the beloved franchise.

Features and Components

App Component (App.js):

Manages the state for page number, fetched data, loading state, error state, and total pages.
Fetches data from the SWAPI (Star Wars API) based on the current page.
Renders the list of planets using the PlanetCard component.
Implements pagination controls for navigating between pages.
Displays an error message if there's an error in fetching data.
PlanetCard Component (PlanetCard.js):

Responsible for rendering details of a single planet, including its name, climate, population, terrain, and list of residents.
Uses the ResidentCard component to render details of each resident.
ResidentCard Component (ResidentCard.jsx):

Displays details of a resident of a planet, including their name, height, mass, and gender.
Utilizes local state to manage loading and toggling the display of resident details.
Fetches resident details from the provided URL using fetch.
The CSS file (App.css) contains styles for the main container (App) and various buttons (nex, pre, and .btn). Additionally, it includes styles for responsive grid layout (planet), skeleton loading animations, and media queries for different screen sizes.

Overall, the code fetches and displays data about planets from the Star Wars API, allowing users to navigate through pages and view details of each planet and its residents. The styling is done using CSS, including animations for loading skeletons and button hover effects.

User
how is the user interface 
ChatGPT
Based on the provided code snippets, the user interface (UI) of the application appears to be designed for displaying a list of planets from the Star Wars universe. Here's an overview of the UI components and their functionalities:

Header Section:

The header section contains the title "Planets Directories" with the word "Planets" in yellow color and "Directories" in tomato color.
Planet Cards:

Each planet is represented by a card in a grid layout.
Each card displays the following details about the planet:
Planet name (in gold color)
Climate
Population
Terrain
Number of residents
Residents (if any, displayed in a grid layout within the card)
The card design includes a blue background for the planet details and a light grey background for the residents section.
Resident details are initially hidden and can be toggled by clicking on the "Resident [index]" button.
Resident details include the resident's name, height, mass, and gender.
Pagination Controls:

Pagination buttons are provided for navigating through the list of planets.
The "BACK" button (styled with a left arrow icon) allows the user to navigate to the previous page.
The "NEXT" button (styled with a right arrow icon) allows the user to navigate to the next page.
The current page number is displayed in a blue button at the center, which is disabled and cannot be clicked.
Loading Skeletons:

Placeholder skeleton items are displayed while the data is being fetched.
These skeleton items mimic the layout of the actual planet cards and loading animation is applied to simulate data loading.
Footer Section:

The footer section displays the message "Made with ♥ by Shahid Ansari" in light grey color.
While data is being fetched, the message is displayed with a teal color and loading animation.
Styling and Responsiveness:

The UI is styled using CSS, with specific styles applied to different UI elements for consistent visual design.
Media queries are used to ensure responsiveness across various screen sizes, adjusting the grid layout and other styles accordingly.
Overall, the UI provides an intuitive interface for users to browse through a list of planets from the Star Wars universe, view their details, and navigate between pages. The design is visually appealing with consistent styling and responsive layout for a seamless user experience.

Technologies Used :
Frontend:

React: A JavaScript library for building user interfaces.
Redux: State management library for managing application state.
React Router: Routing library for React applications.
Axios: Promise-based HTTP client for making API requests.
CSS Modules: CSS file in which all class names and animation names are scoped locally by default.

Backend:

Node.js: JavaScript runtime for server-side development.

Star Wars API (SWAPI): RESTful API providing data from the Star Wars universe, used for retrieving planet and species information.
Development Tools:

npm: Package manager for installing project dependencies.
Git: Version control system for tracking changes in the project.
VS Code: Integrated development environment (IDE) for coding and debugging.

Skelleton-Loader:
The project employs a skeleton loader to enhance user experience during content loading. This technique displays a placeholder layout resembling the final content structure, ensuring users perceive progress and preventing them from perceiving delays as unresponsiveness. The skeleton loader is implemented using lightweight HTML and CSS animations, providing a seamless transition from the loading state to the fully rendered content.

MIT License

Copyright (c) 2024 ShahidAnsari786-tech

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.