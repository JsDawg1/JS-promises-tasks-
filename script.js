
//Task 1


// const Promise1 = fetch('https://v2.jokeapi.dev/joke/Any')
// .then((response)=>{
//     return response.json()
// })

// .then((data)=>{
//     console.log(data);
// })

// .catch((error)=>{
//     console.log(`Punda yena achu ne theriyama punda mari entha ${error} ah vara vachita`);
    
// })


//Task 2

// const Promise1 = new Promise((resolve, reject)=>{
//     function check(){
//         let error = false;
//         if(!error){
           
//             setTimeout(()=>{
//                 resolve("Task done")
//             }, 3000)
//         }
//         else{
//             reject("Condition not satisfies")
//         }
//     }
//     check();
    
// })

// Promise1.then((data)=>{
//     console.log(data);
// })

// .catch((error)=>{
//     console.log(error)
// })

// function function1(){
//     return new Promise((resolve, reject)=>{
//         let error = false;
//         if(!error){
//             setTimeout(()=>{
//                 resolve("Resolve of function1")
//             }, 2000)
//         }
//         else{
//             reject("Rejection of function1 some error")
//         }
//     })
// }


//Task 3

// function function2(){
//     return new Promise((resolve, reject)=>{
//         let error = false;
//         if(!error){
//             setTimeout(()=>{
//                 resolve("Resolve of function 2")
//             }, 3000)
//         }
//         else{
//             reject("Reject of function 2 , some error")
//         }
//     })
// }

// function1()
// .then((Data)=>{
//     console.log(Data)
//     return function2();
// })

// .then((data2)=>{
//     console.log(data2)
// })

// .catch((error)=>{
//     console.log(error)
// })
 


// Promise using Promise.any()

// function function1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve([1, 2, 3, 4])
//         }, 2000)
//     })
// }

// function function2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve([5, 6, 7, 8])
//         }, 5000)
//     })
// }

// Promise.all([function1(), function2()])
// .then((arr)=>{
//     let finalData = arr.reduce((acc, cur)=>{
//         return acc.concat(cur);
//     }, [])
//     console.log(finalData)
// })


// .catch((error)=>{
//     console.log(error)
// })

//Task 4

// function function1(){
//     return new Promise((resolve, reject)=>{
//         error = false;
//         setTimeout(function(){
//             if(!error){
//                 resolve("Promise1 without any issues")
//             }
//             else{
//                 reject("Promise1 with issue")
//             }
//         }, 3000)
//     })
// }

// function function2(){
//     return new Promise((resolve, reject)=>{
//        error = false;
//        if(!error){
//            resolve("Promise2 without any issues")
//        }
//        else{
//            reject("Promise2 with issue")
//        }
//    })
   
// }

// Promise.race([function1(), function2()])
// .then((data)=>{
//     console.log(data);
// })

// .catch((error)=>{
//     console.log(error)
// })


//Task 5

// function function1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve([1, 2, 3, 4])
//         }, 2000)
//     })
// }

// function function2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve([5, 6, 7, 8])
//         }, 5000)
//     })
// }

// Promise.all([function1(), function2()])
// .then((arr)=>{
//     let finalData = arr.reduce((acc, cur)=>{
//         return acc.concat(cur);
//     }, [])
//     console.log(finalData)
// })


// .catch((error)=>{
//     console.log(error)
// })