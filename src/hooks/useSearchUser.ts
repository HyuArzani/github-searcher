import { useQuery } from '@tanstack/react-query';
import { fetchGitHubUsers } from '../api/github';
import type { GitHubUser } from '../models/github';

export const useSearchUser = (query: string) => {
  return useQuery<GitHubUser[], Error>({
    queryKey: ['githubUsers', query],
    queryFn: () => fetchGitHubUsers(query),
    enabled: !!query,
  });
};
