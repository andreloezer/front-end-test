import { useState, useEffect } from 'react';
import axios from 'axios';

import './Trending.css' ;
import Playlist from './Playlist/Playlist';
import TrendingVideo from './TrendingVideo/TrendingVideo';

const Trending = () => {

    const [ showText, setShowText ] = useState(true);
    const [ gallery, setGallery ] = useState([]);
    const [ isGalleryFetched, setIsGalleryFetched ] = useState(false);
    
    useEffect(() => {
        const hash = window.location.hash;
        let fetchedToken = '';

        if (hash) {
            fetchedToken = hash
                .substring(1)
                .split('&')
                .find(el => el.startsWith('access_token'))
                .split('=')[1];

            window.location.hash = '';
            getGalleries(fetchedToken);
        }
    }, []);

    // Spotify API implemented using this video as reference: https://youtu.be/wBq3HCvYfUg
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const REDIRECT_URI = 'http://localhost:3000/';
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE = 'token';
    const SPOTIFY_LOGIN_URI = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

    const getGalleries = async (fetchedToken) => {
        const { data } = await axios.get('https://api.spotify.com/v1/users/smedjan/playlists', {
            headers: {
                Authorization: `Bearer ${fetchedToken}`,
            },
            params: {
                limit: '4',
                offset: '18',
            },
        });

        const fetchedPlaylists = data.items;

        const playlists = [];
        fetchedPlaylists.forEach((playlist, index) => {
            playlists.push({
                number: index + 1,
                name: playlist.name,
                imgUrl: playlist.images[0].url
            });
        });

        setGallery(playlists);
        setIsGalleryFetched(true);
    }

    const playHandler = () => {
        setShowText(false);
    };

    const textClass = showText ? 'video-text' : 'video-text hidden';
    const playBtnClass = showText ? 'play-btn' : 'play-btn hidden';

    const videoPoster = './images/trending.png';

    // Set a dummy playlist gallery while not logged in spotify
    useEffect(() => {
        setGallery([
            {
                number: 1,
                name: 'playlist-1',
                imgUrl: './images/playlist-1.png',
            },
            {
                number: 2,
                name: 'playlist-2',
                imgUrl: './images/playlist-2.png',
            },
            {
                number: 3,
                name: 'playlist-3',
                imgUrl: './images/playlist-3.png',
            },
            {
                number: 4,
                name: 'playlist-4',
                imgUrl: './images/playlist-4.png',
            },
        ]);
    }, []);

    const playlistItems = gallery.map((playlist) => {
        return (
            <Playlist
                key={playlist.number}
                name={playlist.name}
                imgUrl={playlist.imgUrl}
            />
        );
    });

    return (
        <section className='trending'>
            <div
                className='newest-video'
            >
                <div className={textClass}>
                    <h2>Our Newest Video</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tincidunt dui, vitae posuere ipsum. Praesent vehicula nunc eget risus vehicula rutrum. Vestibulum pulvinar sapien tellus, sit amet ultrices turpis vestibulum at.</p>
                </div>
                <div className={playBtnClass}>
                    <div>
                        <div>
                            <button
                                className='play-btn-icon'
                                onClick={playHandler}
                            >
                                <img src='./images/player.png' alt='play' />
                            </button>
                        </div>
                    </div>
                </div>
                
                <TrendingVideo
                    showControls={!showText}
                    poster={videoPoster}
                />
            </div>
            <div className='gallery-wrapper'>
                { !isGalleryFetched ?
                    <div className='spotify-login'>
                        <a href={SPOTIFY_LOGIN_URI}>Login to Spotify</a>
                    </div>
                : null }
                <ul className='gallery'>
                    {playlistItems}
                </ul>
            </div>
        </section>
    );
};

export default Trending;
