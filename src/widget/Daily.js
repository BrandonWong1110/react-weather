import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import { getCurrentDayOfWeek } from '../service/utils';
import "../styles/styles.css";

export default function Daily({data}) {
    const [list, setList] = useState([]); 
    useEffect(() => {
        const temp = [];
        data.forEach((item, index) => {
            const title = index === 0 ? "Today" : getCurrentDayOfWeek(item?.dt);
            const icon = item?.weather?.[0]?.icon;
            const temperature = item?.temp?.day.toFixed(0);
            temp.push({ title, icon, temperature })
        })
        setList(temp);
    }, [data])

    return (
        <Card
            title="7-day forecast"
            data={list}
            align='h'
        />
    )
}