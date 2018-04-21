const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&");

var eightball = [
    "Oui!",
    "Non...",
    "Peut-être?",
    "Surement ^^",
]

bot.on('ready', function() {
  bot.user.setGame("&help | Dev By NeYziX");
  console.log("le bot a démarré"); 
  bot.channels.get('434402884516446230').send("**=======================**");
  bot.channels.get('434402884516446230').send("| LE BOT VIENT DE SE LANCER |");
  bot.channels.get('434402884516446230').send("**=======================**");
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
  if (message.content.startsWith(prefix + "avatar")) {

message.channel.send({embed: {

    title: "Votre avatar :Hihi:",

    image: {

        url: message.author.avatarURL

    },

    color: 15722240

}

    })

}
});

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
                channel.send('**⇩ Liste des commandes ⇩: \n \n &help, pour afficher la liste les commandes \n \n &info, pour afficher les informations du Discord \n \n &ping, pour afficher la latence du bot \n \n &socialmedia | &sm, pour afficher les réseaux sociaux de PastelWorld \n \n &site, pour afficher le site de xRainbow \n \n &question | &q, pour poser une question à xRainbow avec une réponse Oui ou Non \n \n _© NeYziX | Tous droits réservés_**');
            }).catch(console.error);
        bot.channels.get('434402884516446230').send("Commande &help utilisée par : " + message.author.username);
        }  
    }
});  

bot.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord :")
        .addField("Nom du Discord :", message.guild.name)        
        .addField("Crée le :", "31/03/18 23:35:53")
        .addField("Crée par :", "NeYziX 👑#4255")
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .addField("ID :", "429755740589391873")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0xFFFF00")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "site") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour visiter le site du créateur :")
        .addField("Lien :", "http://xrainbow.000webhostapp.com")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0xFFFF00")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "sm") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de xRainbow :")
        .addField("Instagram :", "...") 
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0xFFFF00")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "socialmedia") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de PastelWorld :")
        .addField("Instagram :", "...")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0xFFFF00")
    message.channel.sendEmbed(embed)
    }
});

    const google = require("google");
    if(message.content === prefix + "google") {
   
    google.resultsPerPage = 25
    let object = args;
    google.protocol = 'https';
   
    const args2 = message.content.split(' ').slice(1).join(' ');
   
    if(!args2) {
            var embed = new Discord.RichEmbed()
                    .setTitle("ERROR!")
                    .setColor("RANDOM")
                    .setDescription("No term(s) was found for me to search!")
                    .setFooter("Powered By Google", "http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png")
                   
                    message.channel.send({embed : embed});
                        return;
        }
 
       
    google(object, function (err, res){
        if (err) console.error(err)
       
       
        var link = res.links[1];
        var link2 = res.links[2];
        var link3 = res.links[3];
        let test = `${link.title}\n${link.href}`;
        let test2 = `${link2.title}\n${link2.href}`;
        let test3 = `${link3.title}\n${link3.href}`;
       
        if(!link.title || link.title == undefined || link.title == null) {
            test = "Nothing Found, Sorry";
        }
       
        if(!link2.title || link2.title == undefined || link2.title == null) {
            test2 = "Nothing Found, Sorry";
        }
       
        if(!link3.title || link3.title == undefined || link3.title == null) {
            test3 = "Nothing Found, Sorry";
        }
       
        if(link.link == null) {
            test = "Nothing Found, Sorry";
        }
       
        if(link2.link == null) {
            test2 = "Nothing Found, Sorry";
        }
       
        if(link3.link == null) {
            test3 = "Nothing Found, Sorry";
        }
                var blacklisted = ["porn", "sex", "gay porn", "pussy", "dick", "vagina", "penis", "incest", "loli", "lesbian porn", "pornhub", "xxvideos", "xrated", "exclipt", "x-rated", "moan", "masturbat", "condom", "dildo", "fingering", "tribbing", "oraljob", "blowjob", "anal", "fuck", "hentai", "rule34", "r34", "shit", "sh1t", "knobend", "knob end", "cock", "blow job", "boob", "cunt", "labia", "nigger", "nigga", "twat", "whore"]
        if (blacklisted.some(word => args2.toLowerCase().includes(word) && !message.channel.nsfw)) {
            message.delete()
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("This was sent into your DM's cause it included a blacklisted word, if you searched up something that doesn't seem like it should be blacklisted and does NOT include any blacklisted words, Ex. `Analysis` includes `Anal`, please let us know")
            .setAuthor("Search Results", `http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png`)
            .addField("Result 1", test)
            .addField("Result 2", test2)
            .addField("Result 3", test3)
            .setTimestamp()
            .setThumbnail('https://cdn3.iconfinder.com/data/icons/picons-social/57/09-google-128.png')
            message.author.send({embed});
           
            const embed2 = new Discord.RichEmbed()
            .setTitle(":warning: Google Command DANGER! :warning:")
            .setColor("#ff0000")
            .setTimestamp()
            .addField(":eyes: Someone used the Google Command to search up something bad! :eyes:", "Hopefully this was a mis-understanding!")
            .addField(":mag: What they searched up :mag:", `***__${args2}__***`)
            .addField(":man: Message Author :woman:", `***__${message.author.tag}__***`)
            .addField(":id: User ID :id:", `***__${message.author.id}__***`)
            .addField("👥 Guild They sent it In 👥", `***__${message.guild.name}__***`)
            .addField(":prince: Guild Owner :princess:", `***__${message.guild.owner.user.tag}__***`)
            .addField("If they did this too many times... idk")
            bot.channels.get("417738034591694848").send({embed2})
            return;
        }
       
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("Search Results", `http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png`)
            .addField("Result 1", test)
            .addField("Result 2", test2)
            .addField("Result 3", test3)
            .setTimestamp()
            .setThumbnail('https://cdn3.iconfinder.com/data/icons/picons-social/57/09-google-128.png')
            message.channel.send({embed})
           
            const embed2 = new Discord.RichEmbed()
            .setTitle("Google Command")
            .setColor("RANDOM")
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL)
            .addField(":eyes: Someone used the Google Command! :eyes:", "Sending this just to make sure they didnt bypass the filter!")
            .addField(":mag: What they searched up :mag:", `***__${args2}__***`)
            .addField(":man: Message Author :woman:", `***__${message.author.tag}__***`)
            .addField(":id: User ID :id:", `***__${message.author.id}__***`)
            .addField("👥 Guild They sent it In 👥", `***__${message.guild.name}__***`)
            .addField(":prince: Guild Owner :princess:", `***__${message.guild.owner.user.tag}__***`)
            bot.channels.get("417738034591694848").send({embed2})
    })
}

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
