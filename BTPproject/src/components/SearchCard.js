import SearchCardCSS from "./SearchCard.module.css"

export default function SearchCard(props){
    const logoName = props.logoName;
    const contentUp = props.contentUp;
    const contentDown = props.contentDown;
    return (
        <div className={SearchCardCSS.main_div} >
            <div className={SearchCardCSS.icon_div}>
                <img className={SearchCardCSS.icon} src={"./"+logoName+".png"}  alt="logo" />
            </div>
            <div className={SearchCardCSS.content_div}>
                <p className={SearchCardCSS.content_up}>{contentUp}</p>
                <p className={SearchCardCSS.content_down}>{contentDown}</p>
            </div>
            <div className={SearchCardCSS.arrow_div}>
                <img className={SearchCardCSS.arrow} src={"./arrow.png"}  alt="logo" />
            </div>
        </div>
    );
}