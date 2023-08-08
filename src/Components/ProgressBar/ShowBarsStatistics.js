import LabeledProgressBar from "./LabeledProgressBar";

export default function ShowBarsStatistics({element}) {
    const array=[];
    for(const [date, value] of element)
    {
        array.push(<LabeledProgressBar label={'Test z dnia '+date} width={value} key={date} />)
    }
  return (
    <div className="my-10 max-w-4xl">
      {array}
    </div>
  )
}