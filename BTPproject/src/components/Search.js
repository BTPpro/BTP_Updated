import SearchCSS from "./Search.module.css"
import SearchCard from "./SearchCard.js"
import { FiSearch } from 'react-icons/fi';
import { useRef } from "react";

export default function Search(props){
    const searchCount = props.searchCount;
    function handleClick(){
        props.setSearchTrue();
    }

    const search=useRef();
    function click2(e){
        console.log(e.target);
        props.click4(search);
    }
    

    return (
        <div ref={search} onClick={click2} className={SearchCSS.main_div}>
            <div onClick={handleClick} className={SearchCSS.search_div}>
                <input className={SearchCSS.input} type="text" name="search" placeholder="Search" />
                <div className={SearchCSS.btn_div}>
                    <button className={SearchCSS.search_btn} type="submit"><div className={SearchCSS.icon_logo}><FiSearch size={16}/></div></button>
                </div>
            </div>
            <div className={props.isSearchActive? (SearchCSS.under_div + " " + SearchCSS.active) : (SearchCSS.under_div + " " + SearchCSS.notactive)}>
            <div className={SearchCSS.mid_div}>
                <p className={SearchCSS.mid_heading}>JOBS</p>
                <SearchCard logoName="upwork" contentUp="UX/UI Designer" contentDown="Upwork" />
                <SearchCard logoName="google" contentUp="Part-time UX designer" contentDown="Google" />
            </div>
            <div className={SearchCSS.end_div}>
                <p className={SearchCSS.end_btn_text}>ALL RESULTS ({searchCount}+)</p>
            </div>
            </div>
            
        </div>
    );
}