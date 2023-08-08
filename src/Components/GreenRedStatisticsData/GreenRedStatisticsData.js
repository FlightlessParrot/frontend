export default function GreenRedStatisticsData({data}) {
    const jsx=data.map(
        (e)=><div className="flex w-fit gap-6" key={e.date}>
            <span>{e.date}</span><span style={{color:e.answer===1 ? 'green':'red'}}>Udzielono {e.answer===1? 'poprawnej':'błędnej'} odpowiedzi</span>
        </div>
    )
  return <>
  {jsx}
  </>
}