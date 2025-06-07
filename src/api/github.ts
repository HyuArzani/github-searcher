import type { GitHubUser } from '../models/github';

export const fetchUserRepos = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    return [];
  }
  return await response.json();
};

export const fetchGitHubUsers = async (query: string) => {
  const response = await fetch(`https://api.github.com/search/users?q=${query}&per_page=5`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  const users = data.items;

  const usersWithRepos = await Promise.all(
    users.map(async (user: GitHubUser) => {
      const repos = await fetchUserRepos(user.login);
      return { ...user, repos };
    })
  );

  return usersWithRepos;
};
