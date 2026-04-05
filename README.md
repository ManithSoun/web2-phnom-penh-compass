# Phnom Penh Compass

## Project Setup
### Installation Steps

```bash
# 1. Clone the repository
git clone git@github.com:ManithSoun/web2-phnom-penh-compass.git

# 2. Go into the project folder
cd phnom-penh-compass

# 3. Install dependencies
npm install

# 4. Copy the example env file and fill in your API keys
cp .env.example .env.local

# 5. Start the development server
npm run dev
```

The app will run at `http://localhost:5173`

### Folder Structure

```
phnom-penh-compass/
├── assets/
│   ├── images/
│   └── icons/
├── pages/
│   ├── explore.html
│   ├── services.html
│   ├── dos-donts.html
│   └── advisory.html
├── js/
│   ├── services/         # API call functions
│   ├── utils/            # Helper functions
│   └── main.js
├── css/
│   └── style.css         # Custom styles only (Tailwind via CDN)
├── constants/
│   └── emergencyData.js  # Static data (emergency contacts, embassies)
├── index.html            # Home page
├── config.example.js     # Key names only — commit this
├── js/config.js          # Your real API keys — NEVER commit this
├── .gitignore
└── README.md
```
### Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components & Pages | PascalCase | `PlaceCard.jsx`, `HomePage.jsx` |
| Functions & variables | camelCase | `fetchPlaces()`, `isLoading` |
| CSS classes | kebab-case | `.place-card`, `.weather-widget` |
| Constants | SCREAMING_SNAKE_CASE | `API_BASE_URL`, `MAX_RESULTS` |
| Custom hooks | `use` prefix | `useWeather.js`, `usePlaces.js` |
| Service files | camelCase + Service | `placesService.js`, `weatherService.js` |

### Branch Naming

```
feature/explore-page
feature/weather-widget
fix/place-card-crash
```
### Step-by-Step Workflow

```bash
# 1. Pull the latest main
git checkout main
git pull

# 2. Create your own branch
git checkout -b feature/your-feature-name

# 3. Commit code to the git
git add .
git commit -m "feat(section): describe what you did"

# 4. Push your branch to GitHub
git push origin feature/your-feature-name
