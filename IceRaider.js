// Ice Discord Server Raider.

// By iFrost

// BEGINNING OF CODE:




const Discord = require('discord.js')

const readline = require('readline')

const { default: { post } } = require ("axios");

const config = require('./activator.json')

const opn = require('opn')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const clc = require('cli-color')

const { readFileSync } = require('fs');

const ms = require('ms')

const token1 = config.token1

const token2 = config.token2

const token3 = config.token3

const token4 = config.token4

const token5 = config.token5

const token6 = config.token6

const token7 = config.token7

const token8 = config.token8

const prefix = 'r*'

const raider1 = new Discord.Client()

const raider2 = new Discord.Client()

const raider3 = new Discord.Client()

const raider4 = new Discord.Client()

const raider5 = new Discord.Client()

const raider6 = new Discord.Client()

const raider7 = new Discord.Client()

const spammer1 = new Discord.Client()

const spammer2 = new Discord.Client()

const spammer3 = new Discord.Client()

const answer = '1'

const raider8 = new Discord.Client()






























































raider1.on('ready', async () => {
    opn('https://github.com/ifrost666');
    console.clear()
    console.log('')
    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
    console.log('')
    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
    console.log('')
    console.log('')
    console.log(clc.redBright('                    <0>: Joiner'))
    console.log(clc.redBright('                    <1>: Flooder'))
    console.log(clc.redBright('                    <2>: Leaver'))
    console.log(clc.redBright('                    <3>: Other'))
    console.log(clc.redBright('                    <x>: Exit'))

            raider1.on('message', async (msg) => {

                rl.question('',
                (userInput)=> {

                 
         
                    

                    if (userInput === '0'){
                        console.clear()
                        console.log('')
                        console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                        console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                        console.log('')
                        console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                        console.log('')
                        console.log('')
                        console.log(clc.cyanBright('                    Make sure you have the tokens of your spammers inserted in lines under each other in the "tokens.txt" file.'))
                        console.log(clc.cyanBright('                    Please input the last few letters of your invite link: '))
                        console.log(clc.greenBright('                    Example: https://discord.gg/UjAoS8 // UjAoS8 is what you input.'))
                        console.log('')
                        rl.question('',
                        (userAnswer) => {
                            let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                            for (let token of tokens) {
                                post("https://discordapp.com/api/v6/invite/" + userAnswer, {}, {
                                    headers: {
                                        'content-type': "application/json",
                                        'authorization': token.toString()
                                    }
                                }).then((res) => {
                                    console.log(res.data);
                                }).catch((err) => console.log(err));
                            }
                        })
                    }

                    if (userInput === 'x'){
                        console.clear()
                        rl.close()
                    }

                    if (userInput === '7'){
                        console.clear()
                        console.log('')
                        console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                        console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                        console.log('')
                        console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                        console.log('')
                        console.log('')
                        console.log(clc.cyanBright('                    Version 1.0 | By iFrost'))
                        console.log(clc.redBright('                    ==============================='))
                        console.log(clc.cyanBright('                    Errors have a big chance of occuring in this BETA Mode Spammer..'))
                        console.log(clc.redBright('                    ==============================='))
                        console.log(clc.cyanBright('                    GitHub:\n                    https://github.com/ifrost666'))
                        console.log(clc.redBright('                    ==============================='))
                        console.log(clc.cyanBright('                    Press 5 to return back to the main menu.'))
                        return;
                    }

                    if (userInput === '6'){
                        console.clear()
                        console.log('')
                        console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                        console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                        console.log('')
                        console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                        console.log('')
                        console.log('')                             
                        console.log(clc.cyanBright('                   Please input a user ID to mass friend request: '))

                        rl.question('',
                        addid => {
                            let USERID = addid;

                            const { default: { put } } = require("axios");
                            const { readFileSync } = require('fs');
                            
                            let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                            
                            for (let token of tokens) {
                                put("https://discordapp.com/api/v6/users/@me/relationships/" + USERID, {}, {
                                    headers: {
                                        'content-type': "application/json",
                                        'authorization': token.toString()
                                    }
                                }).then((res) => {
                                    console.log(res.data);
                                }).catch((err) => console.log(err));
                            }
                                                    
                                                
                        })
                    }

                       

                    if (userInput === '4'){
                        if (!config.messageToDM) return console.log(clc.redBright('{ERROR}:' + clc.yellowBright('You have not specified a message to DM in the activator.json file.')))
                            msg.guild.members.forEach(member => {
                                member.send(config.messageToDM);
                                console.clear()
                                console.log('')
                                console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                                console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                                console.log('')
                                console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                                console.log('')
                                console.log('')
                                console.log('                    Sending message to all users.. may take a while.')
                                console.log(`                    Sent ` + config.messageToDM + ` to @${member.user.tag}!`)
                                console.log(                    'Successfuly sent ' + config.messageToDM + ' to all server members! Press 5 to return to the main menu.')
                                return;
                            
                        })
                    }

                    if (userInput === '2'){
                        console.clear()
                        console.log('')
                        console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                        console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                        console.log('')
                        console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                        console.log('')
                        console.log('')
                        console.log(clc.cyanBright('                    Please input server ID to leave: '))
                        rl.question('',
                        (result) => {
    
                            if (msg.guild.id === result){
                                msg.guild.leave()
                                return;
                            }
                            
                            const { default: { post } } = require("axios");
                            const { readFileSync } = require('fs');
                            
                            let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                            
                            for (let token of tokens) {
                                post("discordapp.com/api/v6/users/@me/guilds/" + result, {}, {
                                    headers: {
                                        'content-type': "application/json",
                                        'authorization': token.toString()
                                    }
                                    }).then((res) => {
                                        console.clear()
                                        console.log('')
                                        console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                                        console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                                        console.log('')
                                        console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                                        console.log('')
                                        console.log('')
                                        console.log('                    Successfully left the guild! Press 5 to go back to the main menu.')
                                    }).catch((err) => console.log(err));
                                }
    
                              
                                return;
    
                        })
                    }
                                
                            
                    
                
                       

                    if (userInput === '3'){

                      
                        
                        
                        console.clear()
                        console.log('')
                        console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                        console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                        console.log('')
                        console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                        console.log('')
                        console.log('')
                    console.log(clc.cyanBright('                    <4>: DMer'))
                    console.log(clc.cyanBright('                    <5>: Main Menu'))
                    console.log(clc.cyanBright('                    <6>: Friend Requester'))
                    console.log(clc.cyanBright('                    <7>: Version'))
                    return;
                    }
                    console.clear()

                    if (userInput === '5'){
                        console.clear()
                        console.log('')
                        console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                        console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                        console.log('')
                        console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                        console.log('')
                        console.log('')
                        console.log(clc.redBright('                    <0>: Joiner'))
                        console.log(clc.redBright('                    <1>: Flooder'))
                        console.log(clc.redBright('                    <2>: Leaver'))
                        console.log(clc.redBright('                    <3>: Other'))
                        console.log(clc.redBright('                    <x>: Exit'))
                    
    return;
                }

                if (userInput === '1'){
                    console.clear()
                if (msg.guild.id === config.guildID){
                    msg.channel.fetchMessages({
                    })
                    .then(messages => {
                        let msg_array = messages.array()
                        msg_array.length = 500 + 1
                        msg_array.map(m => m.channel.send(config.raidMessage))
                    })
                            }
                        }
                

                
            
    

               

 
        
        
            
                })
            


                


                

  
        })
    
    })

    
    raider2.on('ready', async () => {

        raider2.on('message', async (msg) => {
    
            rl.question('',
            (userInput)=> {
                if (userInput === '0'){
                    console.clear()
                    console.log(clc.cyanBright('Make sure you have the tokens of your spammers inserted in lines under each other in the "tokens.txt" file.'))
                    console.log(clc.cyanBright('Please input the last few letters of your invite link: '))
                    console.log(clc.greenBright('Example: https://discord.gg/UjAoS8 // UjAoS8 is what you input.'))
                    console.log('')
                    rl.question('',
                    (userAnswer) => {
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                    
                        for (let token of tokens) {
                            post("https://discordapp.com/api/v6/invite/" + userAnswer, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                            }).then((res) => {
                                console.log(res.data);
                            }).catch((err) => console.log(err));
                        }
                    })
                }

                if (userInput === 'x'){
                    console.clear()
                    rl.close()
                }

               
                if (userInput === '4'){
                    if (!config.messageToDM) return console.log(clc.redBright('{ERROR}:' + clc.yellowBright('You have not specified a message to DM in the activator.json file.')))
                        msg.guild.members.forEach(member => {
                            member.send(config.messageToDM);
                            console.clear()
                            console.log('')
                            console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                            console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                            console.log('')
                            console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                            console.log('')
                            console.log('')
                            console.log('                    Sending message to all users.. may take a while.')
                            console.log(`                    Sent ` + config.messageToDM + ` to @${member.user.tag}!`)
                            console.log(                    'Successfuly sent ' + config.messageToDM + ' to all server members! Press 5 to return to the main menu.')
                            return;
                        
                    })
                }

                if (userInput === '7'){
                    console.clear()
                    console.log(clc.cyanBright('Version 1.0 | By iFrost'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Errors have a big chance of occuring in this BETA Mode Spammer..'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('GitHub:\nhttps://github.com/ifrost666'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Press 5 to return back to the main menu.'))
                    return;
                }
    
                if (userInput === '6'){
                    console.clear()
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log('')
                    console.log('')
                    console.log('')
                    console.log('')
                    console.log('')
                    console.log(clc.cyanBright('                   You must use verified account tokens in order for the friend requests to go through.'))
                    console.log(clc.cyanBright('                   Please input a user ID to mass friend request:'))

                    rl.question('',
                    addid => {
                        let USERID = addid;

                        const { default: { put } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            put("https://discordapp.com/api/v6/users/@me/relationships/" + addid, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                            }).then((res) => {
                                console.log(res.data);
                            }).catch((err) => console.log(err));
                        }
                                                
                                            
                    })
                }

    
                if (userInput === '2'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.cyanBright('                    Please input server ID to leave: '))
                    rl.question('',
                    (result) => {

                        if (msg.guild.id === result){
                            msg.guild.leave()
                            return;
                        }
                        
                        const { default: { post } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            post("discordapp.com/api/v6/users/@me/guilds/" + result, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                                }).then((res) => {
                                    console.clear()
                                    console.log('')
                                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                                    console.log('')
                                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                                    console.log('')
                                    console.log('')
                                    console.log('                    Successfully left the guild! Press 5 to go back to the main menu.')
                                }).catch((err) => console.log(err));
                            }

                          
                            return;

                    })
                }
                            
    
                if (userInput === '3'){
                   
                    
                    console.clear()
                console.log(clc.cyanBright('<4>: DMer'))
                console.log(clc.cyanBright('<5>: Main Menu'))
                console.log(clc.cyanBright('<6>: Friend Requester'))
                console.log(clc.cyanBright('<7>: Version'))
                return;
                }
                if (userInput === '5'){
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER WILL NEED VERIFIED ACCOUNT TOKENS IN ORDER TO WORK!)\n                    AT LEAST ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.redBright('                    <0>: Joiner'))
                    console.log(clc.redBright('                    <1>: Flooder'))
                    console.log(clc.redBright('                    <2>: Leaver'))
                    console.log(clc.redBright('                    <3>: Other'))
                    console.log(clc.redBright('                    <x>: Exit'))
                    return;
                                }
    
               
        
    
    
                                if (userInput === '1'){
                                    console.clear()
                                if (msg.guild.id === config.guildID){
                                    msg.channel.fetchMessages({
                                    })
                                    .then(messages => {
                                        let msg_array = messages.array()
                                        msg_array.length = 500 + 1
                                        msg_array.map(m => m.channel.send(config.raidMessage))
                                    })
                                            }
                                        }
            
        
        
        
                })
    
    
            
    
    
            
    
    
    })
    })
    
    
    raider3.on('ready', async () => {
    
    
        
        raider3.on('message', async (msg) => {

            
    
            rl.question('',
            (userInput)=> {

                if (userInput === '0'){
                    console.clear()
                    console.log(clc.cyanBright('Make sure you have the tokens of your spammers inserted in lines under each other in the "tokens.txt" file.'))
                    console.log(clc.cyanBright('Please input the last few letters of your invite link: '))
                    console.log(clc.greenBright('Example: https://discord.gg/UjAoS8 // UjAoS8 is what you input.'))
                    console.log('')
                    rl.question('',
                    (userAnswer) => {
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                    
                        for (let token of tokens) {
                            post("https://discordapp.com/api/v6/invite/" + userAnswer, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                            }).then((res) => {
                                console.log(res.data);
                            }).catch((err) => console.log(err));
                        }
                    })
                }

                if (userInput === 'x'){
                    console.clear()
                    rl.close()
                }

               
                if (userInput === '4'){
                    if (!config.messageToDM) return console.log(clc.redBright('{ERROR}:' + clc.yellowBright('You have not specified a message to DM in the activator.json file.')))
                        msg.guild.members.forEach(member => {
                            member.send(config.messageToDM);
                            console.clear()
                            console.log('')
                            console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                            console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                            console.log('')
                            console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                            console.log('')
                            console.log('')
                            console.log('                    Sending message to all users.. may take a while.')
                            console.log(`                    Sent ` + config.messageToDM + ` to @${member.user.tag}!`)
                            console.log(                    'Successfuly sent ' + config.messageToDM + ' to all server members! Press 5 to return to the main menu.')
                            return;
                        
                    })
                }

                if (userInput === '7'){
                    console.clear()
                    console.log(clc.cyanBright('Version 1.0 | By iFrost'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Errors have a big chance of occuring in this BETA Mode Spammer..'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('GitHub:\nhttps://github.com/ifrost666'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Press 5 to return back to the main menu.'))
                    return;
                }
    
                if (userInput === '6'){
                    console.clear()

                    console.log(clc.cyanBright('                   Please input a user ID to mass friend request: '))

                    rl.question('',
                    addid => {
                        let USERID = addid;

                        const { default: { put } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            put("https://discordapp.com/api/v6/users/@me/relationships/" + USERID, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                            }).then((res) => {
                                console.log(res.data);
                            }).catch((err) => console.log(err));
                        }
                                                
                                            
                    })
                }

               
    
                if (userInput === '2'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.cyanBright('                    Please input server ID to leave: '))
                    rl.question('',
                    (result) => {

                        if (msg.guild.id === result){
                            msg.guild.leave()
                            return;
                        }
                        
                        const { default: { post } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            post("discordapp.com/api/v6/users/@me/guilds/" + result, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                                }).then((res) => {
                                    console.clear()
                                    console.log('')
                                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                                    console.log('')
                                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                                    console.log('')
                                    console.log('')
                                    console.log('                    Successfully left the guild! Press 5 to go back to the main menu.')
                                }).catch((err) => console.log(err));
                            }

                          
                            return;

                    })
                }
                            
    
                if (userInput === '3'){
                   
                    console.clear()
                console.log(clc.cyanBright('<4>: DMer'))
                console.log(clc.cyanBright('<5>: Main Menu'))
                console.log(clc.cyanBright('<6>: Friend Requester'))
                console.log(clc.cyanBright('<7>: Version'))
                return;
                }
                if (userInput === '5'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.redBright('                    <0>: Joiner'))
                    console.log(clc.redBright('                    <1>: Flooder'))
                    console.log(clc.redBright('                    <2>: Leaver'))
                    console.log(clc.redBright('                    <3>: Other'))
                    console.log(clc.redBright('                    <x>: Exit'))
                
return;
            }
    
     
        
    
    
            if (userInput === '1'){
                console.clear()
            if (msg.guild.id === config.guildID){
                msg.channel.fetchMessages({
                })
                .then(messages => {
                    let msg_array = messages.array()
                    msg_array.length = 500 + 1
                    msg_array.map(m => m.channel.send(config.raidMessage))
                })
                        }
                    }
        })
    
    
            
    
    
            
    
    
    })
    })
    
    
    raider4.on('ready', async () => {
    
    
        
        raider4.on('message', async (msg) => {
    
            rl.question('',
            (userInput)=> {

                if (userInput === '0'){
                    console.clear()
                    console.log(clc.cyanBright('Make sure you have the tokens of your spammers inserted in lines under each other in the "tokens.txt" file.'))
                    console.log(clc.cyanBright('Please input the last few letters of your invite link: '))
                    console.log(clc.greenBright('Example: https://discord.gg/UjAoS8 // UjAoS8 is what you input.'))
                    console.log('')
                    rl.question('',
                    (userAnswer) => {
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                    
                        for (let token of tokens) {
                            post("https://discordapp.com/api/v6/invite/" + userAnswer, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                            }).then((res) => {
                                console.log(res.data);
                            }).catch((err) => console.log(err));
                        }
                    })
                }

                if (userInput === 'x'){
                    console.clear()
                    rl.close()
                }

                
                if (userInput === '4'){
                    if (!config.messageToDM) return console.log(clc.redBright('{ERROR}:' + clc.yellowBright('You have not specified a message to DM in the activator.json file.')))
                        msg.guild.members.forEach(member => {
                            member.send(config.messageToDM);
                            console.clear()
                            console.log('')
                            console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                            console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                            console.log('')
                            console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                            console.log('')
                            console.log('')
                            console.log('                    Sending message to all users.. may take a while.')
                            console.log(`                    Sent ` + config.messageToDM + ` to @${member.user.tag}!`)
                            console.log(                    'Successfuly sent ' + config.messageToDM + ' to all server members! Press 5 to return to the main menu.')
                            return;
                        
                    })
                }

                if (userInput === '7'){
                    console.clear()
                    console.log(clc.cyanBright('Version 1.0 | By iFrost'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Errors have a big chance of occuring in this BETA Mode Spammer..'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('GitHub:\nhttps://github.com/ifrost666'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Press 5 to return back to the main menu.'))
                    return;
                }
                if (userInput === '6'){
                    console.clear()

                    console.log(clc.cyanBright('                   Please input a user ID to mass friend request: '))

                    rl.question('',
                    addid => {
                        let USERID = addid;

                        const { default: { put } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            put("https://discordapp.com/api/v6/users/@me/relationships/" + USERID, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                            }).then((res) => {
                                console.log(res.data);
                            }).catch((err) => console.log(err));
                        }
                                                
                                            
                    })
                }

    
                if (userInput === '2'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.cyanBright('                    Please input server ID to leave: '))
                    rl.question('',
                    (result) => {

                        if (msg.guild.id === result){
                            msg.guild.leave()
                            return;
                        }
                        
                        const { default: { post } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            post("discordapp.com/api/v6/users/@me/guilds/" + result, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                                }).then((res) => {
                                    console.clear()
                                    console.log('')
                                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                                    console.log('')
                                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                                    console.log('')
                                    console.log('')
                                    console.log('                    Successfully left the guild! Press 5 to go back to the main menu.')
                                }).catch((err) => console.log(err));
                            }

                          
                            return;

                    })
                }
                            
    
                if (userInput === '3'){
                    
                    console.clear()
                console.log(clc.cyanBright('<4>: DMer'))
                console.log(clc.cyanBright('<5>: Main Menu'))
                console.log(clc.cyanBright('<6>: Friend Requester'))
                console.log(clc.cyanBright('<7>: Version'))
                return;
                }
                if (userInput === '5'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.redBright('                    <0>: Joiner'))
                    console.log(clc.redBright('                    <1>: Flooder'))
                    console.log(clc.redBright('                    <2>: Leaver'))
                    console.log(clc.redBright('                    <3>: Other'))
                    console.log(clc.redBright('                    <x>: Exit'))
                
return;
            }

        
    
            if (userInput === '1'){
                console.clear()
            if (msg.guild.id === config.guildID){
                msg.channel.fetchMessages({
                })
                .then(messages => {
                    let msg_array = messages.array()
                    msg_array.length = 500 + 1
                    msg_array.map(m => m.channel.send(config.raidMessage))
                })
                        }
                    }
        })
    
            
    
    
            
    
    
    })
    })
    
    
    raider5.on('ready', async () => {
    
    
    
        
        raider5.on('message', async (msg) => {
    
            rl.question('',
            (userInput)=> {

                
                if (userInput === '0'){
                        console.clear()
                        console.log(clc.cyanBright('Make sure you have the tokens of your spammers inserted in lines under each other in the "tokens.txt" file.'))
                        console.log(clc.cyanBright('Please input the last few letters of your invite link: '))
                        console.log(clc.greenBright('Example: https://discord.gg/UjAoS8 // UjAoS8 is what you input.'))
                        console.log('')
                        rl.question('',
                        (userAnswer) => {
                            let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                            for (let token of tokens) {
                                post("https://discordapp.com/api/v6/invite/" + userAnswer, {}, {
                                    headers: {
                                        'content-type': "application/json",
                                        'authorization': token.toString()
                                    }
                                }).then((res) => {
                                    console.log(res.data);
                                }).catch((err) => console.log(err));
                            }
                        })
                    }




                if (userInput === 'x'){
                    console.clear()
                    rl.close()
                }

                
                if (userInput === '4'){
                    if (!config.messageToDM) return console.log(clc.redBright('{ERROR}:' + clc.yellowBright('You have not specified a message to DM in the activator.json file.')))
                        msg.guild.members.forEach(member => {
                            member.send(config.messageToDM);
                            console.clear()
                            console.log('')
                            console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                            console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                            console.log('')
                            console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                            console.log('')
                            console.log('')
                            console.log('                    Sending message to all users.. may take a while.')
                            console.log(`                    Sent ` + config.messageToDM + ` to @${member.user.tag}!`)
                            console.log(                    'Successfuly sent ' + config.messageToDM + ' to all server members! Press 5 to return to the main menu.')
                            return;
                        
                    })
                }

                if (userInput === '7'){
                    console.clear()
                    console.log(clc.cyanBright('Version 1.0 | By iFrost'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Errors have a big chance of occuring in this BETA Mode Spammer..'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('GitHub:\nhttps://github.com/ifrost666'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Press 5 to return back to the main menu.'))
                    return;
                }
    
                if (userInput === '6'){
                    console.clear()

                    console.log(clc.cyanBright('                   Please input a user ID to mass friend request: '))

                    rl.question('',
                    addid => {
                        let USERID = addid;

                        const { default: { put } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            put("https://discordapp.com/api/v6/users/@me/relationships/" + USERID, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                            }).then((res) => {
                                console.log(res.data);
                            }).catch((err) => console.log(err));
                        }
                                                
                                            
                    })
                }

    
                if (userInput === '2'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.cyanBright('                    Please input server ID to leave: '))
                    rl.question('',
                    (result) => {

                        if (msg.guild.id === result){
                            msg.guild.leave()
                            return;
                        }
                        
                        const { default: { post } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            post("discordapp.com/api/v6/users/@me/guilds/" + result, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                                }).then((res) => {
                                    console.clear()
                                    console.log('')
                                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                                    console.log('')
                                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                                    console.log('')
                                    console.log('')
                                    console.log('                    Successfully left the guild! Press 5 to go back to the main menu.')
                                }).catch((err) => console.log(err));
                            }

                          
                            return;

                    })
                }
                            
                if (userInput === '3'){
                   
                    console.clear()
                console.log(clc.cyanBright('<4>: DMer'))
                console.log(clc.cyanBright('<5>: Main Menu'))
                console.log(clc.cyanBright('<6>: Friend Requester'))
                console.log(clc.cyanBright('<7>: Version'))
                return;
                }
                if (userInput === '5'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.redBright('                    <0>: Joiner'))
                    console.log(clc.redBright('                    <1>: Flooder'))
                    console.log(clc.redBright('                    <2>: Leaver'))
                    console.log(clc.redBright('                    <3>: Other'))
                    console.log(clc.redBright('                    <x>: Exit'))
                
return;
            }



       
        
    
    
            if (userInput === '1'){
                console.clear()
            if (msg.guild.id === config.guildID){
                msg.channel.fetchMessages({
                })
                .then(messages => {
                    let msg_array = messages.array()
                    msg_array.length = 500 + 1
                    msg_array.map(m => m.channel.send(config.raidMessage))
                })
                        }
                    }
        })
    
    
            
    
    
            
    
    
    })
        
    })
    
    raider6.on('ready', async () => {
    
    
    
        
        raider6.on('message', async (msg) => {



          
    
            rl.question('',
            (userInput)=> {


             if (userInput === '0'){
                        console.clear()
                        console.log(clc.cyanBright('Make sure you have the tokens of your spammers inserted in lines under each other in the "tokens.txt" file.'))
                        console.log(clc.cyanBright('Please input the last few letters of your invite link: '))
                        console.log(clc.greenBright('Example: https://discord.gg/UjAoS8 // UjAoS8 is what you input.'))
                        console.log('')
                        rl.question('',
                        (userAnswer) => {
                            let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                            for (let token of tokens) {
                                post("https://discordapp.com/api/v6/invite/" + userAnswer, {}, {
                                    headers: {
                                        'content-type': "application/json",
                                        'authorization': token.toString()
                                    }
                                }).then((res) => {
                                    console.log(res.data);
                                }).catch((err) => console.log(err));
                            }
                        })
                    }




                    if (userInput === '6'){
                        console.clear()

                        console.log(clc.cyanBright('                   Please input a user ID to mass friend request: '))

                        rl.question('',
                        addid => {
                            let USERID = addid;

                            const { default: { put } } = require("axios");
                            const { readFileSync } = require('fs');
                            
                            let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                            
                            for (let token of tokens) {
                                put("https://discordapp.com/api/v6/users/@me/relationships/" + USERID, {}, {
                                    headers: {
                                        'content-type': "application/json",
                                        'authorization': token.toString()
                                    }
                                }).then((res) => {
                                    console.log(res.data);
                                }).catch((err) => console.log(err));
                            }
                                                    
                                                
                        })
                    }

                        
                    
                

                if (userInput === 'x'){
                    console.clear()
                    rl.close()
                }

              
                if (userInput === '4'){
                    if (!config.messageToDM) return console.log(clc.redBright('{ERROR}:' + clc.yellowBright('You have not specified a message to DM in the activator.json file.')))
                        msg.guild.members.forEach(member => {
                            member.send(config.messageToDM);
                            console.clear()
                            console.log('')
                            console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                            console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                            console.log('')
                            console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                            console.log('')
                            console.log('')
                            console.log('                    Sending message to all users.. may take a while.')
                            console.log(`                    Sent ` + config.messageToDM + ` to @${member.user.tag}!`)
                            console.log(                    'Successfuly sent ' + config.messageToDM + ' to all server members! Press 5 to return to the main menu.')
                            return;
                        
                    })
                }

                if (userInput === '7'){
                    console.clear()
                    console.log(clc.cyanBright('Version 1.0 | By iFrost'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Errors have a big chance of occuring in this BETA Mode Spammer..'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('GitHub:\nhttps://github.com/ifrost666'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Press 5 to return back to the main menu.'))
                    return;
                }
    
             v
    
               
    
             if (userInput === '2'){
                console.clear()
                console.log('')
                console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                console.log('')
                console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                console.log('')
                console.log('')
                console.log(clc.cyanBright('                    Please input server ID to leave: '))
                rl.question('',
                (result) => {

                    if (msg.guild.id === result){
                        msg.guild.leave()
                        return;
                    }
                    
                    const { default: { post } } = require("axios");
                    const { readFileSync } = require('fs');
                    
                    let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                    
                    for (let token of tokens) {
                        post("discordapp.com/api/v6/users/@me/guilds/" + result, {}, {
                            headers: {
                                'content-type': "application/json",
                                'authorization': token.toString()
                            }
                            }).then((res) => {
                                console.clear()
                                console.log('')
                                console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                                console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                                console.log('')
                                console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                                console.log('')
                                console.log('')
                                console.log('                    Successfully left the guild! Press 5 to go back to the main menu.')
                            }).catch((err) => console.log(err));
                        }

                      
                        return;

                })
            }
                        
                if (userInput === '3'){
                   
                    console.clear()
                console.log(clc.cyanBright('<4>: DMer'))
                console.log(clc.cyanBright('<5>: Main Menu'))
                console.log(clc.cyanBright('<6>: Friend Requester'))
                console.log(clc.cyanBright('<7>: Version'))
                return;
                }
                if (userInput === '5'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.redBright('                    <0>: Joiner'))
                    console.log(clc.redBright('                    <1>: Flooder'))
                    console.log(clc.redBright('                    <2>: Leaver'))
                    console.log(clc.redBright('                    <3>: Other'))
                    console.log(clc.redBright('                    <x>: Exit'))
                
return;
            }
            
    
    
        
    
            if (userInput === '1'){
                console.clear()
            if (msg.guild.id === config.guildID){
                msg.channel.fetchMessages({
                })
                .then(messages => {
                    let msg_array = messages.array()
                    msg_array.length = 500 + 1
                    msg_array.map(m => m.channel.send(config.raidMessage))
                })
                        }
                    }
        })
    
    
            
    
    
            
    
    
    })
    })
    
    raider7.on('ready', async () => {
    
    
    
        
        raider7.on('message', async (msg) => {


           
            rl.question('',
            (userInput)=> {

                
                if (userInput === '0'){
                    console.clear()
                    console.log(clc.cyanBright('Make sure you have the tokens of your spammers inserted in lines under each other in the "tokens.txt" file.'))
                    console.log(clc.cyanBright('Please input the last few letters of your invite link: '))
                    console.log(clc.greenBright('Example: https://discord.gg/UjAoS8 // UjAoS8 is what you input.'))
                    console.log('')
                    rl.question('',
                    (userAnswer) => {
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                    
                        for (let token of tokens) {
                            post("https://discordapp.com/api/v6/invite/" + userAnswer, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                            }).then((res) => {
                                console.log(res.data);
                            }).catch((err) => console.log(err));
                        }
                    })
                }




                if (userInput === 'x'){
                    console.clear()
                    rl.close()
                }

               
                if (userInput === '4'){
                    if (!config.messageToDM) return console.log(clc.redBright('{ERROR}:' + clc.yellowBright('You have not specified a message to DM in the activator.json file.')))
                        msg.guild.members.forEach(member => {
                            member.send(config.messageToDM);
                            console.clear()
                            console.log('')
                            console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                            console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                            console.log('')
                            console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                            console.log('')
                            console.log('')
                            console.log('                    Sending message to all users.. may take a while.')
                            console.log(`                    Sent ` + config.messageToDM + ` to @${member.user.tag}!`)
                            console.log(                    'Successfuly sent ' + config.messageToDM + ' to all server members! Press 5 to return to the main menu.')
                            return;
                        
                    })
                }

                if (userInput === '7'){
                    console.clear()
                    console.log(clc.cyanBright('Version 1.0 | By iFrost'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Errors have a big chance of occuring in this BETA Mode Spammer..'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('GitHub:\nhttps://github.com/ifrost666'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Press 5 to return back to the main menu.'))
                    return;
                }
                if (userInput === '6'){
                    console.clear()

                    console.log(clc.cyanBright('                   Please input a user ID to mass friend request: '))

                    rl.question('',
                    addid => {
                        let USERID = addid;

                        const { default: { put } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            put("https://discordapp.com/api/v6/users/@me/relationships/" + USERID, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                            }).then((res) => {
                                console.log(res.data);
                            }).catch((err) => console.log(err));
                        }
                                                
                                            
                    })
                }

               
                if (userInput === '2'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.cyanBright('                    Please input server ID to leave: '))
                    rl.question('',
                    (result) => {

                        if (msg.guild.id === result){
                            msg.guild.leave()
                            return;
                        }
                        
                        const { default: { post } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            post("discordapp.com/api/v6/users/@me/guilds/" + result, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                                }).then((res) => {
                                    console.clear()
                                    console.log('')
                                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                                    console.log('')
                                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                                    console.log('')
                                    console.log('')
                                    console.log('                    Successfully left the guild! Press 5 to go back to the main menu.')
                                }).catch((err) => console.log(err));
                            }

                          
                            return;

                    })
                }
                            
    
                if (userInput === '3'){
                    
                    console.clear()
                console.log(clc.cyanBright('<4>: DMer'))
                console.log(clc.cyanBright('<5>: Main Menu'))
                console.log(clc.cyanBright('<6>: Friend Requester'))
                console.log(clc.cyanBright('<7>: Version'))
                return;
                }
                if (userInput === '5'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.redBright('                    <0>: Joiner'))
                    console.log(clc.redBright('                    <1>: Flooder'))
                    console.log(clc.redBright('                    <2>: Leaver'))
                    console.log(clc.redBright('                    <3>: Other'))
                    console.log(clc.redBright('                    <x>: Exit'))
                
return;
            }
 
        
    
            if (userInput === '1'){
                console.clear()
            if (msg.guild.id === config.guildID){
                msg.channel.fetchMessages({
                })
                .then(messages => {
                    let msg_array = messages.array()
                    msg_array.length = 500 + 1
                    msg_array.map(m => m.channel.send(config.raidMessage))
                })
                        }
                    }
    
            
    



        })
    
    
            
    
    
            
    
    
    })
    })
    
    raider8.on('ready', async () => {
    
        raider8.on('message', async (msg) => {

            
                    
   
    
            rl.question('',
            (userInput)=> {

 if (userInput === '0'){
                        console.clear()
                        console.log(clc.cyanBright('Make sure you have the tokens of your spammers inserted in lines under each other in the "tokens.txt" file.'))
                        console.log(clc.cyanBright('Please input the last few letters of your invite link: '))
                        console.log(clc.greenBright('Example: https://discord.gg/UjAoS8 // UjAoS8 is what you input.'))
                        console.log('')
                        rl.question('',
                        (userAnswer) => {
                            let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                            for (let token of tokens) {
                                post("https://discordapp.com/api/v6/invite/" + userAnswer, {}, {
                                    headers: {
                                        'content-type': "application/json",
                                        'authorization': token.toString()
                                    }
                                }).then((res) => {
                                    console.log(res.data);
                                }).catch((err) => console.log(err));
                            }
                        })
                    }


                if (userInput === 'x'){
                    console.clear()
                    rl.close()
                }

               
                if (userInput === '4'){
                    if (!config.messageToDM) return console.log(clc.redBright('{ERROR}:' + clc.yellowBright('You have not specified a message to DM in the activator.json file.')))
                        msg.guild.members.forEach(member => {
                            member.send(config.messageToDM);
                            console.clear()
                            console.log('')
                            console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                            console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                            console.log('')
                            console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                            console.log('')
                            console.log('')
                            console.log('                    Sending message to all users.. may take a while.')
                            console.log(`                    Sent ` + config.messageToDM + ` to @${member.user.tag}!`)
                            console.log(                    'Successfuly sent ' + config.messageToDM + ' to all server members! Press 5 to return to the main menu.')
                            return;
                        
                    })
                }
                if (userInput === '7'){
                    console.clear()
                    console.log(clc.cyanBright('Version 1.0 | By iFrost'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Errors have a big chance of occuring in this BETA Mode Spammer..'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('GitHub:\nhttps://github.com/ifrost666'))
                    console.log(clc.redBright('==============================='))
                    console.log(clc.cyanBright('Press 5 to return back to the main menu.'))
                    return;
                }
    
                if (userInput === '6'){
                    console.clear()

                    console.log(clc.cyanBright('                   Please input a user ID to mass friend request: '))

                    rl.question('',
                    addid => {
                        let USERID = addid;

                        const { default: { put } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            put("https://discordapp.com/api/v6/users/@me/relationships/" + USERID, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                            }).then((res) => {
                                console.log(res.data);
                            }).catch((err) => console.log(err));
                        }
                                                
                                            
                    })
                }

               
    
                if (userInput === '2'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.cyanBright('                    Please input server ID to leave: '))
                    rl.question('',
                    (result) => {

                        if (msg.guild.id === result){
                            msg.guild.leave()
                            return;
                        }
                        
                        const { default: { post } } = require("axios");
                        const { readFileSync } = require('fs');
                        
                        let tokens = readFileSync("tokens.txt", 'utf-8').replace(/\r/gi, "").split("\n");
                        
                        for (let token of tokens) {
                            post("discordapp.com/api/v6/users/@me/guilds/" + result, {}, {
                                headers: {
                                    'content-type': "application/json",
                                    'authorization': token.toString()
                                }
                                }).then((res) => {
                                    console.clear()
                                    console.log('')
                                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                                    console.log('')
                                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                                    console.log('')
                                    console.log('')
                                    console.log('                    Successfully left the guild! Press 5 to go back to the main menu.')
                                }).catch((err) => console.log(err));
                            }

                          
                            return;

                    })
                }
                            
    
                if (userInput === '3'){
                   
                    console.clear()
                console.log(clc.cyanBright('<4>: DMer'))
                console.log(clc.cyanBright('<5>: Main Menu'))
                console.log(clc.cyanBright('<6>: Friend Requester'))
                console.log(clc.cyanBright('<7>: Version'))
                return;
                }
                if (userInput === '5'){
                    console.clear()
                    console.log('')
                    console.log(clc.blue('                                                  ██╗ ██████╗ ███████╗\n                                                  ██║██╔════╝██╔════╝\n                                                  ██║██║     █████╗\n                                                  ██║██║     ██╔══╝\n                                                  ██║╚██████╗███████╗\n                                                  ╚═╝ ╚═════╝ ╚══════╝'))
                    console.log(clc.cyanBright('                                                  Welcome to Ice by iFrost!'))
                    console.log('')
                    console.log(clc.magentaBright('                    Type the key for the action. (DMER & FRIEND REQUESTER WILL NEED VERIFIED ACCOUNT TOKENS TO WORK!)\n                    ONE OF THE TOKENS MUST BE INSIDE THE SERVER YOU ARE RAIDING IN ORDER FOR THE MENU OPTIONS TO WORK!'))
                    console.log('')
                    console.log('')
                    console.log(clc.redBright('                    <0>: Joiner'))
                    console.log(clc.redBright('                    <1>: Flooder'))
                    console.log(clc.redBright('                    <2>: Leaver'))
                    console.log(clc.redBright('                    <3>: Other'))
                    console.log(clc.redBright('                    <x>: Exit'))
                
return;
            }
        
    
    
            if (userInput === '1'){
                console.clear()
            if (msg.guild.id === config.guildID){
                msg.channel.fetchMessages({
                })
                .then(messages => {
                    let msg_array = messages.array()
                    msg_array.length = 500 + 1
                    msg_array.map(m => m.channel.send(config.raidMessage))
                })
                        }
                    }
                })
    
    
            
    
    
            
    
    
    })
    })
    
    spammer1.on('ready', async () => {
    
    })
    
    spammer2.on('ready', async () => {
    
    })
    
    spammer3.on('ready', async () => {
    
    })
    
    
    
    

raider1.login(token1)
raider2.login(token2)
raider3.login(token3)
raider4.login(token4)
raider5.login(token5)
raider6.login(token6)
raider7.login(token7)
raider8.login(token8)
spammer1.login(token1)
spammer2.login(token2)
spammer3.login(token3)