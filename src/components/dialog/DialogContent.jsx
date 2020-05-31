import React from 'react';
import ReactDOM from 'react-dom';
import ReactFocusTrap from 'focus-trap-react';

const DialogContent = ({ children, onClose, style }) => {
    return ReactDOM.createPortal(<ReactFocusTrap focusTrapOptions={{ onDeactivate: onClose }}>
        <div id="dialogPlaceholder" className={style.position}>
            <div className={`overlay ${style.overlayBgColor}`} onClick={onClose}></div>

            <div role="dialog" className={`dialog-content ${style.size} ${style.contentBgColor} ${style.transition}`}>
                <div role="document">
                    {children}
                </div>
            </div>
        </div>
    </ReactFocusTrap>
        ,
        document.body
    );
}


export default DialogContent
