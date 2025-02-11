'use client';

import { useState } from 'react';

import { fetchRepos } from '@/server/actions';

const useRepos = () => {
  const [repos, setRepos] = useState<Repository[]>([]);

  fetchRepos().then(setRepos);

  return { repos };
};

export default useRepos;
