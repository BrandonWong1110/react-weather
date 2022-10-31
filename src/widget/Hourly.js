import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import { getCurrentTime } from '../service/utils';
import "../styles/styles.css";

export default function Hourly({data}) {
    const [list, setList] = useState([]); 
    useEffect(() => {
        const temp = [];
        data.slice(0,24).forEach((item, index) => {
            const title = index === 0 ? "Now" : getCurrentTime(item?.dt);
            const icon = item?.weather?.[0]?.icon;
            const temperature = item?.temp.toFixed(0);
            temp.push({ title, icon, temperature })
        })
        setList(temp);
    }, [data])

    return (
        <Card
            title="hourly forecast"
            data={list}
            align='v'
        />
    )
}