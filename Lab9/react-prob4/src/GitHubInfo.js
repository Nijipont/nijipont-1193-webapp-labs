import { GitHubAvatar } from "./GitHubComponents";

export function GitHubInfo({ userInfo }) {
  const displayName =
    userInfo.followers > 10000
      ? `${userInfo.alt} (${userInfo.followers} followers)`
      : userInfo.alt;

  return (
    <li className="GitHubInfo">
      <div className="GitHubItem">
        <GitHubAvatar img_url={userInfo.imgURL} alt={userInfo.alt} size={100}/>
        <a href={userInfo.url} target="_blank" rel="noreferrer">
          {displayName}
        </a>
      </div>
    </li>
  );
}
