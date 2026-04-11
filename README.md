# Phnom Penh Compass

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/ManithSoun/web2-phnom-penh-compass.git
cd web2-phnom-penh-compass
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tailwind

```bash
npm run build:css
```

## Project Structure

# Project Structure

```bash
web2-phnom-penh-compass/
├── index.html              # Home page (weather + hero section)
├── explore.html            # Explore places page (Google Places API)
├── services.html           # Services & emergency contacts page
├── dos-donts.html          # Cultural guidelines page
├── advisory.html           # Travel advisory page (TuGo API)

├── src/
│   ├── js/                 # All JavaScript files
│   │   ├── components.js   # Shared components (navbar, footer)
│   │   ├── main.js         # General/common scripts (if needed)
│   │   ├── weather.js      # Fetch and display weather data
│   │   ├── explore.js      # Handle places data and UI
│   │   ├── services.js     # Display services and contacts
│   │   ├── emergencyData.js# Static emergency data
│   │   ├── dos-donts.js    # Logic for do’s & don’ts page
│   │   └── advisory.js     # Fetch and display advisory data
│
│   ├── css/
│   │   └── input.css       # Tailwind source file (edit here)
│
│   └── assets/             # Images, icons, and other static files

├── dist/
│   └── output.css          # Generated Tailwind CSS (DO NOT edit)

├── package.json            # Project config and scripts
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # Project documentation
```

### CSS

- Do not edit dist/output.css
- Edit src/css/input.css

Each HTML file must include:

```bash
<link rel="stylesheet" href="./dist/output.css">
```

## Workflow

### Start working

```bash
# Pull the latest main
git checkout main
git pull origin main
#  Create your own branch
git checkout -b feature/your-task
```

### After finishing

```bash
# Commit code to the git
git add .
git commit -m "feat(page): describe what you did"
# Push your branch to GitHub
git push origin feature/your-task
```

# Notes

- Run `npm run build:css` before coding
- Do not commit API keys
