import { NavLink, Link } from "react-router-dom";
import ReportBugButton from "../Buttons/buttons";
import { MenuButton,IconButton, MenuGroup, MenuItem, Menu, MenuList, MenuDivider } from "@chakra-ui/react";
import { questMobileLinks as links } from "../../Data/navLinks";
import { HamburgerIcon, } from "@chakra-ui/icons";

export default function QuestTopBar(props) {
  const links = props.links.map((element) => {
    return (
      <NavLink
        key={element.id}
        to={element.url}
        className={`navigation-link ${element.class}`}
      >
        {element.name}
      </NavLink>
    );
  });

  return (
    <nav className="hidden  w-full md:flex md:justify-end items-center md:pr-8 md:gap-8 relative top-0 h-[60px]">
      <img
        src="/Storage/Images/Education-150-150.png"
        alt="logo"
        className="absolute left-0 top-[-15px] h-[90px] object-cover object-center"
      />
      <ReportBugButton classes="absolute left-40 hidden md:auto" />
      {links}
    </nav>
  );
}

export function QuestMobileBar(props) {
  const link={
    pages:'',
    help: '',
    documents: '',

  } 
  const handleIteration=(element) => {
    return (
      <MenuItem as={Link} to={element.url}  icon={element.icon} key={element.id}>
      
        {element.name}
    
        
      </MenuItem>
    );
  };

  link.pages= links.pages.map(handleIteration)
  link.help= links.help.map(handleIteration)
  link.documents= links.documents.map(handleIteration)
  return (
    <nav className="visible md:hidden sticky z-50 w-full flex justify-end items-center">
        <Menu  >
           
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
     className="m-2"
     _hover={{bg: 'sel', }}
     _active={{bg: 'odra',color: 'gray.400', borderColor: 'gray.400'}}
      ></MenuButton> 
      <MenuList>
        <MenuGroup  title='Podstrony'>
            {link.pages}

        </MenuGroup>
        <MenuDivider />
        <MenuGroup title='Pomoc'>
            {link.help}

        </MenuGroup>
        <MenuDivider />
        <MenuGroup title='Dokumenty'>
            {link.documents}

        </MenuGroup>
        </MenuList>
      </Menu>
    </nav>
  );
}
