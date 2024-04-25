import React from 'react';
import './Loading.css';

const Loading = () => {
    const loaders = [];
    for (let i = 0; i < 9; i++) {
        loaders.push(<div key={i} className="loader"></div>);
    }

    return (
        <>
            <div className='container warpper_loader'>
                {loaders}
            </div>
        </>
    );
}

export default Loading;
