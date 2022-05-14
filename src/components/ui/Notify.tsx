import React, { useState } from "react";
import cl from "../../styles/Notify.module.css"

const Notify = (message: any) => {
  const [ msg, setMsg ] = useState(null);

  return(
    <div className={[cl.notification, cl.active].join(" ")}>
      <div className={cl.title}>
        Attention!
      </div>
      <div className={cl.message}>
        { message }
      </div>
    </div>
  )
}

export default Notify;
