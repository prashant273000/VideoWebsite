//TEST 1 - HOW TO RETURN THE PROMISE

// const waitTimeMs = 100;
// const callback = ()=>{
//     console.log(`I print after ${waitTimeMs}`);
// }
// console.log(`I print first.`);
// setTimeout(callback,waitTimeMs)
// console.log(`I print second.`);
// function sleep(ms){
//     return new Promise((resolve)=>{
//         setTimeout(resolve,ms)
//     });
// }
// await sleep(2000)
// console.log("Done")

//TEST 2 - PROMISES

// function applyDamage(damage,currentHp){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const newHp = currentHp-damage;
//             if(damage>=currentHp){
//                 resolve(`The player has fallen with ${newHp} hp.`);
//             }
//             else{
//                 reject(`The player has ${newHp} hp left.`)
//             }
//         },1000)})
// }

//METHOD 1 - .THEN .CATCH METHOD
// applyDamage(80,100).then(
//     (message)=>{
//         console.log(`The promise has finally this message = ${message}`);
//     }
// ).catch(
//     (message)=>{
//         console.log(`The promise was rejected has finally this message = ${message}`);
//     }
// )

//METHOD 2 - AWAIT MODERN METHOD

// const message = await applyDamage(100,20)
// console.log(message); 

//HERE WE ARE NOT ABLE TO KNOW WEATHER THE PROMISE HAS BEEN RESOLVED OR BEEN REJECTED SO WE USE THE TRY CATCH

// try{
//     const message = await applyDamage(20,100); //damage, current hp
//     console.log(`Resolved : ${message}`)
// }
// catch(error){
//     console.log(`Rejected : ${error}`)
// }

//METHOD 3 - USING ASYNC WITH AWAIT - ASYNC KEYWORD AUTOMATICALLY RETURNS RESOLVED PROMISE WITH THE KEYWORD RETURN AND REJECTED PROMISE WITH THE KEYWORD THROW

// async function applyDamage(damage, currentHp) {
//     const newHp = currentHp - damage;

//     if (damage >= currentHp) {
//         return `The player has fallen with ${newHp} hp.`;
//     }

//     throw new Error(`The player has ${newHp} hp left.`);
// }

// try {
//     const message = await applyDamage(20, 100);
//     console.log(`Resolved: ${message}`);
// } catch (error) {
//     console.log(`Rejected: ${error.message}`);
// }

try{
    const speed = car.speed;
}catch(error){
    console.log("An unknown error occured :", error.message);
}