import MessageToTech from "../../Components/MessageToTech";
import QuestLayout from "../../Components/Layouts/QuestLayout";
import { OnlyTopBar, TestUserLayout } from "../../Components/Layouts/UserLayout";
export default function Help() {
  const text = {
    title: "Uzyskaj pomoc",
    message:
      "Masz problem techniczny? Chcesz się z nami skontaktować? A może chcesz opisać nam swoje doświadczenia z aplikacją i pomysły? Jesteś we właściwym miejscu.",
    buttonText: 'Wyślij'
    };
  return (
    <QuestLayout>
      
      <MessageToTech {...text} />
    </QuestLayout>
  );
}

export  function UserHelp() {
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
