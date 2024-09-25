import "/home/myk/Desktop/Polish-Learning/src/CSS/VoiceButton.css";

const VoiceButton = ({ text }) => {
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pl-PL";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button className="voice-button" onClick={handleSpeak}>
      Hear Pronunciation
    </button>
  );
};

export default VoiceButton;
