# ShopEasy - E-commerce Website

A modern, responsive e-commerce website built with Next.js, React, and TailwindCSS. Inspired by popular platforms like Daraz and Gorer Bazar.

## Features

### ✅ Completed Features
- **Modern UI/UX Design**: Clean, professional interface with TailwindCSS
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Product Catalog**: Grid layout with product cards showing images, prices, ratings, and discounts
- **Advanced Filtering**: Filter products by category, price range, and rating
- **Sorting Options**: Sort by featured, price (low/high), rating, and discount
- **Search Functionality**: Integrated search bar in header
- **Shopping Cart**: Visual cart indicator with item count
- **Category Navigation**: Easy access to different product categories
- **Hero Section**: Eye-catching promotional banner
- **Product Cards**: Interactive cards with hover effects and wishlist functionality

### 🚧 Features in Progress
- Product detail pages
- Shopping cart management
- User authentication system
- Checkout process

## Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: TailwindCSS, shadcn/ui components
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Responsive Design**: Mobile-first approach

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mostofa-shop
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mostofa-shop/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx
│   │   └── input.tsx
│   ├── header.tsx         # Site header
│   ├── footer.tsx         # Site footer
│   ├── product-card.tsx   # Product display card
│   └── filter-sidebar.tsx # Product filters
├── lib/                   # Utility functions
│   └── utils.ts           # Common utilities
├── public/                # Static assets
└── README.md
```

## Key Components

### Header Component
- Logo and branding
- Search bar with responsive design
- User account and cart icons
- Category navigation menu
- Mobile-friendly hamburger menu

### Product Card Component
- Product images with hover effects
- Price display with discount badges
- Star ratings and review counts
- Add to cart functionality
- Wishlist button

### Filter Sidebar
- Category selection
- Price range filtering
- Minimum rating filter
- Apply and clear filter actions

### Footer Component
- Company information
- Quick links navigation
- Category links
- Contact information
- Social media links

## Design Features

- **Modern Aesthetics**: Clean, professional design following current e-commerce trends
- **Responsive Grid**: Adaptive layout that works on all screen sizes
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized images and efficient rendering

## Future Enhancements

- [ ] Product detail pages with image galleries
- [ ] Shopping cart with item management
- [ ] User authentication and profiles
- [ ] Checkout and payment integration
- [ ] Product reviews and ratings
- [ ] Search with autocomplete
- [ ] Product comparison feature
- [ ] Wishlist management
- [ ] Order tracking
- [ ] Admin dashboard

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact support@shopeasy.com or create an issue in the repository.

---

**Built with ❤️ using Next.js and TailwindCSS**
