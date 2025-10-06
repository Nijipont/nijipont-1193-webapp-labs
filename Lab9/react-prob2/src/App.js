import { GitHubAvatar, GitHubRepoURL } from "./GitHubComponents";
import "./App.css";

export default function GitHubInfo() {
  const userInfo = {
    url: "https://github.com/Nijipont/",
    img_url: "https://avatars.githubusercontent.com/u/150652463?v=4",
    alt: "Nijipont Hirannukor",
  };
  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar img_url={userInfo.img_url}/>
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}