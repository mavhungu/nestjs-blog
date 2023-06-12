const postAudioOptions = {
  method: 'POST',
  url: 'https://large-text-to-speech.p.rapidapi.com/tts',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com'
  },
  data: {
    text: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.'
  }
};

const getAudioOptions = {
  method: 'GET',
  url: 'https://large-text-to-speech.p.rapidapi.com/tts',
  params: {
    id: 'bd7dac40-f7b8-4425-87dd-562c0e02d37c'
  },
  headers: {
    'X-RapidAPI-Key': 'process.env.RAPID_API_KEY',
    'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com'
  }
};

const SpeechOptions = {
  method: 'GET',
  url: 'https://text-to-speech27.p.rapidapi.com/speech',
  params: {
    text: 'hello world',
    lang: 'en-us'
  },
  headers: {
    'X-RapidAPI-Key': 'd4d92c2624msh981e611113adacdp1e59ebjsna2757b43e546',
    'X-RapidAPI-Host': 'text-to-speech27.p.rapidapi.com'
  }
};

export { getAudioOptions, postAudioOptions, SpeechOptions }