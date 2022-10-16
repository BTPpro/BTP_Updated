import NavSearchCSS from "./NavSearch.module.css"
import { FiSearch } from 'react-icons/fi';

export default function NavSearch(){
    return (
        <div className={NavSearchCSS.search_div}>
            <div className={NavSearchCSS.icon_logo}><FiSearch size={25}/></div>
            <p>Search</p>
        </div>
    );
}