import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContent";

const MovieList = () => {

    const { movieList, loading } = useContext(GlobalContext);

    return (
        <div className="movieList">
            { loading && <span>Loading ! Please wait</span> }
            {
                movieList && movieList.length > 0
                    ? movieList.map((item) => (
                        <div key={item.imbID}>
                            <img src={item.Poster} alt="Movie poster" />
                            <p>{item.Title}</p>
                            <p>{item.Year}</p>
                        </div>
                    )) : null
            }
        </div>
    )
}

export default MovieList;