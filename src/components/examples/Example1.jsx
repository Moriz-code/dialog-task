import React, { useState } from 'react';

import Dialog from '../dialog/Dialog';

const Example1 = () => {

    const [isAriaHidden, setIsAriaHidden] = useState(false);
    let ariaHiddenAttr = { 'aria-hidden': 'true' };

    const dialogContent = (
        //create or edit dialog content
        <div className="example-content">
            <span>Hey, I'm example 1, here are my dialog classes: </span>
            <ul>
                <li>size: 'size-sm'</li>
                <li>position: 'position-top'</li>
                <li>transition: 'fade-in'</li>
                <li>overlayBgColor: 'dark-overlay'</li>
                <li>contentBgColor: 'light-bc'</li>
            </ul>
            <button>First Interactive element</button>
            <button>Second Interactive element</button>
        </div>
    )



    const dialogProps = {
        style: {
            size: 'size-sm', //options: size-sm, size-md, size-lg, size-xl 
            position: 'position-top', //options: position-top, position-center
            transition: 'fade-in', //options: tilt-in-top, swing-in-top-fwd, fade-in, scale-in-top  
            overlayBgColor: 'dark-overlay', //options: dark-overlay, light-overlay
            contentBgColor: 'light-bc' //options: dark-bc, light-bc, white-bc, light-blue-bc, dark-blue-bc, red-bc, orange-bc, yellow-bc, green-bc
        },
        button: {
            text: 'Open Dialog',
            bgColor: 'dark-blue-bc', //options: dark-bc, light-bc, white-bc, light-blue-bc, dark-blue-bc, red-bc, orange-bc, yellow-bc, green-bc
            textColor: 'white-text', //options: dark-text, light-text, white-text, light-blue-text, dark-blue-text, red-text, orange-text, yellow-text, green-text
            fontSize: 'fs18', //fs12 , fs14, fs16, fs18, fs20, fs22, fs24, fs26, fs28, fs30
            customClass: '' //add your own style
        },

        //function to set aria-hidden attribute
        setIsAriaHidden
    }


    return (
        <div id="sectionContent" className="content" {...isAriaHidden ? { ...ariaHiddenAttr } : ''}>
            <h3>Example 1</h3>
            <span>My button classes:</span>
            <ul>
                <li>text: 'Open Dialog'</li>
                <li>bgColor: 'dark-blue-bc'</li>
                <li>textColor: 'white-text'</li>
                <li>fontSize: 'fs18'</li>
            </ul>
            <Dialog {...dialogProps}>{dialogContent}</Dialog>

        </div>
    )

}
export default Example1

