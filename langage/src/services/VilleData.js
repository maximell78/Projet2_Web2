import javascript from "../image/javascript.png";
import css from "../image/css.png";
import html from "../image/html.png";
import python from "../image/python.png"
const langages = [
  {
    id: 1,
    name: "Javascript",
    description: "Bacon ipsum dolor amet pork buffalo drumstick short loin, beef ribs biltong pancetta sirloin pig chicken cupim capicola andouille short ribs pork belly. Short ribs biltong prosciutto turkey pig short loin cupim turducken ribeye pancetta bacon.",
    villeFavori: false,
    icon: <img src={javascript}/>,
  },
  {
    id: 2,
    name: "HTML",
    description: "Bacon ipsum dolor amet pork buffalo drumstick short loin, beef ribs biltong pancetta sirloin pig chicken cupim capicola andouille short ribs pork belly. Short ribs biltong prosciutto turkey pig short loin cupim turducken ribeye pancetta bacon.",
    villeFavori: false,
    icon: <img src={html}/>,
  },
  {
    id: 3,
    name: "CSS",
    description: "Bacon ipsum dolor amet pork buffalo drumstick short loin, beef ribs biltong pancetta sirloin pig chicken cupim capicola andouille short ribs pork belly. Short ribs biltong prosciutto turkey pig short loin cupim turducken ribeye pancetta bacon.",
    villeFavori: false,
    icon: <img src={css}/>,
  },
  {
    id: 4,
    name: "Python",
    description: "Bacon ipsum dolor amet pork buffalo drumstick short loin, beef ribs biltong pancetta sirloin pig chicken cupim capicola andouille short ribs pork belly. Short ribs biltong prosciutto turkey pig short loin cupim turducken ribeye pancetta bacon.",
    villeFavori: false,
    icon: <img src={python}/>,
  },  
];
export default langages;