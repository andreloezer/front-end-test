import './Jumbotron.css';
import background from '../../images/jumbotron.png';

const Jumbotron = () => {
    return (
        <section
            className='jumbotron'
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className='background'></div>
            <div className='decorations'>
                <div>
                    <span>1</span>
                </div>
                <div>
                    <span>2</span>
                </div>
                <div className='striked'>
                    <hr size='1' />
                    <span>3</span>
                    <hr size='1' />
                </div>
                <div>
                    <span>4</span>
                </div>
            </div>
            <div className='text'>
                <span className='top-text'>A Safe Kind</span>
                <span className='mid-text'>Music Is</span>
                <span className='bottom-text'>Of High</span>
            </div>
        </section>
    );
};

export default Jumbotron;
