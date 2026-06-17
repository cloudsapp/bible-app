import axios from 'axios';
import { User, UserPreferences } from '@/types';

class AuthService {
  /**
   * Sign up a new user
   */
  async signUp(
    email: string,
    password: string,
    displayName: string
  ): Promise<User | null> {
    try {
      // This would connect to your backend
      const response = await axios.post('/api/auth/signup', {
        email,
        password,
        displayName,
      });
      return response.data.user;
    } catch (error) {
      console.error('Error signing up:', error);
      return null;
    }
  }

  /**
   * Sign in existing user
   */
  async signIn(email: string, password: string): Promise<User | null> {
    try {
      const response = await axios.post('/api/auth/signin', {
        email,
        password,
      });
      return response.data.user;
    } catch (error) {
      console.error('Error signing in:', error);
      return null;
    }
  }

  /**
   * Sign out current user
   */
  async signOut(): Promise<void> {
    try {
      await axios.post('/api/auth/signout');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  /**
   * Get current user
   */
  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await axios.get('/api/auth/me');
      return response.data.user;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  /**
   * Update user profile
   */
  async updateProfile(
    userId: string,
    updates: Partial<User>
  ): Promise<User | null> {
    try {
      const response = await axios.put(`/api/users/${userId}`, updates);
      return response.data.user;
    } catch (error) {
      console.error('Error updating profile:', error);
      return null;
    }
  }

  /**
   * Update user preferences
   */
  async updatePreferences(
    userId: string,
    preferences: Partial<UserPreferences>
  ): Promise<UserPreferences | null> {
    try {
      const response = await axios.put(`/api/users/${userId}/preferences`, preferences);
      return response.data.preferences;
    } catch (error) {
      console.error('Error updating preferences:', error);
      return null;
    }
  }
}

export const authService = new AuthService();
