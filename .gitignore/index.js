const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&");

bot.on('ready', function() {
  bot.user.setGame("&help | Dev By NeYziX");
  console.log("le bot a démarré"); 
  bot.channels.get('434402884516446230').send("**=======================**");
  bot.channels.get('434402884516446230').send("| LE BOT VIENT DE SE LANCER |");
  bot.channels.get('434402884516446230').send("**=======================**");
});

bot.login("NDMzNjYzMDIzMTczOTkyNDUy.DbInWQ.1V9wiMUxMroHa-wXc4uDoBpAd-8")

bot.on('message', message => {
    if(message.content[0] === prefix) {
        let spliteMessage = message.content.split(' ');
        if(spliteMessage[0] === "&hello") {
            message.channel.send("world!");
            message.author.createDM().then(channel => {
                channel.send('WORLD!');
            }).catch(console.error);
        bot.channels.get('434402884516446230').send("Commande §hello utilisée par : " + message.author.username);
        }
      
        else if(spliteMessage[0] === "&help") {
            message.channel.send("Liste des commandes envoyées en privée.");
            message.author.createDM().then(channel => {
                channel.send('**⇩ Liste des commandes ⇩: \n \n &help, pour afficher la liste les commandes \n \n &info, pour afficher les informations du Discord \n \n &ping, pour afficher la latence du bot \n \n &socialmedia | &sm, pour afficher les réseaux sociaux de PastelWorld \n \n &site, pour afficher le site de xRainbow \n \n _© NeYziX | Tous droits réservés_**');
            }).catch(console.error);
        bot.channels.get('434402884516446230').send("Commande &help utilisée par : " + message.author.username);
        } 
        
        else if(spliteMessage[0] === "@everyone") {
            message.delete();
            }).catch(console.error);
        bot.channels.get('434402884516446230').send("Mention everyone par : " + message.author.username);
        } 
        
    }
});

bot.on('message', message => {
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "MS");  
    }
});      

bot.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord :")
        .addField("Nom du Discord :", message.guild.name)        
        .addField("Crée le :", "31/03/18 23:35:53")
        .addField("Crée par :", "ÑęÝżíX 👑#4255")
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .addField("ID :", "429755740589391873")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "site") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour visiter le site du créateur :")
        .addField("Lien :", "http://xrainbow.000webhostapp.com")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "sm") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de xRainbow :")
        .addField("Instagram :", "...") 
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "socialmedia") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de PastelWorld :")
        .addField("Instagram :", "...")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "☺")
        bot.channels.get('434402884516446230').send("EZ");
  
    bot.channels.get('434402884516446230').send("Réaction utilisée : " + reaction.emoji.name);
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "arrivé-départ").send(`${member} vient d'arrivé sur **xRainbow**! ;)`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "arrivé-départ").send(`${member} a quitté **xRainbow**. Nous te souhaitons une bonne continuation...`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Membres 🌟');
    member.addRole(role)
})
