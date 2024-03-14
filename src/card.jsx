import profilePic from './assets/p.jpeg'
function Card()
{
return (
    <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture"/>
        <h2>Prarthana</h2>
        <p className="card-text">I am a Software Engineer and I love to dance</p>

    </div>
);
}
export default Card;