import Infographics from "../../Components/Infographics";
import QuestLayout from "../../Components/Layouts/QuestLayout";
import RoboMan from "../../Components/RoboMan";
import { welcomeArticle } from "../../Data/articleData";
import { infographicsData } from "../../Data/infographicsData";
import Article from "../../Components/Article";

export default function Welcome()
{

    return(
        <QuestLayout>
       
        <Infographics infographicsData={infographicsData}/>
        <Article text={welcomeArticle} givenClasses='w-4/5' />
        <RoboMan />
        </QuestLayout>
    );
}