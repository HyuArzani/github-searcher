import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon, StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { useSearch } from '../../context/SearchContext';
import type { GitHubUser, UserRepository } from '../../models/github';
import './UserList.css';

const UserList: React.FC = () => {
  const { data, isError } = useSearch();
  const [openUserId, setOpenUserId] = useState<number | null>(null);

  if (isError) return <p>Error getting users.</p>;

  const toggleAccordion = (userId: number) => {
    setOpenUserId((prev) => (prev === userId ? null : userId));
  };

  return (
    <div className="list-container">
      {data?.map((user: GitHubUser) => (
        <div key={user.id} className="user-card">
          <div onClick={() => toggleAccordion(user.id)} className="user-header">
            <span>{user.login}</span>
            {openUserId === user.id ? (
              <ChevronDownIcon className="icon arrow" />
            ) : (
              <ChevronRightIcon className="icon arrow" />
            )}
          </div>

          {openUserId === user.id && (
            <div className="repo-list">
              {user.repos?.length ? (
                user.repos.map((repo: UserRepository) => (
                  <div key={repo.id} className="repo-entry">
                    <span className="repo-name">{repo.full_name}</span>
                    <span className="repo-stars">
                      {repo.stargazers_count > 0 ? (
                        <StarIcon className="icon star" />
                      ) : (
                        <StarOutlineIcon className="icon star" />
                      )}
                      {repo.stargazers_count}
                    </span>
                  </div>
                ))
              ) : (
                <p className="no-repos">No repositories found.</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;
