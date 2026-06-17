import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Post } from '@/types';
import { Ionicons } from '@expo/vector-icons';

interface SocialPostCardProps {
  post: Post;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

export const SocialPostCard: React.FC<SocialPostCardProps> = ({
  post,
  onLike,
  onComment,
  onShare,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {post.user?.photoURL && (
          <Image
            source={{ uri: post.user.photoURL }}
            style={styles.avatar}
          />
        )}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{post.user?.displayName || 'User'}</Text>
          <Text style={styles.timestamp}>
            {new Date(post.createdAt).toLocaleDateString()}
          </Text>
        </View>
      </View>

      <Text style={styles.content}>{post.content}</Text>

      {post.verse && (
        <View style={styles.verseRef}>
          <Text style={styles.verseText}>
            {post.verse.book} {post.verse.chapter}:{post.verse.verse}
          </Text>
        </View>
      )}

      <View style={styles.actions}>
        <TouchableOpacity style={styles.action} onPress={onLike}>
          <Ionicons
            name={post.isLiked ? 'heart' : 'heart-outline'}
            size={20}
            color={post.isLiked ? '#FF6B6B' : '#666'}
          />
          <Text style={styles.actionText}>{post.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={onComment}>
          <Ionicons name="chatbubble-outline" size={20} color="#666" />
          <Text style={styles.actionText}>{post.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={onShare}>
          <Ionicons name="share-social-outline" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
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
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginBottom: 12,
  },
  verseRef: {
    backgroundColor: '#F5F5F5',
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
    paddingLeft: 12,
    paddingVertical: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
  verseText: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
});
