import React, { useState, useEffect } from "react"
import "./cell.css"

const Cell = () => {

  const [status, setStatus] = useState(0)

  useEffect(() => {
    setStatus(1)
  },[])

  return (<div className="cell">
    </div>
    )
}

export default Cell