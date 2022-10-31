import React from 'react';
import "../styles/styles.css";

export default function Container({children}) {
    return (
        <div className="container">
            {children}
        </div>
    )
}