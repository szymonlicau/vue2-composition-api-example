import axios from '@/api/axios';

export const loadFact = () => {
  return axios.get('/fact');
};
