let arrObj = [
    {"person" : "Mark", "age":25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age":65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];

let place = 0

function afficherPerson(personne,i){
    $($(".avatar").get(i)).attr("src", personne.avatar);
    $(".name").get(i).innerHTML = personne.person;
    $(".age").get(i).innerHTML = personne.age;
}

$("#left").click(function (){
    if(place === 0){
        place = arrObj.length;
    }
    else{
        place --;
    }
    afficherPerson(arrObj[place])
})

$("#right").click(function (){
    if(place === arrObj.length - 1){
        place = 0;
    }
    else{
        place ++;
    }
    afficherPerson(arrObj[place])
})

function definedDiv(){
    for(i = 0; i< arrObj.length; i++){
        let div = document.createElement("div");
        div.className = "perso";
        let img = document.createElement("img");
        let descript = document.createElement("div");
        descript.className = "descript";
        let name = document.createElement("div");
        name.className = "name";
        let age = document.createElement("div");
        age.className = "age";
        $(img).attr("src",arrObj[i].avatar);
        descript.append(name);
        descript.append(age);
        div.append(img);
        div.append(descript);
        document.getElementById("afficher").append(div)
        afficherPerson(arrObj[i],i)
    }
}

if($("#flag").get(0) !== undefined){
    definedDiv();
}
else{
    afficherPerson(arrObj[0],0)
}
