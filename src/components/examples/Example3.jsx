import React, { useState } from 'react';

import Dialog from '../dialog/Dialog';

const Example3 = () => {

    const [isAriaHidden, setIsAriaHidden] = useState(false);
    let ariaHiddenAttr = { 'aria-hidden': 'true' };

    const dialogContent = (
        //create or edit dialog content
        <div className="example-content">
            <span>Hey, I'm example 3, here are my dialog classes: </span>
            <ul>
                <li>size: 'size-md'</li>
                <li>position: 'position-center'</li>
                <li>transition: 'scale-in-top'</li>
                <li>overlayBgColor: 'light-overlay'</li>
                <li>contentBgColor: 'light-blue-bc'</li>
            </ul>
            <button>First Interactive element</button>
            <button>Second Interactive element</button>
        </div>
    )



    const dialogProps = {
        style: {
            size: 'size-lg', //options: size-sm, size-md, size-lg, size-xl 
            position: 'position-center', //options: position-top, position-center
            transition: 'swing-in-top-fwd', //options: tilt-in-top, swing-in-top-fwd, fade-in, scale-in-top  
            overlayBgColor: 'dark-overlay', //options: dark-overlay, light-overlay
            contentBgColor: 'yellow-bc' //options: dark-bc, light-bc, white-bc, light-blue-bc, dark-blue-bc, red-bc, orange-bc, yellow-bc, green-bc
        },
        button: {
            text: 'Open Dialog',
            bgColor: 'yellow-bc', //options: dark-bc, light-bc, white-bc, light-blue-bc, dark-blue-bc, red-bc, orange-bc, yellow-bc, green-bc
            textColor: 'dark-blue-text', //options: dark-text, light-text, white-text, light-blue-text, dark-blue-text, red-text, orange-text, yellow-text, green-text
            fontSize: 'fs18', //fs12 , fs14, fs16, fs18, fs20, fs22, fs24, fs26, fs28, fs30
            customClass: '' //add your own style
        },
        //function to set aria-hidden attribute
        setIsAriaHidden
    }


    return (
        <div id="sectionContent" className="content" {...isAriaHidden ? { ...ariaHiddenAttr } : ''}>
            <h3>Example 3</h3>
            <span>My button classes:</span>
            <ul>
                <li>text: 'Open Dialog'</li>
                <li>bgColor: 'yellow-bc'</li>
                <li>textColor: 'dark-blue-text'</li>
                <li>fontSize: 'fs18'</li>
            </ul>
            <Dialog {...dialogProps}>{dialogContent}</Dialog>

        </div>
    )

}
export default Example3

