import React from 'react';
import { ICON_URL } from '../service/const';
import "../styles/styles.css";

export default function Card({title="", data=[], align="v", style={}}) {
    let wrapperClass, itemClass;
    if(align === 'v') {
        wrapperClass = "row";
        itemClass = "column";
    } else {
        wrapperClass = "column";
        itemClass = "row";
    }
    return (
        <div className="card" style={style}>
            <div className="card-title">{title}</div>
            <div className={wrapperClass} style={{marginTop: 16}}>
            {
                data && data.map((item) => {
                    return (
                        <div key={item.title} className={itemClass}>
                            <div className="font-normal center" style={{flex: 0.4}}>{item.title}</div>
                            <img src={`${ICON_URL}/${item.icon}@2x.png`} alt="No Icon Available" width={30} height={30} style={{flex: 0.3}} />
                            <div className="font-normal center" style={{flex: 0.6}}>{item.temperature}</div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}