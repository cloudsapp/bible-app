import axios from 'axios';
import { BibleVerse, AIInsight, PrayerGeneration, VerseExplanation } from '@/types';

const AI_API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY || '';
const AI_API_BASE = 'https://api.openai.com/v1';

class AIService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Generate AI insight for a verse
   */
  async generateInsight(verse: BibleVerse): Promise<AIInsight | null> {
    try {
      const response = await axios.post(
        `${AI_API_BASE}/chat/completions`,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                'You are a biblical scholar providing insights on Scripture verses.',
            },
            {
              role: 'user',
              content: `Provide a brief spiritual insight (2-3 sentences) for this verse: ${verse.book} ${verse.chapter}:${verse.verse} - "${verse.text}"`,
            },
          ],
          max_tokens: 200,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      const insight = response.data.choices[0].message.content;
      return {
        id: `insight_${Date.now()}`,
        verse,
        insight,
        explanation: insight,
        relatedVerses: [],
        generatedAt: new Date(),
      };
    } catch (error) {
      console.error('Error generating insight:', error);
      return null;
    }
  }

  /**
   * Generate a prayer based on topic
   */
  async generatePrayer(
    userId: string,
    topic: string
  ): Promise<PrayerGeneration | null> {
    try {
      const response = await axios.post(
        `${AI_API_BASE}/chat/completions`,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                'You are a compassionate Christian spiritual advisor. Generate heartfelt, biblical prayers.',
            },
            {
              role: 'user',
              content: `Generate a sincere prayer about: ${topic}. Include biblical references where appropriate.`,
            },
          ],
          max_tokens: 300,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      const prayer = response.data.choices[0].message.content;
      return {
        id: `prayer_${Date.now()}`,
        userId,
        topic,
        prayer,
        generatedAt: new Date(),
      };
    } catch (error) {
      console.error('Error generating prayer:', error);
      return null;
    }
  }

  /**
   * Generate explanation for a verse
   */
  async explainVerse(verse: BibleVerse): Promise<VerseExplanation | null> {
    try {
      const response = await axios.post(
        `${AI_API_BASE}/chat/completions`,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                'You are an expert biblical commentator. Provide clear, scholarly explanations of Scripture.',
            },
            {
              role: 'user',
              content: `Explain this verse in detail: ${verse.book} ${verse.chapter}:${verse.verse} - "${verse.text}". Include context and meaning.`,
            },
          ],
          max_tokens: 400,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      const explanation = response.data.choices[0].message.content;
      return {
        id: `explanation_${Date.now()}`,
        verse,
        explanation,
        context: '',
        generatedAt: new Date(),
      };
    } catch (error) {
      console.error('Error explaining verse:', error);
      return null;
    }
  }
}

export const aiService = new AIService(AI_API_KEY);
