    const altRockData = loadAltRock()
    const countryData = loadCountry()
    const christianData = loadChristian()
    const popData = loadPop()


function renderRapMusic(){
    const rapData = loadRap()
    const $musicList = document.getElementById("musicList")
    rapData.rapMusics.forEach(rapMusic => {
         const $rapMusic = document.createElement("div")
         $rapMusic.innerHTML = `<h1>${rapMusic.name}</h1>`
         $rapMusic.innerHTML = `<h3>${rapMusic.artist}</h3>`
         $rapMusic.innerHTML = `<h3>${rapMusic.album}</h3>`
         $musicList.append($rapMusic)
    })
}


$("#submit").click(function() {
  var q1user = $("select[name='genreChoices']").val();
    console.log(q1user)
 
    $("#buttonGenre").remove();
   
    
    if(q1user == "rap"){
        renderRapMusic()
    }
    else if(q1user == "altRock"){
       console.log(altRockData)
    }
    else if(q1user == "country"){
       console.log(countryData)
    }
    else if(q1user == "religious"){
       console.log(christianData)
    }
    else if(q1user == "pop"){
       console.log(popData)
    }
    
   
    
})

        function loadRap() {
    //JSON - JavaScript Object Notation
    const rapMusics = [
        
    {
        "name" : "Follow God",
        "artist" : "Kanye West",
        "album" : "JESUS IS KING"
    },
        {
        "name" : "Heartless",
        "artist" : "The Weekend",
        "album" : "After Hours"
    },
        {
        "name" : "Woah",
        "artist" : "Lil Baby",
         "album" :"Woah"
    },
        {
        "name" : "No Idea",
        "artist" : "Don Toliver",
        "album" :"Heaven or Hell"
    },
        {
        "name" : "BOP",
        "artist" : "DaBaby",
        "album" :"KIRK"
    },
        {
        "name" : "Did It Again",
        "artist" : "Lil Tecca",
        "album" :"We Love You Tecca"
    },
        {
        "name" : "Saint-Tropez",
        "artist" : "Post Malone",
        "album" :"Hollywood's Bleeding"
    },
        {
        "name" : "Juicy",
        "artist" : "Doja Cat, Tyga",
        "album" :"Juicy"
    },
        {
        "name" : "Don't Matter To Me",
        "artist" : "Drake, Michael Jackson",
        "album" :" Scorpion"
    },
        {
        "name" : "BAD!",
        "artist" : "XXXTENTACION",
        "album" :"BAD!"
    }
  ]
    return{
        "rapMusic" : rapMusics
    } 
}
              
 function loadAltRock() {
    //JSON - JavaScript Object Notation
    const altRockMusics = [
        
    {
        "name" : "The Champion",
        "artist" : "The Score",
        "album" : "Carry On"
    },
        {
        "name" : "No Secrets",
        "artist" : "The Treble",
        "album" : "Rivals"
    },
        {
        "name" : "Best Part",
        "artist" : "The Score",
         "album" :"Best Part"
    },
        {
        "name" : "Manic Monday",
        "artist" : "The Bangles",
        "album" :"Different Light"
    },
        {
        "name" : "Caution",
        "artist" : "The Killers",
        "album" :"Caution"
    },
        {
        "name" : "Heat Seeker",
        "artist" : "DREAMERS, grandson",
        "album" :"Heat Seeker"
    },
        {
        "name" : "Deleter",
        "artist" : "Grouplove",
        "album" :"Healer"
    },
        {
        "name" : "PSYCHO",
        "artist" : "AViVA",
        "album" :"PSYCHO"
    },
        {
        "name" : "Heaven",
        "artist" : "blink-182",
        "album" :" NINE"
    },
        {
        "name" : "Bob Dylan",
        "artist" : "Fall Out Boy",
        "album" :"Believers Never Die"
    }
  ]
    return{
        "altRockMusic" : altRockMusics
    } 
}        

