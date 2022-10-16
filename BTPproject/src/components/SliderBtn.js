import SliderBtnCSS from "./SliderBtn.module.css"

export default function SliderBtn(props){
    const val = props.picName;
    const text = props.text;
    return (
        <div className={SliderBtnCSS.main_div} >
            <div className={SliderBtnCSS.img_div} >
                <img className={SliderBtnCSS.slider_pic} src={"./"+val+".png"} alt="slider_pic" />
            </div>
            <div className={SliderBtnCSS.p} >
                <p>{text}</p>
            </div>
            
        </div>
    );
}