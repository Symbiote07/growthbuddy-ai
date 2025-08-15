# Contributing to DigitalDynamo

Thank you for your interest in contributing to DigitalDynamo! This project is built with [Lovable](https://lovable.dev), an AI-powered development platform.

## 🚀 Getting Started

### Development Environment
1. **Using Lovable (Recommended)**
   - Visit the [Lovable Project](https://lovable.dev/projects/67c1984d-b869-4c60-85bc-1d42da3bb7dd)
   - Use the AI chat interface to make changes
   - Changes are automatically committed to GitHub

2. **Local Development**
   ```bash
   git clone <repository-url>
   cd digitaldynamo
   npm install
   npm run dev
   ```

## 🛠️ Making Changes

### Quick Visual Changes
- Use Lovable's **Visual Edits** feature for immediate UI changes
- No coding required for text, colors, and layout adjustments

### Code Changes
- Use the AI chat in Lovable for guided development
- Or work locally and push changes to GitHub
- All changes sync bidirectionally between Lovable and GitHub

## 📋 Development Guidelines

### Code Standards
- TypeScript for type safety
- ESLint configuration is enforced
- Use semantic HTML and ARIA labels for accessibility
- Follow the existing component structure

### Component Guidelines
- Use shadcn/ui components when possible
- Implement responsive design with Tailwind CSS
- Follow the established design system in `index.css`
- Create reusable components in the `components/` directory

### Database Changes
- All database modifications must go through Supabase migrations
- Ensure Row Level Security (RLS) policies are properly configured
- Test database changes thoroughly before deployment

## 🔒 Security Considerations

- Never commit sensitive data or API keys
- Use Supabase secrets management for environment variables
- Ensure all database tables have proper RLS policies
- Follow OWASP security guidelines

## 📊 Testing

- Test changes in the Lovable preview environment
- Verify responsive design across different screen sizes
- Test chatbot functionality thoroughly
- Ensure accessibility standards are met

## 🚀 Deployment Process

### Automatic Deployment
- Changes pushed to `main` branch trigger automatic deployment
- Lovable handles the deployment pipeline
- Monitor deployment status in the Lovable dashboard

### Manual Deployment
- Use the "Publish" button in Lovable for immediate deployment
- Custom domains can be configured in Project Settings

## 🐛 Bug Reports

When reporting bugs:
1. Use the project's issue tracker
2. Provide detailed reproduction steps
3. Include browser and device information
4. Attach screenshots or error logs when relevant

## 💡 Feature Requests

For new features:
1. Describe the use case and expected behavior
2. Consider the impact on existing functionality
3. Discuss implementation approach if relevant

## 📞 Getting Help

- **Lovable AI**: Use the chat interface for development guidance
- **Documentation**: [Lovable Docs](https://docs.lovable.dev)
- **Community**: [Lovable Discord](https://discord.com/channels/1119885301872070706/1280461670979993613)

## 🏆 Recognition

Contributors will be acknowledged in the project documentation. Thank you for helping make DigitalDynamo better!

---

Built with ❤️ using [Lovable](https://lovable.dev)