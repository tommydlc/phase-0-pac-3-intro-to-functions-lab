function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase();
  }

function logShout(hello){
    console.log(hello.toUpperCase( ));
  }

function logWhisper(HELLO){
    console.log(HELLO.toLowerCase()); 
}

function sayHiToHeadphonedRoommate(string) {
  if(string.toLowerCase() === string) {
    return "I can't hear you!"
  } if(string.toUpperCase() === string) {
    return "YES INDEED!";
  } if (string === "Let's have dinner together!"){
    return "I would love to!";
  }
  
}
