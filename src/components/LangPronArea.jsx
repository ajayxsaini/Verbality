import React from 'react'



const LangPronArea = ( {generatedText} ) => {
  return (
    <div>
         <div className="w-full">
          <textarea
            value={generatedText}
            name="name"
            id="name"
            placeholder=""
            className="w-full h-40 p-3 border-2 border-gray-400 rounded-lg resize-none focus:outline-none focus:border-gray-600"
          ></textarea>
        </div>
    </div>
  )
}

export default LangPronArea