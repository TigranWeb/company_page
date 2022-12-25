import "./mainNav.css";
import { Link } from "react-router-dom";
import { GiAbstract050 } from "react-icons/gi";
import { FaChevronDown, FaUserAlt } from "react-icons/fa";

const navData = [
  {
    name: "Pricing",
    path: "/pricing",
    id: "/pricing",
  },
  {
    title: "Products",
    sub: true,
    id: "Products_main",
    children: [
      {
        name: "products",
        path: "/products",
        id: "/products",
      }
    ]
  },

  {
    title: "Free tools",
    sub: true,
    id: "Free tools main",
    children: [
      {
        name: "free-tools",
        path: "/free-tools",
        id: "/free-tools",
      },
      {
        name: "free-tools",
        path: "/free-tools",
        id: "/free-tools4",
      },
      {
        name: "free-tools",
        path: "/free-tools",
        id: "/free-tools5",
      },
      {
        name: "free-tools",
        path: "/free-tools",
        id: "/free-tool8s",
      }
    ]
  },
  {
    name: "Blog",
    path: "/blog",
    id: "/blog",
  },
  {
    title: "Support",
    sub: true,
    id: "Support",
    children: [
      {
        name: "Support",
        path: "/support",
        id: "/Support",
      }
    ]
  },
]


export const MainNav = () => {
  return <nav className="mainNav_container">
    <Link to="/" className="header_link header_logo" >
      <GiAbstract050 color="#2BB371" />
      <span> T/BLOG</span>
    </Link>
    <ul className="mainNav">
      {
        navData.map(data => {
          if (data.sub) {
            return (
              <li key={data.id} className="mainNav_sub_container">
                <span className="header_link">{data.title} <FaChevronDown /></span>
                <ul key={data.id} className="mainNav_sub">
                  {data.children.map(sub => {
                    return (
                      <li key={sub.id} className="mainNav_item">
                        <Link className="header_link_sub" to={sub.path}>  {sub.name} </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          } else {
            return (
              <li key={data.id} className="mainNav_item">
                <Link className="header_link" to={data.path}> {data.name}</Link>
              </li>
            )
          }
        })
      }
    </ul>

    {
      // has user
      false ?
        <button className="header_login header_link">Log Out</button>
        : (
          <Link className="header_login header_link" to="/login">
            <FaUserAlt />
            <span> Sign In</span>
          </Link>
        )
    }


  </nav>
}