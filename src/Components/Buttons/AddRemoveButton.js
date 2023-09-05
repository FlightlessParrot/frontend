
import CircleButton from "./CircleButton";

export default function AddRemoveButton({minusFn, plusFn}) {
  return (
    <div className="flex items-center gap-6"><CircleButton onClick={minusFn}>-</CircleButton><CircleButton onClick={plusFn}>+</CircleButton></div>
  )
}