export default function DiscountPrice({children}) {
  return (
    <div className=" absolute hover:scale-110  right-0 top-2 rotate-12 shadow-black shadow-lg skew-y-3 transition-all"><div className="rotate-45 w-0 h-0 border-x-8 border-b-8 border-transparent border-b-gray-100   absolute top-1 left-[-10px] transition-all"> </div><div className="relative right-15 h-10  bg-gray-100 rounded-sm text-red-500 bold-serif flex items-center justify-center p-2 ">{children} zł</div>
 </div> )
}