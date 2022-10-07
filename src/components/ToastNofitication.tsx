import React from "react";

interface props {
   toast: string;
}

const ToastNotification = ({ toast }: props) => {
   return <div className="toast">{toast !== "" ? <div className="toast-notification">{toast}</div> : null}</div>;
};

export default ToastNotification;
