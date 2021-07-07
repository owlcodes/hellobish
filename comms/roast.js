module.exports = {
    name: 'roast',
    description: 'Test this command boys ',
    execute(message,args, cmd, client, Discord){
        var coal=["hello faggot","your mum gay","you were a mistake and your brith certificate is just an appology letter from condom company","oh there's shit on my screen wait, its just your message","your dad should have stratched his balls out instead of having you","your dick is so small it fits in Aux port","Stop growing balls on your chest and grow them where it matters"];
        var shot=Math.floor(Math.random()*coal.length);
        var id=message.author.toString();
        if(args[0]==null){
          return message.reply('Mention someone with the command you pussy');
        }
        else{
          message.channel.send(id+' said '+args[0]+' '+coal[shot]);
        }
    }
}