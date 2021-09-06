

const today = new Date().toLocaleDateString();

let scoresFromLocal = Object.values(JSON.parse(localStorage.getItem("scores")));    

TESTER = document.getElementById('team-scores-chart');
// Plotly.newPlot( TESTER, [{
// 	x: [1, 2, 3, 4, 5],
// 	y: [1, 2, 4, 8, 16],
//     z: [10, 4, 1, 8, 16] }], {
// 	margin: { t: 0 } } );

const team1Color =  [255, 0, 0];
const team2Color =  [0, 128, 0,];
const team3Color =  [255, 255, 0];
const team4Color =  [0, 0, 255];

function rgb(teamColor){
    let r = teamColor[0];
    let g = teamColor[1];
    let b = teamColor[2];
    return `"rgb("${r}", "${g}", "${b}")"`;
  }



// let trace1 = {
//     x: [1, 2, 3, 4, 5],
// 	y: [1, 2, 4, 8, 16],
//     mode: 'lines',
//     name: 'team1',
//     line: {shape: 'spline', 
//            color: "rgba(255, 0, 0, 0.616)"},
//     type: 'scatter'
// };

// let trace2 = {
//     x: [1, 2, 3, 4, 5],
// 	y: [6, 1, 8, 12, 11],
//     mode: 'lines',
//     name: 'team2',
//     line: {shape: 'spline',
//           color: "rgba(0, 128, 0, 0.603)"},
//     type: 'scatter'
// };


// let trace3 = {
//     x: [1, 2, 3, 4, 5],
// 	y: [0, 1, 2, 1, 4],
//     mode: 'lines',
//     name: 'team3',
//     line: {shape: 'spline',
//           color: "rgba(255, 255, 0, 0.5)"},
//     type: 'scatter'
// };

// let trace4 = {
//     x: [1, 2, 3, 4, 5],
// 	y: [12, 15, 3, 8, 2],
//     mode: 'lines',
//     name: 'team4',
//     line: {shape: 'spline',
//            color: "rgba(0, 0, 255, 0.562)"},
//     type: 'scatter'
// };


let fakeData = [{date: "27/08/2021", team: "team1", val: 8, weekIdx: 1, key: "27/08/2021team1"},
                {date: "27/08/2021", team: "team2", val: 12, weekIdx: 1, key: "27/08/2021team1"},
                {date: "27/08/2021", team: "team3", val: 4, weekIdx: 1, key: "27/08/2021team1"},
                {date: "27/08/2021", team: "team4", val: 7, weekIdx: 1, key: "27/08/2021team1"},
                {date: "28/08/2021", team: "team1", val: 5, weekIdx: 1, key: "27/08/2021team1"},
                {date: "28/08/2021", team: "team2", val: 1, weekIdx: 1, key: "27/08/2021team1"},
                {date: "28/08/2021", team: "team3", val: 14, weekIdx: 1, key: "27/08/2021team1"},
                {date: "28/08/2021", team: "team4", val: 6, weekIdx: 1, key: "27/08/2021team1"},
                {date: "29/08/2021", team: "team1", val: 5, weekIdx: 1, key: "27/08/2021team1"},
                {date: "29/08/2021", team: "team2", val: 6, weekIdx: 1, key: "27/08/2021team1"},
                {date: "29/08/2021", team: "team3", val: 7, weekIdx: 1, key: "27/08/2021team1"},
                {date: "29/08/2021", team: "team4", val: 8, weekIdx: 1, key: "27/08/2021team1"},
                {date: "30/08/2021", team: "team1", val: 12, weekIdx: 2, key: "27/08/2021team1"},
                {date: "30/08/2021", team: "team2", val: 11, weekIdx: 2,key: "27/08/2021team1"},
                {date: "30/08/2021", team: "team3", val: 5, weekIdx: 2,key: "27/08/2021team1"},
                {date: "30/08/2021", team: "team4", val: 2, weekIdx: 2,key: "27/08/2021team1"},
                {date: "31/08/2021", team: "team1", val: 1, weekIdx: 2,key: "27/08/2021team1"},
                {date: "31/08/2021", team: "team2", val: 3, weekIdx: 2,key: "27/08/2021team1"},
                {date: "31/08/2021", team: "team3", val: 2, weekIdx: 2,key: "27/08/2021team1"},
                {date: "31/08/2021", team: "team4", val: 4, weekIdx: 2,key: "27/08/2021team1"},
                {date: "01/09/2021", team: "team1", val: 7, weekIdx: 2,key: "27/08/2021team1"},
                {date: "01/09/2021", team: "team2", val: 7, weekIdx: 2,key: "27/08/2021team1"},
                {date: "01/09/2021", team: "team3", val: 6, weekIdx: 2,key: "27/08/2021team1"},
                {date: "01/09/2021", team: "team4", val: 3, weekIdx: 2,key: "27/08/2021team1"}];


                
let team1y = []
let team2y = []
let team3y = []
let team4y = []


function updateScoreArrays(data) {
  for(let i of data) {
    if(i.team == "team1") {
      team1y.push(i.val);}
    else if(i.team == "team2") {
      team2y.push(i.val); }
    else if(i.team == "team3") {
      team3y.push(i.val); }
    else if(i.team == "team4") {
      team4y.push(i.val); }
  }
}

function updateDates(data) {
  return data.reduce((x_axis, d) => {
    if(!x_axis.includes(d.date)) {x_axis.push(d.date);}
    return x_axis;
  }, []);
}

function teamColors(team) {
    if(team == "team1") {
      return "rgba(255, 0, 0, 0.616)";
    } else if(team == "team2") {
        return "rgba(0, 128, 0, 0.603)";
    } else if(team == "team3") {
        return "rgba(255, 255, 0, 0.5)";
    } else if(team == "team4") {
        return "rgba(0, 0, 255, 0.562)";
    }
  }
  
