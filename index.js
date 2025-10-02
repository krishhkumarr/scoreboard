

let awayGetter = document.getElementById('guest-score')
let awayCount = parseInt(awayGetter.textContent, 10)


let homeGetter = document.getElementById('home-score')
let homeCount = parseInt(homeGetter.textContent, 10)



function addScore(points, id){ 
    if (id == 'guest-score'){
        awayCount += points;
        awayGetter.textContent = awayCount
    }
    else{
        homeCount += points;
        homeGetter.textContent = homeCount;
    }
    
}


