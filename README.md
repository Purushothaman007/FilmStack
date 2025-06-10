
# FlickStack (IMDB Clone)

A React-based IMDB clone built with Vite, Tailwind CSS, and React Router. Browse trending movies, manage your watchlist, and enjoy a modern UI.

## Features

- Browse trending movies from TMDB API
- Add/remove movies to your personal watchlist (stored in localStorage)
- Filter and search movies by genre and title
- Responsive design with Tailwind CSS
- Routing with React Router

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/imdb-clone.git
cd imdb-clone/IMDB-clone
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

### Deployment

This project is ready for deployment on [Netlify](https://www.netlify.com/). The [`public/netlify.toml`](IMDB-clone/public/netlify.toml) file handles SPA redirects.

1. Push your code to GitHub.
2. Connect your repo to Netlify.
3. Set the build command to `npm run build` and the publish directory to `dist`.

## Project Structure

```
IMDB-clone/
  ├── public/
  ├── src/
  ├── index.html
  ├── package.json
  ├── tailwind.config.js
  ├── postcss.config.js
  └── vite.config.js
```

## License

MIT
