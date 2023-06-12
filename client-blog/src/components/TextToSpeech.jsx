import React,{ useState, useEffect } from 'react'
import axios from 'axios';

const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [websiteContent,setWebsiteContent] = useState('');
  
  useEffect(() => {
    const websiteUrl = 'http://localhost:3000';
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    axios.get(websiteUrl)
    .then((response)=>{
      setWebsiteContent(response.data);
    })
    .catch((error)=>{
      console.error('Error reading webiste content:', error);
    })

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay =()=>{
    const synth = window.speechSynthesis;
    if(isPaused){
      synth.resume();
    }
    synth.speak(utterance);
    setIsPaused(false);
    if(synth) {
      const utterance = new SpeechSynthesisUtterance(websiteContent);
      speechSynthesis.speak(utterance);
    }
  };

const handleStop =()=>{
  const synth = window.speechSynthesis;
  synth.cancel();
  setIsPaused(false);
};
const handlePause=()=>{
  const synth = window.speechSynthesis;
  synth.pause();
  setIsPaused(true);
}
  
  return (
    <div className="ml-2">
      <button onClick={()=>handlePlay} className="text-sm font-normal leading-[25px]">{isPaused ? "Resume" : "Play" }</button>
      <audio controls>
        <source src={`data:audio/mpeg;base64,${btoa(websiteContent)}`} type={"audio/mpeg"} />
      </audio>
    </div>
  )
}

export default TextToSpeech