import React, { useState } from 'react'
import TextArea from './TextArea'
import LangPronArea from './LangPronArea'
import PdfHandleUpload from './PdfHandleUpload'

const ParentArea = () => {
  const [text, setText] = useState("")


  return (
    <div>
        <TextArea text={text} setText={setText} onGenerate={setText}/>

        <LangPronArea generatedText={text} />
        <PdfHandleUpload onSelectedText={setText} />
    </div>
  )
}

export default ParentArea