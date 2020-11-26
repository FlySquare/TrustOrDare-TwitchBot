const tmi = require("tmi.js");
var db;
var x1;
var x2;
var x3;
var x4;
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;

const options = {
    options: {
      debug: true
    },
    connection: {
        cluster: 'aws',
      reconnect: true
    },
    identity: {
      username: "kel_bot",
      password: "oauth:s1ctua6ggq3bvlprav9mnns61uxqv3"
    },
    channels: ['flysquaree'],
  };

  function startMessage(){
    client.action(chnl,'Hadi beraber oyun oynayalım PogChamp');
  }
  function askQuestion(){
    client.action(chnl,'Doğruluk mu Cesaret miiiii???? Kappa ');
}
function random(){
   db =  Math.floor(Math.random() * Math.floor(999));
    if(db >= 499){
        client.action(chnl,'DOĞRULUUUUUK!!');
        setTimeout(questions,3000);
    }
    else
    {
        client.action(chnl,'CESAAAAAAAREEEET!!');
        setTimeout(questions,3000);
    }
    
}
function questions(){
  if(db >=499){
    x1="A- Telefonunda en son aradığın şey neydi?";
    x2="B- Yerden bir şeyi alıp hiç yedin mi?";
    x3="C- Bir gün karşı cins olarak uyanırsan, ilk yapacağın şey nedir?";
    x4="D- Hiç havuzda işedin mi?";
    client.action(chnl,x1);
    client.action(chnl,x2);
    client.action(chnl,x3);
    client.action(chnl,x4);
  }else{
      //
  }
    
}
  // Edit channel name
  var chnl = "flysquaree";
  // Edit channel name
  const client = new tmi.client(options);
  client.connect();
  //bağlanma mesajı
client.on('connected', function (address, port) {
    startMessage();
    setTimeout(askQuestion, 3000);
    setTimeout(random,6000);
   
});
   client.on('chat', (channel, user, message, self) => {
    var isBroadcaster = channel.replace('#', '') == user.username;
    console.log(isBroadcaster);
    if(message === "!sec A" || message === "!sec a"){
        p1 = p1 + 1;
        console.log(p1);
    }else if(message === "!sec B" || message === "!sec b"){
        p2 = p2 + 1;
        console.log(p2);
    }else if(message === "!sec C" || message === "!sec c"){
        p3 = p3 + 1;
        console.log(p3);
    }else if(message === "!sec D" || message === "!sec d"){
        p4 = p4 + 1;
        console.log(p4);
    }
});