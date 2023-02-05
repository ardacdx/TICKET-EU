const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'Şablon',
    category: "mod",
    description: `Şablon komutu.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Select the type of ticket to be created.')
					.addOptions([
						{
							label: '⚙️ | Support',
							description: 'Open a ticket for any support.',
							value: 'ortaklık',
						},
						{
							label: '🤝 | Partnership',
							description: 'Open a ticket to partnership',
							value: 'şikayet',
						},
                        {
							label: '🌟 | Pmco Role',
							description: 'Open a ticket to take part in pmco',
							value: 'yetkili',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Bilet Açın',
                description: '**__How to Open a Ticket :__**\nPlease select the type of ticket you want to open.',
                color: "BLURPLE",
                footer: {text: 'BATTALALTI ORGANIZATION'}
            }],
            components: [row]
        })
    }
}
