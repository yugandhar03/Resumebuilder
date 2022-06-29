import React, { useState } from 'react'
import Language from "./Language"
import Intenship from "./Instenship"
import RichTextEditor from './RichText'

function Custom() {

    const [value, setValue] = useState("");
    const getValue = (value) => {
        setValue(value);
    };
    return (
        <>
            <Language />
            <Intenship />
            <RichTextEditor initialValue="" getValue={getValue} />
        </>
    )
}

export default Custom