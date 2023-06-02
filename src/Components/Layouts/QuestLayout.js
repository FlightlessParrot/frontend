import QuestTopBar, { QuestMobileBar } from "./QuestTopBar";
import { questLinks as links, questFootLinks} from "../../Data/navLinks";
import { Link } from "react-router-dom";
export default function QuestLayout(props)
{
  const footLink=questFootLinks.map(
    (e)=><Link to={e.url} key={e.id}>{e.name}</Link>
  )
  return (
    <>
    
      <QuestTopBar links={links} />
      <QuestMobileBar />
      <div className="p-6 relative top-0">{props.children}</div>
      <footer className="hidden  w-screen md:flex justify-around items-center">{footLink}</footer>
    </>
  );
}
