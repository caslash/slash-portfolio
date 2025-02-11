'use server';

import { Repository } from '@/models/repository';

export async function fetchRepos(): Promise<Repository[]> {
  return fetch(`https://api.github.com/users/caslash/repos`, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GH_API_KEY}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
    .then((res) => res.json())
    .then((data) => data as Repository[]);
}
