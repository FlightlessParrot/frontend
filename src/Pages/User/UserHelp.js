import MessageToTech from "../../Components/MessageToTech";

import { OnlyTopBar} from "../../Components/Layouts/UserLayout";
export default function UserHelp() {
    const text = {
      title: "Uzyskaj pomoc",
      message:
        "Masz problem techniczny? Chcesz się z nami skontaktować? A może chcesz opisać nam swoje doświadczenia z aplikacją i pomysły? Jesteś we właściwym miejscu.",
      buttonText: 'Wyślij'
      };
    return (
      <OnlyTopBar>
        <div className="p-4 w-full">
        <MessageToTech {...text} /></div>
      </ OnlyTopBar>
    );
  }
  