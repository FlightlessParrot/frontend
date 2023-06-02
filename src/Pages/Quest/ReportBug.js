import MessageToTech from "../../Components/MessageToTech";
import QuestLayout from "../../Components/Layouts/QuestLayout"

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