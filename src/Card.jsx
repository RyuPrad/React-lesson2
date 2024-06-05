import monkey from './assets/monkey.jpg'

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={monkey} alt="profile picture" />
            <h2 className='card-title'>Ryu Pradana</h2>
            <p className='card-text'>Software Engineering</p>
        </div>
    );
};

export default Card;