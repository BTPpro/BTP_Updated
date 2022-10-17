import SideMenuCSS from "./SideMenu.module.css"
import SliderBtn from "./SliderBtn";
import ResumeBtn from "./ResumeBtn";
import { Link } from "react-router-dom";

export default function SideMenu(props){
    function handleclick(){
        props.click1();
    }
    return (
        <div className={props.isMenuActive ? (SideMenuCSS.main_div + " " + SideMenuCSS.active) : (SideMenuCSS.main_div + " " + SideMenuCSS.notactive) } >
            <div className={SideMenuCSS.help_div} >
                <img className={SideMenuCSS.help_pic} src="./help.png" alt="help" />
            </div>
            <div className={SideMenuCSS.mid_div} >
                <div className={SideMenuCSS.mid1_div} >
                    <div className={SideMenuCSS.mid2_div} >
                        
                            <div className={SideMenuCSS.mid3_div} >
                                <Link onClick={handleclick} className={SideMenuCSS.links} to={"/profile"}>
                                    <SliderBtn picName="side1" text="PROFILE" />
                                </Link>
                            </div>
                        
                        <div className={SideMenuCSS.mid3_div} >
                            <Link onClick={handleclick} className={SideMenuCSS.links} to={"/student_assessment"}>
                                <SliderBtn picName="side2" text="STUDENT ASSESSMENT" />
                            </Link>
                            
                        </div>
                    </div>

                    <div className={SideMenuCSS.mid2_div} >
                        <div className={SideMenuCSS.mid3_div} >
                            <SliderBtn picName="side3" text="TEAMS" />
                        </div>
                        <div className={SideMenuCSS.mid3_div} >
                            <SliderBtn picName="side4" text="CONTACT US" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={SideMenuCSS.last_div} >
                <p className={SideMenuCSS.resume_heading}>Resume</p>
                <Link onClick={handleclick} className={SideMenuCSS.links} to={"/resume"}>
                    <div>
                    <ResumeBtn upperText="Upload Resume" lowerText="Send to Server" />
                    </div>
                </Link>
                <Link onClick={handleclick} className={SideMenuCSS.links} to={"/resume_analyzer"}>
                    <ResumeBtn upperText="Resume analysis" lowerText="Get checked your Resume" />
                </Link>
                
            </div>
            
            <div className={SideMenuCSS.logout_div} >
                <Link onClick={handleclick} className={SideMenuCSS.links} to={"/"}>
                <p className={SideMenuCSS.logout}>LOG OUT</p>
                </Link>
            </div>
        </div>
    );
}