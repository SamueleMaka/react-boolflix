import {FaStar, FaRegStar} from 'react-icons/fa';
import './SingleCard.css'

const SingleCard = ({ title, original_title, original_language, vote_average, poster_path}) => {
    let language = original_language 
    original_language === "en" ? language = "gb" : language = original_language || original_language === "ja" ? language = "jp" : language = original_language
    
    function numRounder (num) {
        return Math.ceil((num / 10) * 5);
}

    function stars(vote){
        const maxVote = 5

        return(
            <div className="starsContainer">
                {[...Array(maxVote)].map((_, index) => {
                    return index < vote ? <FaStar key={index} className="star" /> : <FaRegStar key={index} className="star" />
                })}
            </div>
        )
    }
    return (
        <>
            <div className="cardContainer">
                <img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt="" />
                <div className="infoContainer">
                    <h2>Title: {title}</h2>
                    <h2>Original Title: {original_title}</h2>
                    <h3>Original Language: <img src={`https://flagcdn.com/16x12/${language}.png`} width="16" height="12" alt={original_language} /></h3>
                    <h3> Average Vote {stars(numRounder(vote_average))}</h3> 
                </div>
            </div>
        </>
    )
}

export default SingleCard

// 