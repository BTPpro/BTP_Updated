import NavbarCSS from "./Navbar.module.css"
import NavLink from "./NavLink"
import NavCandidate from "./NavCandidate"
// import NavSearch from "./NavSearch"
import { Link } from "react-router-dom";
import { useRef } from "react";
import Search from "./Search"

export default function Navbar(props){
    const menu=useRef();
    const handleClick = (e) => {
        e.preventDefault();
       props.setIsMenuActive(menu);
    }

    const click5=(search)=>{
        props.click6(search);
    }

    const newCheck3=()=>{
        props.setSearchTrue();
    }

    return (
        <nav >
            <Link to={"/feed"}>
                <div className={NavbarCSS.Lnm_logo_div}>
                    <img className={NavbarCSS.Navbar_lnmlogo} src="./lnm_logo.png" alt="lnmiit_logo" />
                </div>  
            </Link> 
            <NavLink logoName="feed" linkName="FEED"/>
            <NavLink logoName="jobs" linkName="JOBS"/>
            <NavLink logoName="notices" linkName="NOTICES"/>
            {/* <NavSearch /> */}
            <Search isSearchActive={props.isSearchActive} setSearchTrue={newCheck3} click4={click5} searchCount={2000} />
            <Link className={NavbarCSS.links} to={"/profile"}>
                <NavCandidate candidateName="VISHAL KUMAR" candidatepic="mayankvyas" />
            </Link>
            <div ref={menu} id="Menu" onClick={handleClick}><NavLink logoName="menu" linkName="MENU"/></div>
        </nav>
    );
}