import React from 'react'

export default function IconImage({path, children}) {
  return (
    <div className="relative top-0 rounded-lg border border-c_gray w-[200px] h-[200px] overflow-clip">
    <img src={path} alt='' className="object-cover w-full h-full"  />
    {children}
</div>
  )
}
