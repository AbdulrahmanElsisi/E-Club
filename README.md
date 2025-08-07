# E-Gnite Event Website

A modern, responsive single-page event website for the E-Gnite entrepreneurial event. Built with HTML, CSS, and JavaScript, featuring a clean design inspired by the original event branding.

## 🚀 Features

### Core Sections
- **Home Section** - Hero banner with event title, description, and registration button
- **Schedule Section** - Interactive timeline showing event agenda
- **Speakers Section** - Grid layout with speaker profiles and bios
- **Scoreboard Section** - Live competition results with progress bars
- **FAQ Section** - Collapsible accordion with common questions
- **Partners & Sponsors** - Showcase of event partners and previous sponsors

### Interactive Features
- **Responsive Navigation** - Fixed navbar with smooth scrolling and active section highlighting
- **Mobile Menu** - Hamburger menu for mobile devices
- **FAQ Accordion** - Expandable/collapsible FAQ items
- **Coming Soon Modal** - Registration placeholder with email notification
- **Back to Top Button** - Smooth scroll to top functionality
- **Live Scoreboard** - Simulated real-time competition updates
- **Newsletter Subscription** - Email signup with form validation
- **Social Media Integration** - Links to social platforms

### Design Features
- **Modern UI/UX** - Clean, minimalist design with blue color scheme
- **Smooth Animations** - CSS transitions and hover effects
- **Geometric Shapes** - Animated background elements
- **Typography** - Inter font family for readability
- **Icons** - Font Awesome icons throughout the interface
- **Gradient Backgrounds** - Modern gradient effects

## 📁 Project Structure

```
E-Gnite/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── 42c97cc3-928b-40c3-a74b-dfac694235e0.png  # Original design reference
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icon library
- **Google Fonts** - Inter font family
- **Responsive Design** - Mobile-first approach

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e3a8a` (Dark Blue)
- **Secondary Blue**: `#3b82f6` (Medium Blue)
- **Light Blue**: `#64748b` (Gray Blue)
- **Background**: `#f8fafc` (Light Gray)
- **White**: `#ffffff`
- **Success Green**: `#10b981`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Sizes**: Responsive scaling from 0.9rem to 4rem

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full layout with side-by-side sections)
- **Tablet**: 768px - 1199px (Adjusted grid layouts)
- **Mobile**: 320px - 767px (Stacked layout with mobile menu)

## 🔧 Customization

### Content Updates
- **Event Details**: Update dates, times, and descriptions in `index.html`
- **Speakers**: Modify speaker information in the speakers section
- **FAQ**: Add or modify FAQ items in the FAQ section
- **Partners**: Update partner and sponsor logos and information

### Styling Changes
- **Colors**: Modify CSS custom properties in `styles.css`
- **Fonts**: Change font imports and family declarations
- **Layout**: Adjust grid and flexbox properties
- **Animations**: Modify CSS transitions and keyframes

### JavaScript Features
- **Scoreboard**: Update the `updateScoreboard()` function for real data
- **Forms**: Connect form handlers to actual backend APIs
- **Notifications**: Customize notification messages and styling
- **Animations**: Modify intersection observer settings

## 🎯 Key Features Explained

### Navigation System
```javascript
// Smooth scrolling with offset for fixed navbar
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}
```

### FAQ Accordion
```javascript
// Toggle FAQ items with smooth animations
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    
    // Close all other items
    document.querySelectorAll('.faq-question').forEach(question => {
        question.classList.remove('active');
        question.nextElementSibling.classList.remove('active');
    });
    
    // Toggle current item
    if (!element.classList.contains('active')) {
        element.classList.add('active');
        answer.classList.add('active');
    }
}
```

### Live Scoreboard
```javascript
// Simulate real-time score updates
function updateScoreboard() {
    const scores = document.querySelectorAll('.score');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    scores.forEach((score, index) => {
        const currentScore = parseInt(score.textContent);
        const newScore = Math.max(0, currentScore + Math.floor(Math.random() * 10) - 5);
        score.textContent = newScore;
        
        const progressBar = progressBars[index];
        const percentage = Math.min(100, (newScore / 100) * 100);
        progressBar.style.width = percentage + '%';
    });
}
```

## 🔮 Future Enhancements

### Planned Features
- **Real-time Chat** - Live chat functionality for participants
- **Registration System** - Full registration and payment integration
- **Live Streaming** - Video streaming for remote participants
- **Push Notifications** - Browser notifications for updates
- **PWA Support** - Progressive Web App capabilities
- **Analytics** - Event tracking and user analytics
- **Multi-language** - Arabic and English language support

### Technical Improvements
- **Performance**: Image optimization and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation
- **SEO**: Meta tags and structured data
- **Security**: HTTPS and content security policies
- **Testing**: Unit tests and cross-browser testing

## 📊 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or support regarding the E-Gnite event website:

- **Email**: info@egnite.com
- **Phone**: +20 123 456 789
- **Website**: [E-Gnite Official Site](https://egnite.com)

## 🙏 Acknowledgments

- **Nile University** - Event organizer and partner
- **Font Awesome** - Icon library
- **Google Fonts** - Typography
- **CSS Grid & Flexbox** - Modern layout techniques
- **Intersection Observer API** - Scroll animations

---

**Built with ❤️ for the E-Gnite entrepreneurial community** 