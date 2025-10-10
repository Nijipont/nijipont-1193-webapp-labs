import { GitHubAvatar } from "./GitHubComponents";

export function GitHubInfo({ userInfo }) {

  return (
    <li className="GitHubInfo">
      <div className="GitHubItem">
        <GitHubAvatar img_url={userInfo.imgURL} alt={userInfo.alt} size={100}/>
        <a href={userInfo.url} target="_blank" rel="noreferrer">{userInfo.alt}</a>
        <span>({userInfo.followers} followers)</span>
      </div>
    </li>
  );
}
