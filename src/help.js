const help = (prefix) => {
	return `> *SEJA BEM VINDO AO MENU DO AstaBot O BOT MAIS BRABO\n 
	E DA OF PAINEL AINDA PAPAI KKK* <
	
������ *CRIADOR* ����
��comando: *${prefix}criador*\n
������ *FIGURINHAS* ����
��comando : *${prefix}sticker* ou *${prefix}stiker*
��desc : converter imagem/gif/video em figurinha
��uso : responda com image/gif/video, ou envie imagem/gif/video com a legenda\n
��comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
��desc : converter imagem a figurinha removendo o fundo
��uso : mande uma imagem com o comando na legenda\n
��comando : *${prefix}toimg*
��desc : converter figurinha em imagem
��uso : marque um sticker e digite o comando\n
��comando : *${prefix}tsticker* ou *${prefix}tstiker*
��desc : converter texto em figurinha
��uso : *${prefix}tsticker e o texto*\n
������ *MEME* ����
��comando : *${prefix}meme*
��desc : meme aleatorio [ingles]
��uso : so mande o comando\n
��comando : *${prefix}memeindo*
��desc : meme aleatrio [indo]
��uso : so mande o comando\n
������ *OUTROS* ����
��comando : *${prefix}bomdia*
��comando : *${prefix}boatarde*
��comando : *${prefix}boanoite*
��comando : *${prefix}gtts*
��desc : converter texto em audio
��uso : *${prefix}gtts [cc] [texto]*\exemplo : *${prefix}gtts pt ai papai*\n
��comando : *${prefix}loli*
��desc : imagens aleatoria de loli
��uso : so mandar o comando\n
��comando : *${prefix}nsfwloli*
��desc : imagens aleatoria de nsfwloli
��uso : so mandar o comando\n
��comando : *${prefix}simi*
��desc : sua mensagem ser�� respondida por simi
��uso : *${prefix}simi suamensagem*\n
��comando : *${prefix}ocr*
��desc : pegue o texto da foto
��uso : mande a imagem com a legenda ou responda a imagem com o comando\n
��comando : *${prefix}wait*
��desc : diz qual o anime da imagem
��usage : mande a imagem com a legenda ou responda a imagem com o comando\n
��comando : *${prefix}setprefix*
��desc : mudar o prefixo
��uso : *${prefix}setprefix [texto|opcional]*\exemplo: *${prefix}setprefix ?*
��note : esse comando so pode ser usado pelo CRIADOR do bot\n
������ *GRUPO* ����
��comando : *${prefix}add*
��desc : adicionar alguem no grupo
��uso : *${prefix}add 55919214xxxx*\n
��nota : so pode ser usado quando o bot se torna admin, e quem envia o comando tem que ser admin!\n
��comando : *${prefix}kick*
��desc : remover alguem do grupo
��uso : *${prefix}kick @TagDaPessoa*\n
��nota : so pode ser usado quando o bot se torna admin, e quem envia o comando tem que ser admin!\n
��comando : *${prefix}promote*
��desc : promover a admin
��uso : *${prefix}promote @TagDoMembro*\n
��nota : so pode ser usado quando o bot se torna admin, e quem envia o comando tem que ser admin!\n
��comando : *${prefix}demote*
��desc : faz o adm virar um membro comum?
��uso : *${prefix}demote @TagDoAdm*\n
��nota : so pode ser usado quando o bot se torna admin, e quem envia o comando tem que ser admin!\n
��comando : *${prefix}linkgrupo*
��desc : manda o link do grupo
��uso : so mandar o comando
��nota : so pode ser usado quando o bot se torna admin, e quem envia o comando tem que ser admin!\n
��comando : *${prefix}sair*
��desc : Faz o bot sair do grupo
��uso : so mandar o comando
��nota : so pode ser usado pelo dono do bot ou adm do grupo\n
��comando : *${prefix}chamar*
��desc : marca todos do grupo
��uso : so mandar o comando
��nota : esse comando so pode ser usado por adm\n
��comando : *${prefix}simih*
��desc : ativar o modo simi no grupo
��uso : *${prefix}simih 1* pra ativar o modo simih e *${prefix}simih 0* pra desativar o modo simih
��nota : esse comando so pode ser usado por adm\n`
}

exports.help = help
