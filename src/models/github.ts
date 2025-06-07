export interface GitHubUser {
  id: number;
  login: string;
  repos?: UserRepository[];
}

export interface UserRepository {
  id: number;
  full_name: string;
  stargazers_count: number;
}
