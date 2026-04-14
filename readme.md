# 🎬 Movies net

A Netflix-inspired movie browsing web app built using HTML, CSS, and JavaScript.

---

## 🚀 Live Demo
👉

---

## 📌 Project Overview

Movies net is a frontend web application that allows users to browse, search, and filter movies in a clean and interactive Netflix-style interface.

This project was built without any external APIs — all movie data is stored locally, demonstrating strong understanding of JavaScript fundamentals and DOM manipulation.

---

## ✨ Features

- 🔍 Real-time movie search
- 🎭 Filter movies by genre
- 🎬 Netflix-style UI layout
- 🎞 Hover animations on movie cards
- 📄 Movie detail modal popup
- ⚡ Dynamic rendering using JavaScript
- 💻 Fully responsive grid layout

---

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (ES6)

---

## 📂 Folder Structure

```
movies net/
├── index.html              # Main application page
├── style.css               # Styles and animations
├── script.js               # Core JavaScript logic
├── assets/
│   ├── movie1.jpg
│   ├── movie2.jpg
│   └── ...                 # Movie poster images
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for running local server)

### Installation

**Option 1: Direct Browser Access**
1. Open `index.html` directly in your browser
2. Start browsing movies!

**Option 2: Local Development Server**
1. Open your terminal
2. Navigate to the project directory:
   ```bash
   cd movies net
   ```
3. Start the development server:
   ```bash
   npx serve .
   ```
4. Open the app in your browser (usually `http://localhost:3000`)

---

## 💡 How It Works

### 1. Data Management
All movie data is stored in the `movies` array in `script.js`. Each movie object contains:
- `title`: Movie title
- `year`: Release year
- `genre`: Movie genre
- `description`: Short description
- `image`: Path to movie poster

### 2. Dynamic Rendering
The `displayMovies()` function dynamically creates HTML elements for each movie and appends them to the `#movies-container`.

### 3. Search Functionality
The search input uses real-time filtering:
- Captures user input with `keyup` event
- Converts both search query and movie titles to lowercase for case-insensitive matching
- Filters movies that match the search query

### 4. Genre Filtering
Users can filter movies by genre using the dropdown menu:
- `genreFilter` listens for `change` events
- Filters the movie list based on selected genre
- Displays "All Genres" when no filter is selected

### 5. Movie Modal
Clicking any movie card opens a detailed modal popup:
- Displays full movie information
- Includes larger poster image
- Provides close button and backdrop click to dismiss

---

## 🎨 Design System

### Color Palette
```css
/* Backgrounds */
:root {
    --bg-dark: #0f172a;
    --bg-card: #1e293b;
    --bg-modal: rgba(0, 0, 0, 0.5);
}

/* Text */
:root {
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --text-accent: #ef4444;
}
```

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Font Sizes**: 1rem - 2rem
- **Font Weights**: 400, 500, 700

### Key Components
- **Movie Cards**: 250px minimum width, hover scale effect
- **Modal**: Full-screen overlay with centered content
- **Responsive Grid**: Adapts to different screen sizes

---

## 📱 Responsive Design

The app uses a mobile-first approach with responsive design:

### Mobile (default)
- 1-2 columns grid
- Full-width movie cards
- Modal centered on screen

### Tablet (768px+)
- 3 columns grid
- Movie cards maintain aspect ratio
- Modal adapts to larger screens

### Desktop (1024px+)
- 4 columns grid
- Enhanced spacing and layout
- Premium Netflix-style presentation

---

## 🧪 Testing

### Manual Testing
1. Open the app in your browser
2. Test search functionality with various queries
3. Verify genre filtering works correctly
4. Click movie cards to open modals
5. Close modals and verify return to grid
6. Test on different screen sizes (mobile, tablet, desktop)
7. Check console for JavaScript errors

### Automated Tests
(No automated tests included in this version)

---

## 📝 Future Enhancements

- [ ] Add pagination for large movie lists
- [ ] Implement infinite scroll
- [ ] Add "Add to Favorites" functionality
- [ ] Create a dedicated favorites page
- [ ] Integrate with TMDB API for real movie data
- [ ] Add movie trailers (YouTube embeds)
- [ ] Implement user authentication
- [ ] Add movie rating system
- [ ] Dark/light mode toggle
- [ ] Loading states and error handling

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository, create a feature branch, and submit a pull request.

---


---

## 👨‍💻 Author

**[Your Name]**
- GitHub: [Your GitHub Profile](https://github.com/pinkberry527-sketch)


---

##  🙏 Acknowledgments

- Thanks to [ruth idehen] for creating this project
- Inspired by Netflix UI design
- Built with HTML, CSS, and JavaScript fundamentals

---

## 💬 Feedback

For questions, suggestions, or bug reports, please open an issue on the GitHub repository.

---

**Happy Coding! 🚀**
