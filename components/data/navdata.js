import Home from "../../public/static/icons/home.svg";
import Profile from "../../public/static/icons/profile.svg";
import Message from "../../public/static/icons/message.svg";
import Job from "../../public/static/icons/job.svg";
import Blog from "../../public/static/icons/blog.svg";

const navdata = [
  {
    id: 1,
    name: "home",
    path: "/",
    icon: <Home />,
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    icon: <Profile />,
  },
  {
    id: 3,
    name: "portfolio",
    path: "/projects",
    icon: <Job />,
  },
  {
    id: 4,
    name: "contact",
    path: "/contact",
    icon: <Message />,
  },
  {
    id: 5,
    name: "Blog",
    path: "/blog",
    icon: <Blog />,
  },
];
export default navdata;
