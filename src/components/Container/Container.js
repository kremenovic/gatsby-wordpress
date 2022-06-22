import React from "react"
import Sidebar from "../Sidebar/Sidebar"

const Container = ({ children }) => {
  return (
    <div className="container max-w-full bg-white">
      <div className="container max-w-7xl  text-white mx-auto py-5 px-5 lg:px-23">
        <div className=" grid grid-cols-3 gap-x-10 lg:grid-cols-2">
          <div className="col-span-2 ... lg:col-span-3 ...">{children}</div>
          <div className="... lg:col-span-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
