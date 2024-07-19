const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
let n = Number(userInput[0]);
let arr = JSON.parse(userInput[1]);
arr=arr.filter(val=>val<=n);
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
      for (const coin of coins) {
          if (i - coin >= 0) {
              dp[i] = Math.min(dp[i], dp[i - coin] + 1);
          }
      }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

  console.log(coinChange(arr,n));
});