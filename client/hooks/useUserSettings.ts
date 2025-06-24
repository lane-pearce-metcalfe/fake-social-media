import { useQuery } from '@tanstack/react-query'
import { getUserTheme } from '../apis/userSettings'

export function useUserTheme(userId: number) {
  const query = useQuery({
    queryKey: ['userTheme', userId],
    queryFn: () => getUserTheme(userId),
  })
  return query
}
