import {  useLoaderData } from "react-router-dom";
import ShowTestSettings from "../ShowTestSettings";
import Timer from "../Timer";


export default function TestLayout({ children, setSubmit, setTime }) {
  const loaderData = useLoaderData();
  const time = loaderData.generatedTest.time ?loaderData.generatedTest.time: '00:00:00' ;
  const timeArray = time.split(":");
  const miliseconds =
    (Number(timeArray[0]) * 60 * 60 +
      Number(timeArray[1]) * 60 +
      Number(timeArray[2])) *
    1000;

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row ">
      <div className=" flex flex-col md:justify-between bg-baltic md:w-60 md:py-16">
        <ShowTestSettings
          name={loaderData.test.name}
          egzam={loaderData.generatedTest.egzam}
          questionsNumber={loaderData.qas.length}
        />
        <div className="flex justify-center">
          <Timer start={loaderData.generatedTest.time!==null} time={miliseconds} setTime={setTime} setSubmit={setSubmit}/>
        </div>
        <button onClick={()=>setSubmit(true)} className="action-button bg-red-500">Przerwij test</button>
      </div>
      <div className="overflow-y-scroll w-full">{children}</div>
    </div>
  );
}
