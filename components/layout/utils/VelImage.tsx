import React from 'react'
import Image,{StaticImageData} from "next/image"

interface veltImage{
  src:StaticImageData
  piority?:boolean
  className?:string

}
export default function VelImage({className="",piority=false,src}:veltImage) {
  return (
    <Image src={src} alt='' className={className?className:"h-full w-full"} priority={piority} />
  )
}
