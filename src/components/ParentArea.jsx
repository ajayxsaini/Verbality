import React, { useState } from 'react'
import TextArea from './TextArea'
import LangPronArea from './LangPronArea'
import PdfHandleUpload from './PdfHandleUpload'
import DialogPicture from './DialogPicture'

const ParentArea = () => {
  
  const [text, setText] = useState("");        // live input
  const [speakText, setSpeakText] = useState(""); // only spoken when Generate clicked
  const [show, setShow] = useState(false);

  return (
    <div>
      <DialogPicture show = {show}/>
      <TextArea 
        text={text}
        setText={setText}
        onGenerate={() => setSpeakText(text)} 
        
      />
      <LangPronArea generatedText={speakText} setShow = {setShow} />  
      <PdfHandleUpload onSelectedText={setText} />
    </div>
  )
}

export default ParentArea