function loadCountry() {
    //JSON - JavaScript Object Notation
    const countryMusics = [
        
    {
        "name" : "More Than My Hometown",
        "artist" : "Morgan Wallen",
        "album" : "More Than My Hometown"
    },
        {
        "name" : "Lost Boy",
        "artist" : "Render Sisters",
        "album" : "Lost Boy"
    },
        {
        "name" : "One Too Many",
        "artist" : "Keith Urban, P!nk",
         "album" :"One Too Many"
    },
        {
        "name" : "Starting Over",
        "artist" : "Chris Stapleton",
        "album" :"Starting Over"
    },
        {
        "name" : "Nobody But You",
        "artist" : "Blake Shelton, Gwen Stefani",
        "album" :"Fully Loaded: God's Country"
    },
        {
        "name" : "Lovin' On You",
        "artist" : "Luke Combs",
        "album" :"What You See Is What You Get"
    },
        {
        "name" : "Cover Me Up",
        "artist" : "Morgan Wallen",
        "album" :"Cover Me Up"
    },
        {
        "name" : "One Margarita",
        "artist" : "Luke Bryan",
        "album" :"One Margarita"
    },
        {
        "name" : "Happy Anywhere",
        "artist" : "Blake Shelton, Gwen Stefani",
        "album" :" Happy Anywhere"
    },
        {
        "name" : "Pretty Heart",
        "artist" : "Parker McCollum",
        "album" :"Pretty Heart"
    }
  ]
    return{
        "countryMusic" : countryMusics
    } 
}                  

function loadChristian() {
    //JSON - JavaScript Object Notation
    const christianMusics = [
        
    {
        "name" : "Who Am I",
        "artist" : "Casting Crowns",
        "album" : "Casting Crowns"
    },
        {
        "name" : "Speak To Me",
        "artist" : "Koryn Hawthorne",
        "album" : "The Story's Not Over"
    },
        {
        "name" : "I Still Believe",
        "artist" : "Jeremy Camp",
         "album" :"One Too Many"
    },
        {
        "name" : "Way Maker",
        "artist" : "Passion",
        "album" :"Way Maker"
    },
        {
        "name" : "Peace Be Still",
        "artist" : "Hope Darst",
        "album" :"Peace Be Still"
    },
        {
        "name" : "You Say",
        "artist" : "Lauren Daigle",
        "album" :"Look Up Child"
    },
        {
        "name" : "Rescue",
        "artist" : "Lauren Daigle",
        "album" :"Look Up Child"
    },
        {
        "name" : "I Can Only Imagine",
        "artist" : "MercyMe",
        "album" :"Almost There"
    },
        {
        "name" : "Still Rolling Stone",
        "artist" : "Lauren Daigle",
        "album" :"Look Up Child"
    },
        {
        "name" : "My Weapon",
        "artist" : "Natalie Grant",
        "album" :"My Weapon"
    }
  ]
    return{
        "christianMusic" : christianMusics
    } 
}                


function loadPop() {
    //JSON - JavaScript Object Notation
    const popMusics = [
        
    {
        "name" : "Blinding Lights",
        "artist" : "The Weekend",
        "album" : "After Hours"
    },
        {
        "name" : "Break My Heart",
        "artist" : "Dua Lipa",
        "album" : "Break My Heart"
    },
        {
        "name" : "Before You Go",
        "artist" : "Lewis Capaldi",
         "album" :"Before You Go"
    },
        {
        "name" : "Rare",
        "artist" : "Selena Gomez",
        "album" :"Rare"
    },
        {
        "name" : "Midnight Sky",
        "artist" : "Miley Cyrus",
        "album" :"Midnight Sky"
    },
        {
        "name" : "Falling",
        "artist" : "Harry Styles",
        "album" :"Fine Line"
    },
        {
        "name" : "The Man",
        "artist" : "Taylor Swift",
        "album" :"Lover"
    },
        {
        "name" : "Heather",
        "artist" : "Conan Gray",
        "album" :"Kid Krow"
    },
        {
        "name" : "To Die For",
        "artist" : "Sam Smith",
        "album" :"To Die For"
    },
        {
        "name" : "Selfish",
        "artist" : "Madison Beer",
        "album" :"Selfish"
    }
  ]
    return{
        "popMusic" : popMusics
    } 
}   

