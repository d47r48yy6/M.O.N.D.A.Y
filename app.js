const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Bro");
    }

    else if(hr == 12) {
        speak("Good noon Bro");
    }

    else if(hr > 12 && hr <= 15) {
        speak("Good Afternoon Bro");
    }

    else {
        speak("Good Evening Bro");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Monday");
    speak("Initializing myself as Setting up all preferences from the System interface and now you are good to go.");
    speak("You are working on good machine");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Ayush";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine bro tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('describe yourself')) {
        const finalText = "Hi my name is  monday , and i have been devloped by programmer and i am an a.i ";
        speech.text = finalText;
    }

    else if(message.includes('Niddhi')) {
        const finalText = "Hello Niddhi , i know many things about you ";
        speech.text = finalText;
    }
    

    else if(message.includes('name')) {
        const finalText = "My name is monday ";
        speech.text = finalText;
    }

    else if(message.includes('lover')) {
        const finalText = " i only love girlfriend alexa ";
        speech.text = finalText;
    }



    else if (message.includes('devloped')){
        const finalText="i am devloped by ayush ";
        speech.text=finalText;
    }
    else if (message.includes('what is your iq')){
        const finalText="more than yours but let me tell u mine is 155 ";
        speech.text=finalText;
    }
    else if(message.includes('open youtube')) {
        window.open("https://www.youtube.com/", "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }
    else if(message.includes('Anshika')) {
        const finalText = "Hi Anshika i know many things about you  ";
        speech.text = finalText;
    }

    else if(message.includes('i am feeling low')) {
        window.open("https://www.youtube.com/watch?v=SX4tQo6Z4o0", "_blank");
        const finalText = "Bro you need to Chill i am with you ";
        speech.text = finalText;
    }

    else if(message.includes('check my internet speed')) 
     {
        window.open("https://www.speedtest.net/", "_blank");
        const finalText = "check your Internet speed from okla ";
        speech.text = finalText;
    }
    else if(message.includes('check internet speed')) 
    {
       window.open("https://www.speedtest.net/", "_blank");
       const finalText = "check your Internet speed from okla ";
       speech.text = finalText;
   }
   
    

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }


    else if(message.includes('bro favourite')) {
        window.open("https://www.youtube.com/watch?v=Y8ETNh_IQjs", "_blank");
        const finalText = "yess boss";
        speech.text = finalText;
    }
    

   

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    

   

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    

    window.speechSynthesis.speak(speech);
}