Node v18.12.0

## Getting Started

1. Clone the Project
   ```
   git clone https://github.com/atugatran-projects.git
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Run the project locally
   ```
   npm start
   ```

4. Build for production
   ```
   npm run build
   ```

---

## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com).

### Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Import the project on [vercel.com](https://vercel.com/new)
3. Vercel will automatically detect Create React App and configure the build settings
4. Click "Deploy"

### Manual Deployment

1. Install Vercel CLI
   ```
   npm install -g vercel
   ```

2. Deploy
   ```
   vercel
   ```

3. For production
   ```
   vercel --prod
   ```

### Environment Variables

Make sure to set the following environment variables in your Vercel project dashboard:

- `REACT_APP_AUTH_DOMAN` - Your Auth0 domain
- `REACT_APP_CLINT_ID` - Your Auth0 client ID

---

## Features

- 🛍️ Browse products with grid and list views
- 🔍 Filter and sort products
- 🛒 Shopping cart functionality
- ⭐ Product ratings and reviews
- 📱 Fully responsive design
- 📊 Vercel Analytics & Speed Insights
