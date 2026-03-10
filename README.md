# Juta Training and Consulting Website

A modern, responsive website built for Juta Training and Consulting, showcasing their services, courses, and professional training offerings.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite for optimal performance
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Interactive Components**: Carousels and sliders using React Slick
- **Professional UI**: Clean, modern interface with Lucide React icons
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Security First**: Comprehensive security headers and CSP policies
- **Performance Optimized**: Optimized build process and caching strategies

## 📋 Pages

- **Home**: Hero section, skills showcase, testimonials, and client logos
- **About**: Company information and team details
- **Services**: Overview of consulting and training services
- **Courses**: Detailed course catalog and offerings
- **Contact**: Contact form and business information

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI framework
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **React Router DOM 7.8.2** - Client-side routing

### UI & Animation
- **Framer Motion 12.23.12** - Animation library
- **Lucide React 0.344.0** - Icon library
- **React Slick 0.31.0** - Carousel component
- **Slick Carousel 1.8.1** - Carousel library

### Development Tools
- **ESLint 9.9.1** - Code linting
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project-Juta-Consulting
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── home/           # Home page specific components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Page footer
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Courses.tsx     # Courses page
│   └── Contact.tsx     # Contact page
├── styles/             # Global styles and CSS
├── assets/             # Static assets
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## 🌐 Deployment

This project is configured for deployment on Netlify with the following features:

- **Automatic builds** on git push
- **Security headers** for enhanced protection
- **Performance optimization** with caching strategies
- **Environment variables** for different deployment contexts

### Environment Variables

- `VITE_API_URL` - API endpoint URL
- `VITE_ENV` - Environment identifier (production/staging)

## 🔒 Security Features

- **Content Security Policy** - Prevents XSS attacks
- **Security Headers** - X-Frame-Options, X-XSS-Protection, etc.
- **Permissions Policy** - Controls browser feature access
- **HTTPS Enforcement** - Secure communication

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential to Juta Training and Consulting.

## 📞 Contact

For any questions or support regarding this website, please contact the development team.

---

**Built with ❤️ for Juta Training and Consulting**
