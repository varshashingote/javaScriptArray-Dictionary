let sameBirthMonth = new Map()
for(month = 1 ; month<=12 ; month++ )
{
    sameBirthMonth.set(month,0)
}

let count  = 0
while(count<=50)
{
    let birthMonth = (Math.floor(Math.random()*100) % 12 )+1 
    let year = "199"+Math.floor(Math.random()*10)%10  
    if (year == "1998" || year == "1999") 
    {
        sameBirthMonth.set(birthMonth,sameBirthMonth.get(birthMonth)+1)    
        count++
    }
}
console.log("Number of people having birthday in same month");
console.log("month : count");
for(key of sameBirthMonth.keys())
{
    console.log(key+" : "+sameBirthMonth.get(key))
}

//2-

let diceMap = new Map()
diceMap.set(1,0)
diceMap.set(2,0)
diceMap.set(3,0)
diceMap.set(4,0)
diceMap.set(5,0)
diceMap.set(6,0)
let limitNotReached = 1
while (limitNotReached == 1 ) {
    let rollDice = (Math.floor(Math.random()*10) %6 )+ 1
    diceMap.set(rollDice,diceMap.get(rollDice)+1)
    for(let key of diceMap.keys())
    {
        if (diceMap.get(key)  == 10) {
            limitNotReached = 0
            console.log("The maximum repeated number  is :" +key);
        }
    } 
}

min = 10
for (let key of diceMap.keys())
{
    if (diceMap.get(key) < min)
    {
        min = diceMap.get(key)
        var min_key = key
    }
}
console.log("The minimum repeated number is :"+min_key);