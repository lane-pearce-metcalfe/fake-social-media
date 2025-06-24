import { useQuery } from '@tanstack/react-query'
import { getPostComments } from '../apis/comments'

export function usePostComments(postId: number) {
  const query = useQuery({
    queryKey: ['postComments', postId],
    queryFn: () => getPostComments(postId),
  })
  return query
}
