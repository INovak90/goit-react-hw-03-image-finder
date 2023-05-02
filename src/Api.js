import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_Key = 'key=34432622-155add7c983d1c64a5266250e';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const fetchPixabay = async (query, page) => {
  const response = await axios.get(`/?${API_Key}&${searchParams}`, {
    params: {
      q: query,
      page,
    },
  });
  return response.data.hits;
};
