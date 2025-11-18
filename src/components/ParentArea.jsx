import React, { useState } from 'react'
import TextArea from './TextArea'
import LangPronArea from './LangPronArea'

const ParentArea = () => {
  const [text, setText] = useState("")


  return (
    <div>
        <TextArea onGenerate={setText} />
        <LangPronArea generatedText={text} />
    </div>
  )
}

export default ParentArea