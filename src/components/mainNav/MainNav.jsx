import "./mainNav.css";
import { Link } from "react-router-dom";


const navData = [
  {
    name: "Pricing",
    path: "/pricing",
    id: "/pricing",
  },
  {
    title: "Products",
    sub: true,
    key: "Products_main",
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
    key: "Support",
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
    <Link to="/" >
      <img src="" alt="logo" />
      <span> Logo Text</span>
    </Link>
    <ul className="mainNav">
      {
        navData.map(data => {
          if (data.sub) {
            return (
              <div className="mainNav_sub_container">
                <span>{data.title}</span>
                <ul key={data.key} className="mainNav_sub">
                  {data.children.map(sub => {
                    return (
                      <li key={sub.key} className="mainNav_item">
                        <Link to={sub.path}> {sub.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          } else {
            return (
              <li key={data.key} className="mainNav_item">
                <Link to={data.path}> {data.name}</Link>
              </li>
            )
          }
        })
      }
    </ul>

    {
      // has user
      false ?
        <span>Lout</span>
        : (
          <Link to="/login">
            <span> Login</span>
          </Link>
        )
    }


  </nav>
}