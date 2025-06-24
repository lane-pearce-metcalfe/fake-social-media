import { useQuery } from '@tanstack/react-query'
import { getUserPosts } from '../apis/posts'

export function useUserPosts(userId: number) {
  const query = useQuery({
    queryKey: ['posts', userId],
    queryFn: () => getUserPosts(userId),
  })
  return query
}
