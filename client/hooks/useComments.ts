import { useQuery } from '@tanstack/react-query'
import { getPostComments, getUserComments } from '../apis/comments'

export function usePostComments(postId: number) {
  const query = useQuery({
    queryKey: ['postComments', postId],
    queryFn: () => getPostComments(postId),
  })
  return query
}

export function useUserComments(userId: number) {
  const query = useQuery({
    queryKey: ['userComments', userId],
    queryFn: () => getUserComments(userId),
  })
  return query
}
