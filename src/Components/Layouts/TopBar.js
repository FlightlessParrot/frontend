import { NavLink, Link } from "react-router-dom";
import ReportBugButton from "../Buttons/buttons";
import {
  MenuButton,
  IconButton,
  MenuGroup,
  MenuItem,
  Menu,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import { questMobileLinks as links } from "../../Data/navLinks";
import { HamburgerIcon } from "@chakra-ui/icons";

const handleIteration = (element) => {
  return (
    <MenuItem as={Link} to={element.url} icon={element.icon} key={element.id}>
      {element.name}
    </MenuItem>
  );
};

export default function TopBar(props) {
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
    <nav className="hidden  w-full lg:flex lg:justify-end items-center lg:pr-8 lg:gap-8 relative top-0 h-[60px]">
      <img
        src="/Storage/Images/Education-150-150.png"
        alt="logo"
        className="absolute left-0 top-[-15px] h-[90px] object-cover object-center"
      />
      <ReportBugButton
        url={props.reportBugUrl}
        classes="absolute left-40 hidden lg:block"
      />
      {links}
    </nav>
  );
}

export function QuestMobileBar(props) {
  const link = {
    pages: "",
    help: "",
    documents: "",
  };

  link.pages = links.pages.map(handleIteration);
  link.help = links.help.map(handleIteration);
  link.documents = links.documents.map(handleIteration);
  return (
    <nav className="visible lg:hidden sticky z-50 w-full flex justify-end items-center">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          data-testid="MobileNavigation-button"
          className="m-2"
          _hover={{ bg: "sel" }}
          _active={{ bg: "odra", color: "gray.400", borderColor: "gray.400" }}
        ></MenuButton>
        <MenuList data-testid="MobileNavigation-window">
          <MenuGroup title="Podstrony">{link.pages}</MenuGroup>
          <MenuDivider />
          <MenuGroup title="Pomoc" data-testid="MobileNavigation-group">
            {link.help}
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Dokumenty">{link.documents}</MenuGroup>
        </MenuList>
      </Menu>
    </nav>
  );
}
export function MobileBar({mainNav, help, underNav}) {
  const link = {
    mainNav: "",
    help: "",
    underNav: "",
  };

  link.mainNav = mainNav.map(handleIteration);
  link.help=help.map(handleIteration)
  link.underNav= underNav.map(handleIteration);
  return (
    <nav className="visible lg:hidden sticky z-50 w-full flex justify-end items-center">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Otwórz menu"
          icon={<HamburgerIcon />}
          variant="outline"
          data-testid="MobileNavigation-button"
          className="m-2"
          _hover={{ bg: "sel" }}
          _active={{ bg: "odra", color: "gray.400", borderColor: "gray.400" }}
        ></MenuButton>
        <MenuList data-testid="MobileNavigation-window">
          <MenuGroup title="Strony">{link.mainNav}</MenuGroup>
          <MenuDivider />
          <MenuGroup title="Podstrony">{link.underNav}</MenuGroup>
          <MenuDivider />
          <MenuGroup title="Pomoc">{link.help}</MenuGroup>
        </MenuList>
      </Menu>
    </nav>
  );
}

