import { OnlyTopBar } from "../../Components/Layouts/UserLayout";
import MessageToTech from "../../Components/MessageToTech";
export default function UserReportBug()
{
    const text={
        title: 'Zgłoś błąd aplikacji',
        message: 'Dzięki Twojemu zgłoszeniu bedziemy mogli poprawić jakość naszej aplikacji. Pomóż nam!',
        buttonText: 'Zgłoś błąd'
    }
    return (<OnlyTopBar>
      <div className="p-4">
    <MessageToTech {...text} /></div>
    </OnlyTopBar>
    )
    
}