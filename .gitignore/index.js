const Discord = require('discord.js');

var bot = new Discord.Client();

// Variables \\

var embedcolor = "#011889"


// Commande de secour : \\

bot.on('ready', () => {
    console.log("_________________________________________________________________________________");
    console.log("Le bot est prêt à être développer et recevoir 20 000 erreurs ....");
    console.log("_________________________________________________________________________________");
    bot.user.setActivity('faire "/crash" si problème (HeroptyaBot) !')
    bot.user.setAvatar('https://lh3.googleusercontent.com/4Q8zP3Gi3C0c0ph-aBVpJwmTuWmlASKCN8JE_fVckze3mIk_tK4D8D_EbXGkYrqWW8jp=s114')
    bot.user.setUsername("CrashBot")
    setTimeout(function() {
        bot.user.setStatus('idle')
    }, 5000)
});
bot.login(process.inv.TOKEN);


bot.on('message', message => {
    if (message.content === '/crash') {
        message.delete()
        message.channel.send('***Merci de votre rapprt ! Le bot redémarrera dans quelques secondes ! ( Ne pas spam la commande )***')
        bot.channels.get('440887022769668096').send('***@everyone Rapport de ' + message.author.username + " pour un crash !***")
    } else {

    }
});

bot.on('message', message => {
    if (message.content === "/stop")
    if (message.author.id === "304327970460270592") { 
        message.delete()
        message.channel.send('***Il vous est demandé de ne plus spam la commane /crash ! 1 seul rapport suffira***')
    }
})
