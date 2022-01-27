const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json");
var sn = ayarlar.sunucuismi;
    exports.run = (client, message, args) => {
        // Yetki
        if(!message.member.roles.cache.has("900831303413420203")){
            const YılmazDev = new Discord.MessageEmbed()
            .setDescription(`Bu komudu kullanmak için gerekli yetkilere sahip olman gerek.`)
            .setColor('BLACK')

            return message.channel.send(YılmazDev)
        }

        // Let Tanımları
        let kullanıcı = message.guild.member(message.guild.members.cache.get(args[0])) || message.mentions.members.first();
        let sebep = args.slice(1).join(' ');
        let guild = message.guild;

        // Özel Zaman
        let zaman = new Date()
        let cmfzaman = zaman.getFullYear() + "." + (zaman.getMonth() +1) + "." + zaman.getDate() + " (\`" + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds() + "\`)";

        if(!kullanıcı){
            const YılmazDev = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Kullanıcı Belirt**`)
            .setColor('BLACK')

            return message.channel.send(YılmazDev)
        } else if(isNaN(kullanıcı)){
            const YılmazDev = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Geçerli Kullanıcı Belirt**`)
            .setColor('BLACK')

            return message.channel.send(YılmazDev )
        }
        if(!sebep){
            const YılmazDev = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Sebep Belirt**`)
            .setColor('BLACK')

            return message.channel.send(YılmazDev )
        }

        if(kullanıcı && sebep){
            // Kickleme İşlemi
            kullanıcı.kick()

            // Mesaj
            const YılmazDev = new Discord.MessageEmbed()
            .setDescription(`
                \⛔ \Kicklenen Üye - **${kullanıcı}(\`${kullanıcı.id}\`)**
                \🔨 \Kickleyen Yetkili - **${message.author}(\`${message.author.id}\`)**
                \💬 \Kick Nedeni - **${sebep}**
            `)
            .setColor('BLACK')
            message.channel.send(YılmazDev)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Kick','KİCK', 'At'],
    permLevel: 3,
    kategori:"Moderasyon"
}

exports.help = {
    name: 'kick'
}