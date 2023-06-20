import { ArrowForwardIcon, QuestionOutlineIcon, InfoIcon, ChevronRightIcon, QuestionIcon, ArrowRightIcon } from "@chakra-ui/icons";
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
    { id: 1, url: "/help", name: "Zadaj pytanie", icon: <QuestionOutlineIcon/> },
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

export const userMainLinks={
  MainNav:[

  {
    id:0,
    url:'/user/tests',
    icon: <ChevronRightIcon />,
    name: 'Testy'
  },
  {
    id:2,
    url:'/user/test/create',
    icon: <ChevronRightIcon />,
    name: 'Konto'

  },
  {
    id:3,
    url:'/user/test/create-test',
    icon: <ChevronRightIcon />,
    name: 'Wyloguj',
    class: 'outline-link order-last'


  }],
  Help:[
  {
    id:23,
    url:'/user/help',
    icon: <QuestionIcon />,
    name: 'Zadaj pytanie'

  },
  {
    id:24,
    url:'/user/error',
    icon: <QuestionIcon />,
    name: 'Zgłoś błąd'

  }]
}

export const testLinks=[
  {
    id:1,
    url:'/user/tests/create',
    icon: <ArrowRightIcon/>,
    name: 'Generuj test'
  },{
    id:2,
    url:'/user/tests/settings',
    icon: <ArrowRightIcon/>,
    name: 'Zarządzaj testami'
  },
  {
    id:3,
    url:'/user/test/create-test',
    icon: <ArrowRightIcon/>,
    name: 'Zarządzaj pytaniami'
  },
  {
    id:4,
    url:'/user/test/create-test',
    icon: <ArrowRightIcon/>,
    name: 'Statystyki'
  }
];