let avatar = "https://avatars.githubusercontent.com/u/150652463?v=4";
let repo = "https://github.com/Nijipont?tab=repositories";


export function GitHubAvatar() {
    return <div className="avatar-img" style={{ backgroundImage: `url(${avatar})`, width: "450px", height:"450px", backgroundSize:"cover", margin: "0 auto" }}></div>;
}

export function GitHubRepoURL() {
    return <a href={repo} target="_blank" rel="noreferrer" style={{ display: "block", marginTop: "20px", fontFamily: "sans-serif", fontWeight:"bold"}}>My GitHub Repositary</a>;
}

export default function GitHubInfo() {
    return <div style={{textAlign: "center"}}>
        <h1>My GitHub Information</h1>
        <GitHubAvatar />
        <GitHubRepoURL />
    </div>;
}