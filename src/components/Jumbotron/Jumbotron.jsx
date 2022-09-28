import './Jumbotron.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Jumbotron = () => {

    const GALLERY_UPDATE_DELAY = 5000;

    const [ slickGallery, setSlickGallery ] = useState(true);
    const [ selectedItem, setSelectedItem ] = useState(2);
    const [ gallery, setGallery ] = useState([
        {
            background: '/images/concert.png',
            top: 'Lorem ipsum',
            mid: 'dolor sit',
            bottom: 'amet consectetur',
        },
        {
            background: '/images/trending.png',
            top: 'dolor sit',
            mid: 'Lorem ipsum',
            bottom: 'amet consectetur',
        },
        {
            background: '/images/jumbotron.png',
            top: 'A Safe Kind',
            mid: 'Music Is',
            bottom: 'Of High',
        },
        {
            background: '/images/hire-us.png',
            top: 'amet consectetur',
            mid: 'dolor sit',
            bottom: 'Lorem ipsum',
        }
    ]);

    const alterDisplayItem = (new_index) => { setSelectedItem(new_index) };

    // Slick between gallery items
    useEffect(() => {
        if (!slickGallery) { return; }

        let index = selectedItem;
        const changeInterval = setInterval(() => {
            alterDisplayItem(index);
            index++;
            if (index === gallery.length) { index = 0; }
        }, GALLERY_UPDATE_DELAY);

        // Clean up
        return () => clearInterval(changeInterval);
    }, [gallery.length, selectedItem, slickGallery]);

    // Handlers
    const clickHandler = (index) => {
        alterDisplayItem(index);
    };

    const selectorEnterHandler = () => {
        setSlickGallery(false);
    };

    const selectorLeaveHandler = () => {
        setSlickGallery(true);
    };

    // Gallery elements
    const selectorList = [];
    const galleryList = [];
    gallery.forEach((item, index) => {
        selectorList.push(
            <li
                key={index}
                onClick={() => clickHandler(index)}
                onMouseEnter={selectorEnterHandler}
                onMouseLeave={selectorLeaveHandler}
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
