import React from "react"
import { Trainings } from "@/utils/constants"
import VelImage from "../layout/utils/VelImage"

export default function TrainingMain (){
    return(
      <div className="bg-white pb-24">
        <div className="-mt-16 pt-32 pb-12 bg-velt-dark">
          <span className="block text-xl md:text-2xl font-bold text-white text-center">
            {Trainings.herotext}
          </span>
        </div>
        <div className="flex flex-wrap cont  mt-20">
          <div className="w-full lg:w-6/12 lg:pr-6 mb-12 lg:mb-0">
            <div className="px-2 py-4 rounded-lg bg-velt-offwhite text-sm sm:text-base">
              <p>{Trainings.text10}</p>
              <p className="mt-3">{Trainings.text11}</p>
            </div>
          </div>
          <div className="w-full lg:w-6/12 lg:pl-6">
            <div className="px-2 py-4 rounded-lg bg-velt-offwhite text-sm sm:text-base">
              <p>{Trainings.text20}</p>
              <p className="mt-3">{Trainings.text21}</p>
              <p className="mt-3">{Trainings.text22}</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="section-header text-center capitalize">Some highlights from our last AML training</h1>
          <div className="mt-6 flex">
            {Trainings.mockImg.map((item,key)=>{
              return(
                <div className="rounded-md hover:scale-[105%] transition-all duration-300 overflow-hidden w-3/12 px-1 sm:px-2" key={key}>
                    <VelImage className="w-full h-auto" src={item}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
}