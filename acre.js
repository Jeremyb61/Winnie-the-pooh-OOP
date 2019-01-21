tigger = { character: "Tigger" };
pooh = { character: "Winnie the Pooh" };
piglet = { character: "Piglet"};
bees = { character : "Bees"};
rabbit = { character : "Rabbit"};
gopher = { character : "Gopher"};
chris = { character : "Christopher Robin"};
owl = { character : "Owl"};
kanga = { character : "Kanga"};
eyecore ={ character : "Eyecore"};
heff = { character :"Heffalumps"};
player ={ location :tigger }



// piglet.east = tigger.north;     
    
tigger.north = pooh;
pooh.south = tigger;

pooh.east = bees;
bees.west = pooh;

pooh.north = chris;
chris.south = pooh;

bees.north = rabbit;
rabbit.south = bees;

pooh.west = piglet;
piglet.east = pooh;

piglet.north =owl;
owl.south = piglet

owl.east = chris;
chris.west = owl;

chris.north = kanga;
kanga.south = chris;

chris.east = rabbit;
rabbit.west = chris;

rabbit.east = gopher;
gopher.west = rabbit;

kanga.north = eyecore;
eyecore.south = kanga;

eyecore.east = heff;
heff.west = eyecore;

kanga.south = rabbit.west;
kanga.south=chris;
tigger.north.north.north = kanga;

eyecore.south = chris.north;
pooh.north.north.north = eyecore;

heff.west = kanga.north;
kanga.north.east = heff;

function move(direction){
    if(player.location[direction]){
        player.location = player.location[direction];
        console.log('You are now at' + ' ' + player.location.character + 's' + ' ' + 'house');
        return "You moved " + direction;
    } else { 
        console.log('You cannot go that way!')
    }

}
