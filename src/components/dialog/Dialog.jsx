import React, { useState } from 'react';

import UtilService from '../../services/UtilService';

import DialogTrigger from './DialogTrigger';
import DialogContent from './DialogContent';


const Dialog = ({ children, button, setIsAriaHidden, style }) => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleDialog = () => {
        setIsDialogOpen(!isDialogOpen);
        setIsAriaHidden(!isDialogOpen);
        UtilService.setBodyClass('lock-scroll', !isDialogOpen);
    }

    return (<>
        <DialogTrigger onOpen={toggleDialog} button={button}></DialogTrigger>
        {isDialogOpen &&
            <DialogContent style={style} onClose={toggleDialog} children={children} />
        }
    </>)
}
export default Dialog