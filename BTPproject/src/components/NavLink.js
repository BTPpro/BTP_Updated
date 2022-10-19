import NavLinkCSS from "./NavLink.module.css"
import { HiOutlineRss } from 'react-icons/hi';
import { FiBriefcase } from 'react-icons/fi';
import { FiBell } from 'react-icons/fi';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from "react-router-dom";

export default function NavLink(props){
    const logoName = props.logoName;
    const linkName = props.linkName;
    if(logoName === "feed")
    return (
        <div className={NavLinkCSS.link_div}>
            {/* <img className={NavLinkCSS.link_logo} src={"./"+logoName+".png"}  alt="navLink_logo" /> */}
            <Link className={NavLinkCSS.link} to={"/"+logoName}>
                <div className={NavLinkCSS.icon_logo}><HiOutlineRss size={25}/></div>
                <p style={props.isFeedActive?{color:"blue"}:{}} className={NavLinkCSS.LinkName}>{linkName}</p>
            </Link>
            
            <div style={props.isFeedActive?{opacity:"100"}:{opacity:"0"}} className={NavLinkCSS.border_line}></div>
        </div>
    )
    else if(logoName === "jobs")
    return (
        <div className={NavLinkCSS.link_div}>
            <Link className={NavLinkCSS.link} to={"/"+logoName}>
                <div className={NavLinkCSS.icon_logo}><FiBriefcase size={25}/></div>
                <p style={props.isJobsActive?{color:"blue"}:{}} className={NavLinkCSS.LinkName}>{linkName}</p>
            </Link>
            <div style={props.isJobsActive?{opacity:"100"}:{opacity:"0"}} className={NavLinkCSS.border_line}></div>
        </div>
    )
    else if(logoName === "notices")
    return (
        <div className={NavLinkCSS.link_div}>
            <Link className={NavLinkCSS.link} to={"/"+logoName}>
                <div className={NavLinkCSS.icon_logo}><FiBell size={25}/></div>
                <p style={props.isNoticesActive?{color:"blue"}:{}} className={NavLinkCSS.LinkName}>{linkName}</p>
            </Link>
            <div style={props.isNoticesActive?{opacity:"100"}:{opacity:"0"}} className={NavLinkCSS.border_line}></div>
        </div>
    )
    else if(logoName === "menu")
    return (
        <div className={NavLinkCSS.link_div +" "+ NavLinkCSS.link_MENU_Div}>
            <div className={NavLinkCSS.icon_logo}><FiMoreHorizontal size={25}/></div>
            <p>{linkName}</p>
            <div style={props.isFeedActive?{opacity:"0"}:{opacity:"0"}} className={NavLinkCSS.border_line}></div>
        </div>
    )
    ;
}