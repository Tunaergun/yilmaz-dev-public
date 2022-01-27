const Discord = require('discord.js')
const ms = require('ms')
const ayarlar = require("../ayarlar.json");
var sn = ayarlar.sunucuismi;
    exports.run = (client, message, args) => {
        // Yetkin yok
        if(!message.member.roles.cache.has("900831303413420203")){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Bu Kodu Kullana Bilmek İçin Gereli Yetkilere Sahip Değilsin.**`)
            .setColor('#ff0000')
            return message.channel.send(cmfhata)
        }

        // Let tanımları
        let kullanıcı = message.mentions.members.first();
        let sure = args[1];
        let sebep = args.slice(2).join(' ')

        // Hata mesajları
        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Kullanıcı Etiketle.**`)
            .setColor('#ff0000')
            return message.channel.send(cmfhata)
        }
        if(!kullanıcı.voice.channel){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Etiketlediğin Kullanıcı Ses Kanalında Değil.**`)
            .setColor('#ff0000')
            return message.channel.send(cmfhata)
        }
        if(!sure){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Süre Gir.**`)
            .setColor('#ff0000')
            return message.channel.send(cmfhata)
        }
        if(!sebep){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Kullanıcıyı Seste Susturacağım Fakat Sebep Girmelisin.**`)
            .setColor('#ff0000')
            return message.channel.send(cmfhata)
        }

        //  Süreli Mute.
        if(kullanıcı && sure && sebep){
            const cmfmute = new Discord.MessageEmbed()
            .setDescription(`
                ${kullanıcı}(\`${kullanıcı.id}\`) Kişisi ${message.author} Tarafından Seste Mutelendi. \n **${sebep}** Sebebiyle **${sure.replace(/s/, ' Saniye').replace(/m/, ' Dakika').replace(/h/, ' Saat').replace(/d/, ' Gün')}** Boyunca.
            `)
            .setColor('BLACK')
            message.channel.send(cmfmute)

            // Burda Mute Atacak
            kullanıcı.voice.setMute(true)

            // Verdiğimiz Süre Doluncada Mute Kalkacak
            setTimeout(() => {
                kullanıcı.voice.setMute(false)

                const cmfmute2 = new Discord.MessageEmbed()
                .setDescription(`${kullanıcı}(\`${kullanıcı.id}\`) Adlı Kullanıcının Ses Mute Süresi Doldu.`)
                .setColor('#00ff00')
                return message.channel.send(cmfmute2)

            }, ms(sure))
        }
    } 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Ses mute','ses-mute','SES MUTE','Ses-mute','SES-MUTE','smute'],
    permLevel: 3,
    kategori:"Moderasyon"
}

exports.help = {
    name: 'mute'
}