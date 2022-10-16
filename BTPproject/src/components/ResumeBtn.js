import ResumeBtnCSS from "./ResumeBtn.module.css"

export default function ResumeBtn(props){
    const upperText = props.upperText;
    const lowerText = props.lowerText;
    return (
        <div className={ResumeBtnCSS.main_div} >
            <p className={ResumeBtnCSS.upper_text}>{upperText}</p>
            <p className={ResumeBtnCSS.lower_text}>{lowerText}</p>
        </div>
    );
}