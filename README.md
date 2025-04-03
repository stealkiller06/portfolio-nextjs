# My Portfolio

This is my personal portfolio website built with Next.js. I created this project to test and learn Next.js features while showcasing my work and experience.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Docker](https://www.docker.com/) - For containerization
- [pnpm](https://pnpm.io/) - Package manager

## Features

- Dark/Light mode
- Responsive design
- Docker support for production deployment
- Static image optimization
- Blog support with MDX

## Local Development

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Docker Deployment

To run the application using Docker:

```bash
# Build and start the container
docker compose up --build

# To run in detached mode
docker compose up -d --build

# To stop the container
docker compose down
```

The application will be available at `http://localhost:3001`

## Project Structure

- `app/` - Next.js application code
- `public/` - Static assets
- `content/` - Blog posts and content
- `Dockerfile` - Docker configuration for production
- `docker-compose.yml` - Docker Compose configuration

## License

This project is open-source and released under the MIT License.
