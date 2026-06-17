import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { VerseCard } from '@/components/VerseCard';
import { useBibleStore } from '@/store/bibleStore';
import { bibleService } from '@/services/bibleService';

export const HomeScreen: React.FC = () => {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { bookmarks, addBookmark } = useBibleStore();

  useEffect(() => {
    loadVerseOfTheDay();
  }, []);

  const loadVerseOfTheDay = async () => {
    setLoading(true);
    try {
      // Load a featured verse - you can customize this
      const result = await bibleService.getVerseByReference('John 3:16');
      setVerse(result);
    } catch (error) {
      console.error('Error loading verse:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Daily Verse</Text>
        <TouchableOpacity onPress={loadVerseOfTheDay}>
          <Text style={styles.refreshBtn}>Refresh</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
      ) : verse ? (
        <VerseCard
          verse={verse}
          isBookmarked={bookmarks.some((b) => b.verse.id === verse.id)}
          onBookmark={() => {
            // Handle bookmark
          }}
        />
      ) : (
        <Text style={styles.errorText}>Failed to load verse</Text>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>📖 Read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>🔍 Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>🤖 AI Insights</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>🙏 Community</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  refreshBtn: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '600',
  },
  loader: {
    marginVertical: 20,
  },
  errorText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
  },
  actionButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
});
