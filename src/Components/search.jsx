import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContent";

const Search = () => {

    const { searchParam, handleOnChange, handleSubmit } = useContext(GlobalContext);

    return (
        <div className="search">
            <input type="text" value={searchParam} onChange={handleOnChange} name="search" placeholder="enter movie keyword here" />
            <button disabled={searchParam.trim().length <= 2} onClick={handleSubmit}>Submit search</button>
        </div>
    )
}

export default Search;