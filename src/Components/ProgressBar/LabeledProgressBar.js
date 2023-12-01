import ProgressBar from "./ProgressBar";

export default function LabeledProgressBar({label, width}) {
  return (
    <div>
        <b className="bold-sans-serif">{label}</b>
        <ProgressBar width={width} />
    </div>
  )
}