# Movie Portal

## Overview
Movie Portal is a web application that allows users to explore, add, and manage movies. Users can browse through movie details, search for specific movies, and maintain a personalized favorite list.

## Live Site
[Movie Portal Live Site](https://movie-portal-8bfdb.web.app)

## Features
- Users can explore movies with details like release year, duration, poster, rating, etc.
- Logged-in users can add movies with complete details.
- Users can delete movies from the "All Movies" page.
- The home page features the top 6 highest-rated movies.
- Users can search for a movie on the "All Movies" page.
- On the movie details page, users can add a movie to their favorites list.
- Users can manage their favorite list and remove movies as needed.

## Technologies Used
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: Firebase
- Authentication: Firebase Authentication

## Dependencies:
  ```
  "dependencies": {
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.2",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.0.2",
    "react-select": "^5.8.3",
    "react-simple-star-rating": "^5.1.7",
    "react-toastify": "^10.0.6",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.14.5"
  }
  ```

## Getting Started
### Prerequisites
- Node.js
- Firebase Account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/movie-portal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd movie-portal
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure Firebase keys in the `.env` file.

### Running the Application
```bash
npm start
```

## Usage
1. Users can browse and search for movies.
2. Logged-in users can add new movies with details.
3. Users can manage their favorite list by adding or removing movies.
4. Secure authentication ensures that only authorized users can modify data.

## Security
- Unauthorized access is restricted through Firebase Authentication.
- User data is protected with role-based access control.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or support, please email us at [support@movieportal.com](mailto:support@movieportal.com).

## Acknowledgments
- Inspired by popular movie listing platforms.
- Special thanks to the DevSafeX team for their support and collaboration.

