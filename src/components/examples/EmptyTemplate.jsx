import React, { useState } from 'react';

import Dialog from '../dialog/Dialog';

const EmptyTemplate = () => {

    //aria-hidden attribute to assist accessibility
    const [isAriaHidden, setIsAriaHidden] = useState(false);
    let ariaHiddenAttr = { 'aria-hidden': 'true' };

    const dialogContent = (
        <div>
            {/* create/edit dialog content */}
        </div>
    )

    const dialogProps = {
        style: {
            size: '', //options: size-sm, size-md, size-lg, size-xl 
            position: '', //options: position-top, position-center
            transition: '', //options: tilt-in-top, swing-in-top-fwd, fade-in, scale-in-top  
            overlayBgColor: '', //options: dark-overlay, light-overlay
            contentBgColor: '' //options: dark-bc, light-bc, white-bc, light-blue-bc, dark-blue-bc, red-bc, orange-bc, yellow-bc, green-bc
        },
        button: {
            text: '',
            bgColor: '', //options: dark-bc, light-bc, white-bc, light-blue-bc, dark-blue-bc, red-bc, orange-bc, yellow-bc, green-bc
            textColor: '', //options: dark-text, light-text, white-text, light-blue-text, dark-blue-text, red-text, orange-text, yellow-text, green-text
            fontSize: '', //fs12 , fs14, fs16, fs18, fs20, fs22, fs24, fs26, fs28, fs30
            customClass: '' //add your own style
        },
        setIsAriaHidden
    }


    return (
        <div id="sectionContent" {...isAriaHidden ? { ...ariaHiddenAttr } : ''}>
            <Dialog {...dialogProps}>{dialogContent}</Dialog>
        </div>
    )

}
export default EmptyTemplate

