import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import CurrentWeather from './widget/CurrentWeather';
import Daily from './widget/Daily';
import Hourly from './widget/Hourly';
import Select from './components/Select';
import { fetchWeatherData } from './service/api';
import { locations } from './service/const';

const exclude = 'minutely,alerts';
const units = 'imperial';

export default function App() {
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [location, setLocation] = useState(0);

  useEffect(() => {
    async function getWeatherData() {
      const { lat, lon } = locations[location];
      const data = await fetchWeatherData({ lat, lon, exclude, units });
      if(data?.data) {
        console.log(data.data);
        setCurrent(data.data.current);
        setDaily(data.data.daily);
        setHourly(data.data.hourly);
      }
    }
    getWeatherData();
  }, [location]);

  const onSelectLocation = (value) => {
    setLocation(value);
  }

  return (
    <Container>
      {
        current && daily.length > 0 && hourly.length > 0 &&
      <div className="row">
        <Daily data={daily} />
        <div>
        <CurrentWeather data={current} title={locations[location].city}/>
        <div style={{marginTop: 36}}>
          <Select selected={location} data={locations} onChange={onSelectLocation} />
          <Hourly data={hourly} />
        </div>
        </div>
      </div>
      }
    </Container>
  );
}
