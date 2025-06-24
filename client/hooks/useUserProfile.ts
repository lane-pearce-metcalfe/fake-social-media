import { useQuery } from '@tanstack/react-query'
import { getUserProfile } from '../apis/userProfile'

export function useUserProfile(userId: number) {
  const query = useQuery({
    queryKey: ['userProfile', userId],
    queryFn: () => getUserProfile(userId),
  })
  return query
}