function createPlotlyTrace(x, y, team) {
    return {
      x: x,
      y: y,
      mode: 'bar',
      name: team,
      line: {shape: 'spline',
           color: teamColors(team)},
      type: 'scatter'
    }
  }

let x_axis = updateDates(scoresFromLocal);


updateScoreArrays(scoresFromLocal);
console.log(team3y);
trace1 = createPlotlyTrace(x_axis, team1y, 'team1');
trace2 = createPlotlyTrace(x_axis, team2y, 'team2');
trace3 = createPlotlyTrace(x_axis, team3y, 'team3');
trace4 = createPlotlyTrace(x_axis, team4y, 'team4');

let data = [trace1, trace2, trace3, trace4];

let layout = {
    title: 'Team scores over time',
    xaxis: {
        autorange: true,
        rangeselector: {buttons: [
            {
                count: 1,
                label: '1m',
                step: 'month',
                stepmode: 'backward'
            },
            {step: 'all'}
        ]}
    }
};

Plotly.newPlot( TESTER, data, layout);    

// this week last week, make div team color


const start = new Date("2021-08-23");
console.log(start);

function createDateHash(startDate) {
  
    let cnt = 1;
    let weekNumber = 1;
    let tempDate = startDate;
    let obj = {};
    obj[startDate.toLocaleDateString()] = cnt;
    let dateMapArr = [];
    dateMapArr.push(obj);
    //obj.startDate = 1;
    for(let i = 1; i <= 365; i++) {
      let next = tempDate.setDate(tempDate.getDate() + 1);
       if(i % 7 == 0) {
         cnt ++;
       }
      //cnt++;
      let tempObj = {};
      tempObj[new Date(next).toLocaleDateString()] = cnt;
      dateMapArr.push(tempObj);
    }
    return dateMapArr; 
  }
  
let datesHash = createDateHash(start);

  
  // need to add this into the scores function to create week idx value
function thisWeekLastWeekIdx(datesHash, today) {
    for(let i of datesHash) {
        if(today in i) {
            return i[today];
        }
    }
}

let thisWeekIdx = thisWeekLastWeekIdx(datesHash, today);

console.log(thisWeekIdx);

let team1ScoreTw = 0;
let team2ScoreTw = 0;
let team3ScoreTw = 0;
let team4ScoreTw = 0;
let team1ScoreLw = 0;
let team2ScoreLw = 0;
let team3ScoreLw = 0;
let team4ScoreLw = 0;

function weeklyScores(scoresHash, thisWeekIdx) {

    let lastWeekIdx = thisWeekIdx - 1;   
    let thisLastWeekArr = [thisWeekIdx, lastWeekIdx];
    
    //put below in function
    for(let j in scoresHash) {
        if(scoresHash[j].weekIdx == thisWeekIdx) {
            if(scoresHash[j].team == "team1") {
                team1ScoreTw += scoresHash[j].val;
            } else if(scoresHash[j].team == "team2") {
                team2ScoreTw += scoresHash[j].val;
            }  else if(scoresHash[j].team == "team3") {
                team3ScoreTw += scoresHash[j].val;
            }  else if(scoresHash[j].team == "team4") {
                team4ScoreTw += scoresHash[j].val;
            };
            //collectScores(scoresHash[j], team1ScoreTw, team2ScoreTw, team3ScoreTw, team4ScoreTw);
        } else if(scoresHash[j].weekIdx == lastWeekIdx) {
            if(scoresHash[j].team == "team1") {
                team1ScoreLw += scoresHash[j].val;
            } else if(scoresHash[j].team == "team2") {
                team2ScoreLw += scoresHash[j].val;
            }  else if(scoresHash[j].team == "team3") {
                team3ScoreLw += scoresHash[j].val;
            }  else if(scoresHash[j].team == "team4") {
                team4ScoreLw += scoresHash[j].val;
            };      
    }};
    //return thisWeekScores;
    let thisWeekScoresObj = {'team1': team1ScoreTw, 'team2': team2ScoreTw, 'team3': team3ScoreTw, 'team4': team4ScoreTw};
    let lastWeekScoresObj = {'team1': team1ScoreLw, 'team2': team2ScoreLw, 'team3': team3ScoreLw, 'team4': team4ScoreLw};
    
    return [thisWeekScoresObj, lastWeekScoresObj];
};

// function collectScores(entry, s1, s2, s3, s4) {
//     if(entry.team == "team1") {
//         s1 += entry.val;
//     } else if(entry.team == "team2") {
//         s2 += entry.val;
//     }  else if(entry.team == "team3") {
//         s3 += entry.val;
//     }  else if(entry.team == "team4") {
//         s4 += entry.val;
//     };
// }

 function maxScore(obj) {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a :b);   
 }

//get key with max value from both and add to inner HTML in boxes


console.log(scoresFromLocal);

let thisWeekLastWeekScores = weeklyScores(scoresFromLocal, thisWeekIdx);
let thisWeekWinner = maxScore(thisWeekLastWeekScores[0]);
let lastWeekWinner = maxScore(thisWeekLastWeekScores[1]);

let lastWeekWinner1 = document.getElementById("lastweek-team1");
let thisWeekWinner1 = document.getElementById("thisweek-team1");

console.log(thisWeekWinner);
console.log(lastWeekWinner);

// thisWeekWinner1.innerHTML = thisWeekWinner;
// lastWeekWinner1.innerHTML = lastWeekWinner;

function setWinner(winningTeam, week) {
    week.innerHTML = winningTeam;
    week.style.color = teamColors(winningTeam);
}

setWinner(thisWeekWinner, thisWeekWinner1);
setWinner(lastWeekWinner, lastWeekWinner1);

