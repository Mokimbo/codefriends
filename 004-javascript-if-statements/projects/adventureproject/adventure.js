// make questionaire for stats
// make paths 
// add descriptors for differing stats
// make choices for ending or continuing to remaining paths


const prompt = require('prompt-sync')();
// Beginning intro
console.log(`Hello and welcome to this little work in progress choose your own adventure story. Your journey begins
in the fantasy land of Belfast, a small city along the coast near the Hillias mountain range. But before 
we get too deep into the world and its inhabitants lets figure out a bit more about yourself.
`)
const name = prompt('What is your name? ');

console.log(`
Welcome ${name}. In this fantasy land many of the paths you travel will differ depending on your choices.
These choices will be reflected in they way of stats that will determin how you solve various problems and
how you engage with the inhabitatns of the world itself. The four stats are as follows.

Strength: affects your physical body in terms of toughness and constitution. People with high strength
generally use their body itself to get through most tasks assigned to them

Agility: affects your speed and balance, allowing you to move quicker through terrain or balance multiple
things easily. People with high agility can react quickly to situations and are generally good at using
tools to complete jobs quickly

Intelligence: affects how much you know and how to put that knowledge to use. People with high intelligence
are able to see and fix broken tools, maximize the efficiency of what they are given and many learn how to
use the magic to make tasks much easier for themselves.

Charisma: affects how persuasive and commanding you are. People with high charisma can generally get things
done with the help of others, finding friends everywhere they go and getting help from whoever may be around.

As you progress through the story these stats will grow so that you can handle tougher problems as you progress.
There are no wrong answers, the only things that will change are how you go about solving the tasks given to you.
With that in mind this next little questionnaire will help guide ${name} down the paths you choose and give them
some stats to start with. You only need to type the letter, not the whole phrase (ex: a, not a. ect~)
`)
// beginning questionaire and stat assignment
let str = 1
let agi = 1
let int = 1
let cha = 1
console.log(`When ${name} was in school they spent most of their free time?
a. Training, the physical body is the most important tool we have
b. Team practice, being the ace of the school requires good hand eye coordination
c. Spent alot of time in the library reading
d. Went out of their way to socialize with people around the city
`)

