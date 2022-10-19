import NavCandidateCSS from "./NavCandidate.module.css"

export default function NavCandidate(props){
    const candidateName = props.candidateName;
    const candidatepic = props.candidatepic;
    return (
        <div className={NavCandidateCSS.candidate_div}>
            <img className={NavCandidateCSS.candidate_pic} src={"./"+candidatepic+".png"}  alt="candidate" />
            <p className={NavCandidateCSS.p}>{candidateName}</p>
        </div>
    );
}