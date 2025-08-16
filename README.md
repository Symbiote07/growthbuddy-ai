# DigitalDynamo - AI-Powered Chatbot Platform

Transform your business with intelligent chatbots designed for modern customer engagement.

## 🚀 Features

- **Intelligent AI Responses** - Advanced natural language processing for accurate customer interactions
- **Lead Generation** - Automatically capture and qualify leads through intelligent conversations
- **Real-time Responses** - 24/7 instant customer support
- **Analytics Dashboard** - Comprehensive insights and performance metrics
- **Multi-Platform Integration** - Deploy across websites, social media, and messaging platforms
- **Enterprise Security** - Bank-level security with encryption and compliance standards

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript for type-safe development
- **Vite** for fast development and building
- **Tailwind CSS** for responsive, utility-first styling
- **shadcn/ui** for beautiful, accessible UI components
- **React Router** for client-side routing
- **Tanstack Query** for efficient data fetching

### Backend & Database
- **Supabase** for backend-as-a-service
- **PostgreSQL** database with Row Level Security
- **Real-time subscriptions** for live chat functionality
- **Authentication** with email/password and social providers

### Key Dependencies
- `@supabase/supabase-js` - Supabase client
- `@tanstack/react-query` - Data fetching and caching
- `react-hook-form` + `zod` - Form handling and validation
- `lucide-react` - Beautiful icons
- `sonner` - Toast notifications

## 📊 Database Schema

### Core Tables
- **profiles** - User profile information
- **leads** - Captured lead data from chatbot interactions
- **chat_messages** - Real-time chat message storage

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account for backend services

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd digitaldynamo

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup
This project uses Supabase for backend services. The Supabase configuration is automatically handled through Lovable's integration.

## 🌐 Deployment

### Quick Deploy with Lovable
1. Open your [Project](https://lovable.dev/projects/67c1984d-b869-4c60-85bc-1d42da3bb7dd)
2. Click **Publish** in the top-right corner
3. Your app will be deployed with a lovable.app domain

### Custom Domain
To connect your own domain:
1. Navigate to Project > Settings > Domains
2. Click "Connect Domain"
3. Follow the DNS configuration steps

### Self-Hosting Options
The codebase is standard React/Vite and can be deployed to:
- Vercel
- Netlify  
- AWS Amplify
- Any static hosting service

## 🔧 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── Chatbot.tsx     # Main chatbot interface
├── pages/              # Route components
│   ├── Home.tsx        # Landing page
│   ├── Dashboard.tsx   # User dashboard
│   └── Auth.tsx        # Authentication page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── integrations/       # Supabase integration
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔒 Security Features

- Row Level Security (RLS) policies on all database tables
- User authentication and authorization
- Secure API endpoints through Supabase Edge Functions
- Data encryption in transit and at rest

## 📈 Analytics & Monitoring

The platform includes built-in analytics for:
- Chat conversation metrics
- Lead conversion tracking
- User engagement analytics
- Performance monitoring

## 🤝 Contributing

This project was built with [Lovable](https://lovable.dev), an AI-powered development platform.

### Making Changes
- **Via Lovable**: Use the AI chat interface for guided development
- **Local Development**: Clone repo, make changes, and push to GitHub
- **Visual Edits**: Use Lovable's Visual Edits feature for quick UI changes

## 📞 Support

For technical support or feature requests:
1. Use the in-app chatbot for immediate assistance
2. Contact support through the dashboard
3. Visit our [documentation](https://docs.lovable.dev)

## 📄 License

This project is built with Lovable and follows standard web development practices.

---

**Ready to transform your customer experience?** Start your free trial today!
