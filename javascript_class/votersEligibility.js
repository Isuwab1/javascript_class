let voters = [{
name: "Isuwa",
age: 20,
hasVotersCard: true, 
},
{
name: "Bawa",
age: 25,
hasVotersCard: true, 
},
{
name: "Abdulkhadir",
age: 20,
hasVotersCard: true, 
}
]
    let eligibleVoter = []
    let disqualifiedVoters = []
for (let i= 0; i < voters.length; i++) {
    let voter = voters [i];
    if (voter.age >= 18 && voter.hasVotersCard === true) {
        eligibleVoter.push (voter.name);
    }
    else
        disqualifiedVoters.push (voter.name);
}
console.log(`Eligible Voter: ${eligibleVoter.join (", ")}`)
setTimeout (()=>{
    console.log (`Not qualified: ${disqualifiedVoters.length === 0?0: disqualifiedVoters.join(" ")}`)
}, 4000
),
console.log (`Total Eligible Voters: ${eligibleVoter.length}`)