import useSWR from 'swr';

import fetcher from '../libs/fetcher';

const useTweets = () => {
  const url = '/api/tweets';
  const { data, error, isLoading, mutate} = useSWR(url, fetcher);

  return { data, error, isLoading, mutate};
};

export default useTweets;
