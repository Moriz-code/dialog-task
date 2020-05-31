import React from 'react';

const DialogTrigger = ({ onOpen, button }) => {
    return (
        <button className={`dialog-btn  ${button.textColor} ${button.fontSize} ${button.bgColor} ${button.customClass}`} onClick={onOpen}>{button.text}</button>
    )
}

export default DialogTrigger
