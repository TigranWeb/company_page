import { useEffect, useState } from "react";
import "./urlBar.css";

export const UrlBar = (props = { urlList: [] }) => {
  const { urlList } = props;
  const [urls, setUrls] = useState();
  return <div className="urlBar_container">
    <ul>
      {urls.map(url => {
        return <li key={url}>
          <Link to={url} />
        </li>
      })}
    </ul>
  </div>
}