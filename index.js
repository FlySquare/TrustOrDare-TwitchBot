const tmi = require("tmi.js");

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
    return Math.floor(Math.random() * Math.floor(3));
    

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
    client.action(chnl,random());
});

   client.on('chat', (channel, user, message, self) => {
    if(message === "!facebook" || message === "!fb"){
        client.action(chnl,'=> Facebook grubumuza katılarak her ortamdan bizden haberdar olabilirsin. https://www.facebook.com/ksinctwitchgrubu/');
    }
});