const q1 = prompt(`choose one of the above `)
if (q1 === 'a') {
    str++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q1 === 'b') {
    agi++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q1 === 'c') {
    int++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q1 === 'd') {
    cha++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
console.log(`
When ${name} was asked to bring alot of books from the library to various classrooms, they would:
a. Carry them all at once and just drop them off where they are needed, they arent that heavy
b. Bring the books one small stack at a time where they are needed, the hallways are busy after all
c. Would bring them where they needed to go, after having a qiuck read themselves of course
d. Get some classmates to help, they are probably going to those classrooms anyway
`)
const q2 = prompt(`choose one of the above `)
if (q2 === 'a') {
    str++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q2 === 'b') {
    agi++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q2 === 'c') {
    int++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q2 === 'd') {
    cha++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
console.log(`
If ${name} got into a physical conflict with another person, they would:
a. Fight back, what other answer is there?
b. Just keep dodging untill the other person tires themself out, I dont need to fight to win
c. I'm not going to waste my precious time fighting someone to ignorant to understand my opinions
d. Why would I get into a fight, I'm sure we can just talk this out.
`)
const q3 = prompt(`choose one of the above `)
if (q3 === 'a') {
    str++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q3 === 'b') {
    agi++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q3 === 'c') {
    int++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q3 === 'd') {
    cha++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
console.log(`
The most important thing to have is:
a. Strength, you need a strong body to confront anything thrown at you
b. Agility, being able to think and move quickly will get you out of most problems
c. Intelligence, the brain creates all the other tools we have to make our lives easier
d. Charisma, the best way to solve a problem is with everyone working together
`)
const q4 = prompt(`choose one of the above `)
if (q4 === 'a') {
    str++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q4 === 'b') {
    agi++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q4 === 'c') {
    int++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
else if (q4 === 'd') {
    cha++
    console.log(`Strength = ${str}, Agility = ${agi}, Intelligence = ${int}, Charisma = ${cha}`)
}
// setting and route choice
console.log(`
Now that we got to know a little bit more about ${name} let's get started. As this story begins, you've just graduated
from school. The festival for the season of adventure is just beginning, a kind of tradition in the city and the 
surrounding lands for all of the graduates begin a new stage in their lives. Many go out traveling the world, searching
for new and exciting things to do and learn outside of the city, with a few returning over the years as teachers for the
next generation. But before the festival can get into full swing everyone has a job to do, and it seems a few extra hands
could be used around the town. You and a few other classmates who have graduated have decided to help out before you go
on your adventure. After a quick deliberation you've narrowed down your choices to a few places.

a. Head to the docks to see where you can help out. With all the ships comming from other lands they could definitely 
    use some extra hands.

b. Head up towards the mines. There was news of a recent cave in slowing down progress there that you could maybe help 
    out with.(work in progress)
`)
const ra = prompt('You decide to: ')
// route a
if (ra === 'a'){
    console.log(`
The way to the docks isnt too difficult, though with many boats comming and going the streets do get busier as you head closer
to them. The main building of the docks is quite large as you can see it from a good distance a way. The crowd is also getting
thicker as you approach, all the incomming goods for the festival seems to have made the docks quite busy indeed.`) 
    if (str >= 5){
        console.log(`Despite all the traffic, ${name} is able to push through the crowd, most people simply move to avoid your great stature.`)
    }
    else if (agi >= 5){
        console.log(`Despite all the traffic, ${name} is able to weave through the crowd, finding small pockets to move quickly through.`)
    }
    else {
        console.log(`It takes a while since the streets are very busy but you eventually make it to the building and begin to look for someone in charge`)
    }
    console.log(`
Once inside you see a bunch of people lined up behind a receptionist. She seems to be quite busy with her work, handing out papers and
pointing out things to the people in line. Most are only there a few monents before heading out the door though it might be a while
before you are able to talk to her, considering where you are in the line.`) 
    if (cha >= 5){
        console.log(`Being as courteous as possible, you skip ahead to the front of the line to as her about what you could do around here to help.`)
    }
    else {
        console.log(`With nothing to do till you get to her you wait and move up with the line as it goes, eventually getting to her to ask where needs the most
help`)
    }
    console.log(`
She gives you a quick look up and down before giving you a response. "As much as I'd like to keep you here to help me I'm pretty
sure I'm not the only one drowning in papers right now. Let me show you to the boss' room and we'll see where we go from there."
You nod in response and she quickly takes you behind the counter past a bunch of people. All of them seem to be working on various
logs or stamping papers in a hurried rush. As you round a corner you see rather large room at the end which seems to be where the
receptionist is leading you towards. After a brief knock on the door she says "Got another one looking to help. Want me to send
them in?". What you hear is a large snort, after which the receptionist says, "Alright go on in honey, I'm sure he will sort you
out nicely."
Well, you did come here to help out. Once you enter the office notice a large man with what appears to be large bull horns coming 
out of his head sitting at a large wooden desk. He turns around and you realize where the snort came from. He is a minotaur, a rare
species on this part of the continent. It takes you a moment before you realize hes waiting for you to speak. You get about how 
you're here to help before he cuts you off.
"I know why you came here, what I want to know is what you think you can do here?"`)
    if (str >= 5 || agi >= 5 ){
        console.log(`You offer you help to unload the ships or help bring the cargo where its needed in town thats something you could probably do quite easily.`)
    }
    else if (int >=5 || cha >= 5 ){
        console.log(`You offer to help in the office. You may not know what exactly the papers are but with a little guidance you could help out the receptionist.`)
    }
    else {
        console.log(`You aren't too sure, you could probably help out anywhere.`)
    }
    console.log(`
"Well if you know what your good at go help out there. Honestly any help is good help right now, got too many workers off doing
who knows what right about now."
He opens one of the drawers in his desk pulls out a sheet of paper, sliding it across the table for you.
"A map of the docks. I know your from around here but just take it for good measure."
You take it and get a good look at it. It appears to list where the head of each department is at.
"Talk to one of them and they will get you sorted." he says before turning back around on his chair.
With that, you leave the office before looking back at the map. You can either:

a. Head to the dockmaster to help unload the ships.

b. Head over to the warehouse manager to help deliver goods around the town. (work in progress)

c. Head back over to the receptionist to help out around the office. (work in progress)
`)

const ra1 = prompt (`You decide to: `)
// route a-1
    if (ra1 === 'a'){
    console.log(`
After waving goodbye to the receptionist and leaving the office you head over to where the dockmaster is supposed to be on the map.`)
    if (str >= 5){
    console.log(`Even with all the hustle and bustle of the shipyard, ${name} is able to get around, sometimes stopping to help people adjust the weight of their
crates and other assorted goods from the ships comming and going as most of them were going to or comming from the dockmaster themselves.`)
}
    else if (agi >= 5){
    console.log(`Even with all the hustle and bustle of the shipyard, ${name} is able to maneuver around, quickly scooting around carts and wagons full of goods
to get to where the dockmaster supposidly is.`)
}
    else {
    console.log(`It takes a while since the shipyard is very busy with carts, wagons and people carrying around heavy crates and sacks full of goods. Eventually
you make it to the dockmaster's station on the docks.`)
}
    console.log(`
As you approach, you see the dockmaster standing on a podium of sorts. He seems to be an older gentleman, though the energy he displays
while shouting out what you assume to be shipnames would make you think hes half that. A steady stream of people carrying various things,
either showing a piece of paper or just some numbers on the goods themselves. He quickly idtentifies them and sends them on their way,
this line going much quicker than the line at the office. Despite all the chaos he seems to notice you approaching and waves you over.

"Oi, you there. You here to help turn the tides of this ever growing storm of supplies?" he says with a large grin on his face. "I
seen a few of your other classmates already, some being more helpful than others. What's your name kid"

"${name}." you reply

"Well ${name}, if you came to help unload or load them ships out there you came to the right place!" He says as he writes something down
on the papers he's holding. "You dont mind if I get you started right away do ya? As they say, many hands make light work? or was it
the more the merrier? Maybe both apply here, Haha!"

You let him know that you are ready whenever, to which he smiles and pats some crates that are next to the podium. "These got to go over
to that ship over there, that big one with the orange sails. And once your done with that head on over to the ship right next to it and
grab some goods off of that to bring over here." He points over to a ship over on the right side of the docks. It doesnt seem too far away
but there are quite alot of people still moving supplies too and fro. "There's some extra small carts over by that building over there if 
you wanna use those. Up to you though, they are kind of a hastle to use with all the people everywhere. Also some of em might need a little
tlc since they haven't been used much. there should be some tools to fix any damages in the shed behind it." As you look over to the 
builing it seems to be a storage shed of sorts, though considering how busy the dock is now it would be safe to assume you would have to
fix any of the carts you want to use before actually using them.

"Welp I'll leave you to it then. Come back when you've finished with that and I'll give you somethin else. Tis a busy season after
all!" And with that, he goes back to managing the incomming stream of people. Left to your own devices you ponder about how you
will help out.
`)
const cart = prompt('would you like to check out the carts?(y/n)')
    if (cart === y){
        console.log(`
work in progress
        `)
    }//ra1=a-y
    else {
        console.log(`
work in progress
`)
    }
    }//ra1=a
    if (ra1 = 'b'){
        console.log(`
work in progress
`)

    }//ra1=b
    if (ra1 = 'c'){
        console.log(`
work in progress
`)

    }//ra1=c

    }//ra



else if(ra === 'b'){
    console.log(`work in progress`)
}




//console.log(`is it working`)
