<<<<<<< HEAD
# Dear-mom
A heartfelt, responsive tribute blog built for Mother’s Day using React. Showcasing messages, images, and love for mothers through a beautifully designed interface.
=======
# Mother's Day Tribute Blog

A beautiful and responsive blog dedicated to celebrating mothers and their stories, built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly layout
- 🔍 Search functionality
- 🏷️ Category filtering
- 📚 Featured articles carousel
- 📝 Article detail pages
- 👤 Author profiles
- ⚡ Fast page loads with Next.js

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mothers-day-tribute.git
cd mothers-day-tribute
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   └── articles/          # Article pages
├── components/            # React components
│   ├── ArticleCard.tsx
│   ├── FeaturedCarousel.tsx
│   ├── Layout.tsx
│   ├── SearchBar.tsx
│   ├── Sidebar.tsx
│   └── CategoryFilter.tsx
└── data/                  # JSON data
    └── articles.json
```

## Customization

### Adding New Articles

Edit `src/data/articles.json` to add new articles. Each article should have the following structure:

```json
{
  "id": "unique-id",
  "title": "Article Title",
  "excerpt": "Short description",
  "content": "Full article content",
  "author": "Author Name",
  "category": "Category",
  "date": "YYYY-MM-DD",
  "imageUrl": "/path/to/image.jpg",
  "readingTime": "X min"
}
```

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by editing `tailwind.config.js`.

## Deployment

The project can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by the provided Figma template
- Built with Next.js and Tailwind CSS
- Icons from Heroicons 
>>>>>>> 255db2b (Initial commit)
