import React, { useEffect, useState } from 'react'



const LangPronArea = ( {generatedText} ) => {

const [rate, setRate] = useState(1); // default speed rate

useEffect(() => {
    if (!generatedText) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(generatedText);
    utterance.lang = "hi-IN";   // Speak in Hindi
    utterance.rate = rate;
    utterance.pitch = 1;


    // In case voices were already loaded
    const voices = speechSynthesis.getVoices();
    const hindiVoice = voices.find(v => v.lang === "hi-IN");
    if (hindiVoice) utterance.voice = hindiVoice;

    speechSynthesis.speak(utterance);


  }, [generatedText, rate]);  //the default speed rate will be here 


useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);



  return (
    <div>
         <div className="w-full">
          <textarea
            value={generatedText}
            readOnly
            name="name"
            id="name"
            placeholder=""
            className="w-full h-40 p-3 border-2 border-gray-400 rounded-lg resize-none focus:outline-none focus:border-gray-600"
          ></textarea>
        </div>

        <div className=' mt-10 border-zinc-500 bg-blue'>
        <label>Speed: {rate}</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
      </div>
    </div>
  )
}

export default LangPronArea