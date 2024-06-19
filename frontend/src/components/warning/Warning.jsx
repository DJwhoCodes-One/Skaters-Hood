import React, { useState } from 'react'
import './Warning.css'

const Warning = () => {
    const [close, setClose] = useState(false);
    return (
        <div className={`${close ? 'closeWarning' : 'warningContainer'}`}>
            <div className='warning'>
                <h4>"This is the prototype of the website, that was submitted to the client."</h4>
                <button onClick={() => setClose(true)}><i class="ri-close-line"></i></button>
            </div>
        </div>
    )
}

export default Warning
