import React, { useEffect } from 'react'



const LangPronArea = ( {generatedText} ) => {

useEffect(() => {
    if (!generatedText) return;

    const utterance = new SpeechSynthesisUtterance(generatedText);
    utterance.lang = "hi-IN";   // Speak in Hindi
    utterance.rate = .6;
    utterance.pitch = 1;

    // Load voices (Chrome fix)
    speechSynthesis.onvoiceschanged = () => {
      const voices = speechSynthesis.getVoices();
      const hindiVoice = voices.find(v => v.lang === "hi-IN");
      if (hindiVoice) utterance.voice = hindiVoice;
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    };

    // In case voices were already loaded
    const voices = speechSynthesis.getVoices();
    const hindiVoice = voices.find(v => v.lang === "hi-IN");
    if (hindiVoice) utterance.voice = hindiVoice;

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);

  }, [generatedText]);


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