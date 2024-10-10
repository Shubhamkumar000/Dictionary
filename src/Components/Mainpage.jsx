import { useEffect, useState } from "react";
import Info from "./Info";

const Mainpage = () => {

    const [search,setSearch]=useState('');
    const [data,setData]=useState([]);


    const getdata = async() => {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        const jsondata = await response.json();
        console.log(jsondata);
        setData(jsondata);

    }

    const handleInput = (e) => {
        setSearch(e.target.value);

    }
    
    return (
        <>
        <div className="outer">
        <h1> Dictionary App</h1>
        <div className="container">
            <div className="searchbar">
                <input className="inputbox" type="text" placeholder="Enter the word" onChange={handleInput}/>
                <button onClick={getdata}>Search</button>
            </div>
            <div>
                <Info detail={data}/>
            </div>
        </div>
        </div>
        </>
    )
}

export default Mainpage;