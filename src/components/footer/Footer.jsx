import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

const footerLinks = [
  {
    title: "products",
    id: "products",
    list: [
      { title: "Website Uptime Monitoring", path: "" },
      { title: "Website Speed Monitoring", path: "" },
      { title: "Website Transaction Monitoring", path: "" },
      { title: "Real User Monitoring", path: "" },
    ]
  },
  {
    title: "tools",
    id: "tools",
    list: [
      { title: "Website Speed Test", path: "" },
      { title: "Website Availability Test", path: "" },
    ]
  },
  {
    title: "resources",
    id: "resources",
    list: [
      { title: "Privacy Policy", path: "" },
      { title: "Cookie Policy", path: "" },
      { title: "Terms of Service", path: "" },
      { title: "Sitemap", path: "" },
      { title: "Monitoring checkpoints", path: "" },
    ]
  },
  {
    title: "recent blog posts",
    id: "recent blog posts",
    list: [
      { title: "Summer updates for Uptimia", path: "" },
      { title: "Uptimia has been completely redesigned", path: "" },
      { title: "Uptimia greets Spring with a fresh look", path: "" },
    ]
  }
];

export const Footer = () => {
  return <footer className="footer_container">
    <div className="footer_menu">
      {footerLinks.map(item => {
        return <div className="footer_col">
          <h4>{item.title}</h4>
          <ul className="footer_cal_list">
            {item.list.map(list => {
              return (
                <li className="footer_list__item">
                  <Link to={list.path}>{list.title}</Link >
                </li>
              )
            })}
          </ul>
        </div>
      }
      )}
    </div>
    <div className="footer_info">
      <span>© 2015-2019 Uptimia</span>
      <ul className="footer_social_list">
        <li><a target="_blank" rel="noreferrer noopener" href="https://twitter.com/"><FaTwitter /></a></li>
        <li><a target="_blank" rel="noreferrer noopener" href="https://facebook.com/"><FaFacebookF /></a></li>
      </ul>
    </div>
  </footer>
}