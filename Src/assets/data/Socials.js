import { ReactComponent as GithubIcon } from "../svg/Github_white.svg";
import { ReactComponent as MailIcon } from "../svg/Mail_white.svg";
import { ReactComponent as LinkedinIcon } from "../svg/LinkedIN_white.svg";

const socials = [
    {
      title: "Github",
      icon: <GithubIcon className="social-icon" />,
      username: "DevOne-01",
      link: "https://github.com/DevOne-01",
    },
    {
      title: "LinkedIN",
      icon: <LinkedinIcon className="social-icon" />,
      username: "khush-joshi-820708208",
      link: "https://www.linkedin.com/in/khush-joshi-820708208/",
    },
    {
      title: "Mail",
      icon: <MailIcon className="social-icon" />,
      username: "khushjoshi021@outlook.com",
      link: "mailto:khushjoshi021@outlook.com",
    },
  ];

  export default socials;