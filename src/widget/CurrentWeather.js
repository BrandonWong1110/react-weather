import React from 'react';
import "../styles/styles.css";

export default function CurrentWeather ({ data, title }) {
    return (
        <div className="center">
            <div className="font-title">{title}</div>
            <div className="font-large">{`${data?.temp}°`}</div>
            <div className="font-description">{data?.weather?.[0]?.main}</div>
        </div>
    )
}