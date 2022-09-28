import './Jumbotron.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Jumbotron = () => {

    const GALLERY_UPDATE_DELAY = 5000;

    const [ selectedItem, setSelectedItem ] = useState(2);

    const [ gallery, setGallery ] = useState([
        {
            background: '/images/concert.png',
            top: 'Lorem ipsum',
            mid: 'dolor sit',
            bottom: 'amet consectetur',
            selected: true,
        },
        {
            background: '/images/trending.png',
            top: 'dolor sit',
            mid: 'Lorem ipsum',
            bottom: 'amet consectetur',
            selected: false,
        },
        {
            background: '/images/jumbotron.png',
            top: 'A Safe Kind',
            mid: 'Music Is',
            bottom: 'Of High',
            selected: false,
        },
        {
            background: '/images/hire-us.png',
            top: 'amet consectetur',
            mid: 'dolor sit',
            bottom: 'Lorem ipsum',
            selected: false,
        }
    ]);

    const changeGallery = (new_index) => { setSelectedItem(new_index) };

    // Alternate between the gallery items
    useEffect(() => {
        let index = selectedItem;
        setInterval(() => {
            changeGallery(index);
            index++;
            if (index === gallery.length) { index = 0; }
        }, GALLERY_UPDATE_DELAY);
    }, []);

    const clickHandler = (index) => {
        changeGallery(index);
    };

    const selectorList = [];
    const galleryList = [];

    gallery.forEach((item, index) => {
        selectorList.push(
            <li
                key={index}
                onClick={() => clickHandler(index)}
                className={`selector-item${selectedItem === index ? ' selected' : ''}`}
            >
                <hr size='1' />
                <span>{index + 1}</span>
                <hr size='1' />
            </li>
        );

        galleryList.push(
            <li
                key={index}
                className={`gallery-item${selectedItem === index ? ' selected' : ''}`}
            >
                <div className='gallery-background'>
                    <img src={item.background} alt={`background-${index + 1}`} />
                </div>
                <div className="text">
                    <span className='top-text'>{item.top}</span>
                    <span className='mid-text'>{item.mid}</span>
                    <span className='bottom-text'>{item.bottom}</span>
                </div>
            </li>
        );
    });

    return (
        <section className='jumbotron' >
            <div className='background'></div>
            <ul className="selector">
                {selectorList}
            </ul>
            <ul className='gallery'>
                {galleryList}
            </ul>
        </section>
    );
};

export default Jumbotron;
