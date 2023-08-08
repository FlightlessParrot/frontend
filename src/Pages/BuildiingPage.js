import QuestLayout from "../Components/Layouts/QuestLayout";
import { TestUserLayout } from "../Components/Layouts/UserLayout";
import Title from "../Components/Title";

export default function BuildiingPage() {
  return (
    <div>
    <TestUserLayout>
    <Title title='Strona w budowie' />
    <div className="text-8xl h-40 object-fit text-center">&#9874;</div></TestUserLayout>
    </div>
  )
}