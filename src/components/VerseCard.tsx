import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BibleVerse } from '@/types';
import { Ionicons } from '@expo/vector-icons';

interface VerseCardProps {
  verse: BibleVerse;
  onPress?: () => void;
  onBookmark?: () => void;
  isBookmarked?: boolean;
}

export const VerseCard: React.FC<VerseCardProps> = ({
  verse,
  onPress,
  onBookmark,
  isBookmarked = false,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.reference}>
          {verse.book} {verse.chapter}:{verse.verse}
        </Text>
        <TouchableOpacity onPress={onBookmark}>
          <Ionicons
            name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color="#007AFF"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{verse.text}</Text>
      <Text style={styles.translation}>{verse.translation}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  reference: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 12,
  },
  translation: {
    fontSize: 12,
    color: '#888',
  },
});
