const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("&");

bot.on('ready', function() {
  bot.user.setGame("&help | Dev By NeYziX");
  console.log("le bot a démarré"); 
});

bot.login("NDMzNjYzMDIzMTczOTkyNDUy.DbInWQ.1V9wiMUxMroHa-wXc4uDoBpAd-8")

bot.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord :")
        .addField("Nom du Discord :", message.guild.name)        
        .addField("Crée le :", message.guild.createdAt)
        .addField("Crée par :", message.server.owner_id)
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
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

    if (message.content === prefix + "help") {
        var embed = new Discord.RichEmbed()
        .setDescription("⇩Liste des commandes⇩:")
        .addField("&help", "Pour afficher la liste les commandes")
        .addField("&info", "Pour afficher les informations du Discord")
        .addField("&site", "Pour afficher le site de xRainbow")
        .setFooter("©NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "arrivé-départ").send(`${member} est arrivé sur xRainbow;)`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "arrivé-départ").send(`${member} a quitté xRainbow.`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Membres 🌟');
    member.addRole(role)
})
