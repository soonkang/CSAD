import React, { useState } from 'react';
import './Gallery.css';


const Photo = () => {
    let data = [
        {
            id: 1,
            imgSrc: './asset/images/author.jpg',
        },
        {
            id: 2,
            imgSrc: '',
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
export default Photo;
