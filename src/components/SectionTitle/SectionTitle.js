import React from "react"

const SectionTitle = ({ children }) => {
  return (
    <div className="section-title bg-primaryColor p-2 mb-5 arrow-down relative">
      <h3 className="text-white text-center font-medium uppercase tracking-wider">
        {children}
      </h3>
    </div>
  )
}

export default SectionTitle
