# Contentful Starter App 🚀

A modern React application demonstrating headless CMS integration with Contentful. This project showcases how to build dynamic web applications using Contentful as a backend content management system, allowing for easy content creation and management without being tied to a specific frontend framework.

## 🌟 Features

- **Headless CMS Integration**: Seamless integration with Contentful CMS
- **Dynamic Content**: Real-time content fetching and rendering
- **Custom Hooks**: Reusable logic for content management
- **Responsive Design**: Mobile-first approach with modern UI
- **Environment Variables**: Secure API key management
- **Loading States**: Smooth user experience with loading indicators
- **Error Handling**: Robust error management for API calls

## 🌐 Live Demo

[View Live Application](https://temp-contentful-app1.netlify.app/)

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **CMS**: Contentful Headless CMS
- **HTTP Client**: Contentful JavaScript SDK
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Deployment**: Netlify
- **Environment Management**: Vite Environment Variables

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Contentful account

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Satwik-2004/temp-contentful-app.git
   cd temp-contentful-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_contentful_access_token
   VITE_SPACE_ID=your_contentful_space_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
temp-contentful-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.jsx        # Hero section component
│   │   └── Projects.jsx    # Projects display component
│   ├── hooks/
│   │   └── useFetchProjects.js # Custom hook for Contentful data
│   ├── data/
│   │   └── data.js         # Static data and configuration
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── .env                    # Environment variables
├── package.json
└── README.md
```

## 🎯 Contentful Setup

### Content Model Structure

The application uses a "projects" content type with the following fields:

- **Title**: Short text field for project name
- **Description**: Long text field for project description
- **Image**: Media field for project images
- **URL**: Short text field for project links
- **Tags**: Multiple values field for project categories

### Contentful Configuration

1. **Create a Contentful Account**
   - Sign up at [contentful.com](https://www.contentful.com/)
   - Create a new space for your project

2. **Setup Content Type**
   - Navigate to Content Model
   - Create a new content type called "projects"
   - Add the required fields as mentioned above

3. **Create Entries**
   - Go to Content section
   - Create multiple project entries with your data

4. **Get API Credentials**
   - Navigate to Settings > API keys
   - Create a new API key
   - Copy the Space ID and Content Delivery API access token

## 🔧 API Integration

### Contentful Client Setup

```javascript
import { createClient } from 'contentful';

const client = createClient({
  space: 'your_space_id',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});
```

### Custom Hook Implementation

```javascript
// useFetchProjects.js
const [loading, setLoading] = useState(true);
const [projects, setProjects] = useState([]);

const getData = async () => {
  try {
    const response = await client.getEntries({ content_type: 'projects' });
    setProjects(response.items);
    setLoading(false);
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
};
```

## 🎨 Components Overview

### Hero Component
- Displays main application header
- Responsive design with engaging visuals
- Introduction to the application purpose

### Projects Component
- Renders dynamic project data from Contentful
- Loading states during data fetching
- Responsive grid layout for project cards
- Error handling for failed API calls

### Custom Hook (useFetchProjects)
- Encapsulates Contentful API logic
- Manages loading and error states
- Provides reusable data fetching functionality
- Returns projects array and loading status

## 🚀 Deployment

### Netlify Deployment

1. **Connect Repository**
   - Link your GitHub repository to Netlify
   - Configure build settings

2. **Environment Variables**
   ```
   VITE_API_KEY=your_contentful_access_token
   VITE_SPACE_ID=your_contentful_space_id
   ```

3. **Build Configuration**
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-width layouts with grid systems
- **Tablet**: Adapted layouts with touch-friendly interfaces
- **Mobile**: Stacked layouts with optimized navigation

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_KEY` | Contentful Content Delivery API access token | Yes |
| `VITE_SPACE_ID` | Contentful Space ID | Yes |

## 🎯 What is a Headless CMS?

A headless CMS is a back-end only content management system that provides content creators with an intuitive interface for creating and managing content, while leaving the front-end presentation layer to be handled by a separate system or platform. 

### Benefits:
- **Flexibility**: Content can be distributed to multiple channels
- **Scalability**: Easy to scale backend and frontend independently
- **Developer Experience**: Freedom to use any frontend technology
- **Performance**: Optimized content delivery through APIs
- **Future-proof**: Easy to adapt to new platforms and devices

## 🛠️ Development Features

### Loading States
- Smooth loading indicators during API calls
- Skeleton screens for better UX
- Error boundaries for graceful error handling

### Data Management
- Efficient data fetching with custom hooks
- State management for loading and error states
- Caching strategies for improved performance

### Code Organization
- Modular component structure
- Separation of concerns
- Reusable custom hooks
- Clean and maintainable codebase

## 🔄 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learning Resources

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [React Documentation](https://reactjs.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Headless CMS Concepts](https://www.contentful.com/r/knowledgebase/what-is-headless-cms/)

## 🐛 Troubleshooting

### Common Issues

1. **API Key Errors**
   - Ensure environment variables are properly set
   - Check that API key has correct permissions

2. **Content Not Loading**
   - Verify Space ID is correct
   - Check that content type name matches your Contentful setup

3. **Build Errors**
   - Ensure all dependencies are installed
   - Check that environment variables are set in deployment platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Satwik** - [GitHub Profile](https://github.com/Satwik-2004)

## 🙏 Acknowledgments

- [Contentful](https://www.contentful.com/) for providing excellent headless CMS services
- [React](https://reactjs.org/) for the powerful frontend framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Netlify](https://www.netlify.com/) for seamless deployment

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the [Contentful Community](https://www.contentful.com/community/)
- Review the troubleshooting section above

---

**Contentful Starter App** - Building the future of content management! 🌟
