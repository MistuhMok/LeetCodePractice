//https://leetcode.com/problems/rank-teams-by-votes/

/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    const voteLength = votes[0].length;
    const rankMap = new Map();

    //Create a map of letter to an array of each rankings count
    votes.forEach(vote =>{
        for(let i=0; i < voteLength; i++){
            if(!rankMap.has(vote[i])){
                rankMap.set(vote[i], Array(voteLength).fill(0));
            }
            
            const cnt = rankMap.get(vote[i]);
            cnt[i]++;
        }
    });
    
    //arr = [['letter', [rankings count],...] e.g. [['A',[3,0,1]], ...]
    const arr = [...rankMap];
    arr.sort((a, b) => {
        for(let i=0; i<voteLength; i++){
            //Check if each rankings count is different and sort in descending order
            if(a[1][i] != b[1][i]){
                return b[1][i] - a[1][i]; 
            }
        }
        
        //If all votes were the same rank by ID
        return a[0]>b[0];
    });
    
    let res="";
    for(let rank of arr){
        res += rank[0];
    }
    
    return res;
};
