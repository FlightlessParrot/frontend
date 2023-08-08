import MessageToTech from "../../Components/MessageToTech";
import QuestLayout from "../../Components/Layouts/QuestLayout"
import { OnlyTopBar, TestUserLayout } from "../../Components/Layouts/UserLayout";

export default function ReportBug()
{
    const text={
        title: 'Zgłoś błąd aplikacji',
        message: 'Dzięki Twojemu zgłoszeniu bedziemy mogli poprawić jakość naszej aplikacji. Pomóż nam!',
        buttonText: 'Zgłoś błąd'
    }
    return (<QuestLayout>
      
    <MessageToTech {...text} />
    </QuestLayout>
    )
    
}

export  function UserReportBug()
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