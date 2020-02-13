//https://leetcode.com/problems/tweet-counts-per-frequency/

var TweetCounts = function() {
  this.log = {};
};

/** 
 * @param {string} tweetName 
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
  if (!this.log[tweetName]) this.log[tweetName] = [];
  this.log[tweetName].push(time);
};

/** 
 * @param {string} freq 
 * @param {string} tweetName 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
  if (!this.log[tweetName]) return [];
  const delta = ({minute: 60, hour: 3600, day: 86400})[freq];
  const ans = Array(Math.ceil((endTime - startTime + 1) / delta)).fill(0);
  for (const time of this.log[tweetName]) {
    if (time < startTime || time > endTime) continue;
    const index = Math.floor((time - startTime) / delta);
    ans[index]++;
  }
  return ans;
};

/** 
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
