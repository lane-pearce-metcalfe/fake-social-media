import { useQuery } from '@tanstack/react-query'
import { getUserData } from '../apis/user'

export function useUserData(id: number) {
  const query = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserData(id),
  })
  return query
}
