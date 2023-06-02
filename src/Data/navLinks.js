import { ArrowForwardIcon, QuestionOutlineIcon, InfoIcon } from "@chakra-ui/icons";
export const questLinks = [
  { id: 0, url: "/", name: "O nas" },
  { id: 1, url: "/help", name: "Pomoc" },
  { id: 2, url: "/login", name: "Zaloguj" },
  { id: 3, url: "/register", name: "Zarejestruj", class: 'outline-link' },
];

export const questFootLinks = [
  {
    id: 0,
    url: "/",
    name: "O nas",
  },
  {
    id: 1,
    url: "/",
    name: "Dane osobowe",
  },
  {
    id: 2,
    url: "/",
    name: "Polityka prywatności",
  },
  {
    id: 3,
    url: "/",
    name: "Regulamin",
  },
  {
    id: 4,
    url: "/help",
    name: "Pomoc",
  },
];

export const questMobileLinks={
  pages: [
    { id: 0, url: "/", name: "O nas", icon: <ArrowForwardIcon />},
    { id: 2, url: "/login", name: "Zaloguj", icon: <ArrowForwardIcon /> },
    { id: 3, url: "/register", name: "Zarejestruj", class: 'outline-link', icon: <ArrowForwardIcon /> },
  ],
  help: [
    { id: 1, url: "/help", name: "Pomoc", icon: <QuestionOutlineIcon/> },
    { id: 2, url: "/report-error", name: "Zgłoś błąd", icon: <QuestionOutlineIcon/>  },
  ],
  documents:[
    {
      id: 1,
      url: "/",
      name: "Dane osobowe",
      icon: <InfoIcon/>
    },
    {
      id: 2,
      url: "/",
      icon:   <InfoIcon/>,
      name: "Polityka prywatności",
    },
    {
      id: 3,
      url: "/",
      icon:   <InfoIcon />,
      name: "Regulamin",
    },
  ]

}