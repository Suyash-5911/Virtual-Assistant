let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi.G8"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours
    if(hours>=0 && hours<12){
        speak("Good morning sir, how can i help you")

    }
    else if (hours>=12 && hours<16){
        speak("Good afternoon sir, how can i help you")
    }
    else{
        speak("Good Evening sir, how can i help you")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition() 
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText= transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display= "none"
    voice.style.display="block"
})

function takeCommand(message){
    voice.style.display="none"
    btn.style.display= "flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("Hello Suyash , how can i help you?")
    }
    else if(message.includes("what is your name")){
        speak("Hello, my name is Harsh, i am your virtual assistant and i am created by Suyash")

    }
    
    else if(message.includes("what is suyash mother name")){
        speak("suyash's mother name is saraswati")

    }
    else if(message.includes("what is suyash father name")){
        speak("suyash's mother name is Vijay")

    }
    else if(message.includes("what is suyash brother name")){
        speak("suyash's mother name is Sushant")

    }
    else if(message.includes("what is suyash doing")){
        speak("Suyash is studying computer engineering in second year")

    }
    else if(message.includes("who is the idol of suyash")){
        speak("suyash's idol is punjabi singer Sidhu Moosewala")

    }
    else if(message.includes("what all can you do")){
        speak("I can give you all information regarding any particular topic")

    }
    else if(message.includes("who you love the most ")){
        speak("I love my creator suyash")

    }
    else if(message.includes("Good morning Dhanali")){
        speak("Good morning dear what can i help you with")

    }
    else if(message.includes("Who is suyash best friend")){
        speak("Sushant is best friend of Suyash as they are the best brothers in the world. Whole world on one one side and suyash and sushant on other side.")
    }
    //Yet to add the live timing teller function
    
    
    
    
    else if (message.includes("open youtube")){
        speak("Opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes("open facebook")){
        speak("Opening Facebook")
        window.open("https://www.facebook.com/")

    }
    else if (message.includes("open google")){
        speak("Opening Google")
        window.open("https://www.google.com/")

    }
    else if(message.includes("open twitter")){
        speak("https://x.com/?lang=enhttps://x.com/?lang=en")
        window.open()
    }

    else if (message.includes("open instagram ")){
        speak("Opening instagram")
        window.open("https://www.instagram.com/")
    }
    else{
        speak(`This is what i found on internet regarding ${message.replace("Dhanali","")}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}