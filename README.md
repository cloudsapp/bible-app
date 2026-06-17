# Bible App - Cross-Platform with AI & Social Features

A modern Bible reading application built with React Native/Expo featuring AI-powered insights and social community features.

## ✨ Features

### 📖 Bible Reading
- Multiple Bible translations
- Fast search and navigation
- Bookmarks and highlights
- Personal notes
- Reading plans

### 🤖 AI Features
- Prayer generation based on topics
- AI-powered verse insights
- Verse explanations with context
- Daily devotions

### 👥 Social Features
- Community feed
- Share verses with friends
- Prayer requests
- Community discussions

### ⚙️ User Features
- User authentication
- Personalized preferences
- Dark mode support
- Customizable font sizes
- Push notifications

### 📱 Cross-Platform
- iOS support
- Android support
- Web support

## 🛠️ Tech Stack

- **Frontend:** React Native with Expo
- **State Management:** Zustand
- **Navigation:** React Navigation
- **Authentication:** Firebase Auth
- **Database:** Firebase Firestore
- **AI Services:** OpenAI API
- **Bible Data:** Bible.com API

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository
```bash
git clone https://github.com/cloudsapp/bible-app.git
cd bible-app
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Add your API keys:
   - Bible API Key (from scripture.api.bible)
   - OpenAI API Key (for AI features)
   - Firebase credentials

### Running the App

**Start development server:**
```bash
npm start
```

**Run on iOS:**
```bash
npm run ios
```

**Run on Android:**
```bash
npm run android
```

**Run on Web:**
```bash
npm run web
```

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── screens/          # App screens
├── services/         # API and external services
├── store/            # State management (Zustand)
├── types/            # TypeScript type definitions
App.tsx              # Main app component
```

## 🔑 API Integration

### Bible API
Get your API key from [scripture.api.bible](https://api.scripture.api.bible/)

### OpenAI API
Get your API key from [platform.openai.com](https://platform.openai.com)

### Firebase
Set up a Firebase project at [firebase.google.com](https://firebase.google.com)

## 📋 Project Roadmap

- [x] Project scaffolding
- [x] TypeScript setup
- [x] State management with Zustand
- [x] Core services (Bible API, AI, Auth)
- [x] Basic components
- [x] Navigation structure
- [ ] Authentication screens (Login/Signup)
- [ ] Bible reader interface
- [ ] Search functionality
- [ ] AI features integration
- [ ] Social features
- [ ] User profile management
- [ ] Dark mode implementation
- [ ] Offline support
- [ ] Push notifications
- [ ] Testing suite
- [ ] App deployment

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details

## 💬 Support

For issues and questions, please open an issue on GitHub.

---

**Made with ❤️ for the Bible community**
