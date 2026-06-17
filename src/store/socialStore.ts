import { create } from 'zustand';
import { Post, Comment, PrayerRequest } from '@/types';

interface SocialState {
  posts: Post[];
  prayerRequests: PrayerRequest[];
  addPost: (post: Post) => void;
  addComment: (postId: string, comment: Comment) => void;
  likePost: (postId: string) => void;
  addPrayerRequest: (request: PrayerRequest) => void;
  prayForRequest: (requestId: string) => void;
}

export const useSocialStore = create<SocialState>((set) => ({
  posts: [],
  prayerRequests: [],
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  addComment: (postId, comment) =>
    set((state) => ({
      posts: state.posts.map((p) =>
        p.id === postId ? { ...p, comments: p.comments + 1 } : p
      ),
    })),
  likePost: (postId) =>
    set((state) => ({
      posts: state.posts.map((p) =>
        p.id === postId
          ? { ...p, likes: p.likes + 1, isLiked: !p.isLiked }
          : p
      ),
    })),
  addPrayerRequest: (request) =>
    set((state) => ({
      prayerRequests: [request, ...state.prayerRequests],
    })),
  prayForRequest: (requestId) =>
    set((state) => ({
      prayerRequests: state.prayerRequests.map((r) =>
        r.id === requestId
          ? { ...r, prayCounts: r.prayCounts + 1 }
          : r
      ),
    })),
}));
