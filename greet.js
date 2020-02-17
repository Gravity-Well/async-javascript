function saySomethingNice(){
    console.log(`Nice to meet you`);
    
}
function greet(name){
    setTimeout(()=>{
        console.log(`Hello ${name}`);
    },1000);
   
    saySomethingNice();

}
greet('Robert');
