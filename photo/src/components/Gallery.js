import React, { useState } from 'react';
import './Gallery.css';
import Img1 from './harold.jpg';
import Img2 from './logo512.png'

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: '',
        },
        {
            id: 4,
            imgSrc: '',
        },
        {
            id: 5,
            imgSrc: '',
        },
        {
            id: 6,
            imgSrc: '',
        },
    ];
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempimgSrc} />
            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default Gallery;
