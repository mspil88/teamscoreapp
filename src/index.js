let buttons = document.querySelectorAll("button");
let team1Score = document.getElementById("team1-score");
let team2Score = document.getElementById("team2-score");
let team3Score = document.getElementById("team3-score");
let team4Score = document.getElementById("team4-score");
let hamburger = document.getElementById("hamburger");
let images = document.querySelectorAll("img");

const today = new Date().toLocaleDateString();


hamburger.addEventListener("click", ()=> {
    console.log("Hamburger Clicked");
    var learningDiv = document.createElement("div");
    learningDiv.className = "learning-intention-div";
    var learningIntention = document.createElement("input");
    learningIntention.type = "text";
    learningIntention.className = "learning-intention-input";
    var learning = learningDiv.appendChild(learningIntention);
    

    document.querySelector(".teams-group").appendChild(learning);
    
})


let scoreContainer = [];

//to do, add object population function to reflect adjusted scores

function addPoint(team) {
    let val = parseInt(team.textContent);
    val ++; 
    team.innerHTML = val;
}

function undoPoint(team) {
    let val = parseInt(team.textContent);
    val --; 
    team.innerHTML = val;
}

function resetPoints(team) {
    team.innerHTML = 0;
}

function addTeamPoint(team) {
    let val = parseInt(team.textContent);
    val = val + 5;
    team.innerHTML = val;
}

function scores(date, team, val) {
    return {date: date,
            team: team,
            val: val,
            key: date.concat(team)}
}

function teamMembership(arr, obj) {
    for(let i in arr) {
        if(arr[i].key == obj.key) {
            console.log("true");
            return true;
        }
    }
    return false;
}



function updateScores(team_obj) {
    console.log("Calling update function, showing inputs")
    //console.log(scoreContainer);
    console.log(scoreContainer);
    console.log(team_obj.key);
    membership = teamMembership(scoreContainer, team_obj);
    if(!membership) {
        temp_obj = scores(team_obj.date, team_obj.team, 0);
        console.log("push temp");
        scoreContainer.push(temp_obj); 
    }

    for(let i in scoreContainer) {
        
        //console.log(scoreContainer[i]);
        if(scoreContainer[i].key === team_obj.key) {
             scoreContainer[i].val += team_obj.val;
             console.log("found")}
        //  } else {
        //      scoreContainer.push(team_obj);
        //      console.log("not found");
        //  }
    }
}

function setValues(team, actionType, team_obj) {
    console.log(actionType);
    if(actionType.includes("add")) {
        addPoint(team);
        team_obj.val ++;
        console.log(team_obj);
    } else if(actionType.includes("undo")) {
        console.log("undo");
        undoPoint(team);
        team_obj.val --;
    } else if(actionType.includes("reset")) {
        resetPoints(team);
    }
}
 
buttons.forEach((btn)=> {
    btn.addEventListener('click', (e)=> {
        const actionsClass = e.currentTarget.className;
        const actions = e.currentTarget.id;
        console.log(actions);
        if(actions == "team1-btn") {
            let team1_obj = scores(today, "team1", 0)
            setValues(team1Score, actionsClass, team1_obj);
            updateScores(team1_obj);
            
        } else if(actions == "team2-btn") {
            let team2_obj = scores(today, "team2", 0)
            setValues(team2Score, actionsClass, team2_obj);
            updateScores(team2_obj);
        } else if(actions == "team3-btn") {
            let team3_obj = scores(today, "team3", 0)
            setValues(team3Score, actionsClass, team3_obj);
            updateScores(team3_obj);
        } else if(actions == "team4-btn") {
            let team4_obj = scores(today, "team4", 0)
            setValues(team4Score, actionsClass, team4_obj);
            updateScores(team4_obj);
        }
    })
})

//update scores object
images.forEach((img)=> {
    img.addEventListener('click', (e)=> {
        const image = e.currentTarget.id;
        console.log(image);
        if(image == "team1-img") {
            addTeamPoint(team1Score);
        } else if(image == "team2-img") {
            addTeamPoint(team2Score);
        } else if(image == "team3-img") {
            addTeamPoint(team3Score);
        } else if(image == "team4-img") {
            addTeamPoint(team4Score);
        }
    })})
