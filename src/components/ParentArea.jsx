import React, { useState } from 'react'
import TextArea from './TextArea'
import LangPronArea from './LangPronArea'
import PdfHandleUpload from './PdfHandleUpload'
import DialogPicture from './DialogPicture'

const ParentArea = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");        // live input
  const [speakText, setSpeakText] = useState(""); // only spoken when Generate clicked

  return (
    <div>
      <DialogPicture show = {show}/>
      <TextArea 
        text={text}
        setText={setText}
        onGenerate={() => setSpeakText(text)} 
        show = {show}  //
        setShow = {setShow}
      />

      <LangPronArea generatedText={speakText} />  
      <PdfHandleUpload onSelectedText={setText} />
    </div>
  )
}

export default ParentArea
