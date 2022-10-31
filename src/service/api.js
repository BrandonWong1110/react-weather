import axios from 'axios';
import { API_KEY, API_URL } from './const';

export const fetchWeatherData = ({ lat, lon, exclude, units, lang }) => {
  if (!lat || !lon) {
    console.error('lat or lon parameters need to be provided');
    return;
  }

  let url = `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  if (exclude) url += `&exclude=${exclude}`;
  if (units) url += `&units=${units}`;
  if (lang) url += `&lang=${lang}`;

  console.log(url);

  return axios.get(url);
};
