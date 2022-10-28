console.log("hello");
// let user=document.querySelector("#s1").innerHTML;
// let cpu=document.querySelector("#s2").innerHTML;
document.querySelector("#p1").addEventListener("click",pe1);
document.querySelector("#p2").addEventListener("click",pe2);
document.querySelector("#p3").addEventListener("click",pe3);
document.querySelector("#s3").addEventListener("click",rest);



function pe1(){

    document.querySelector("#p2").classList.add("hidden");
    document.querySelector("#p3").classList.add("hidden");


    let ran=Math.floor(Math.random()* 3 );
    console.log("ok");
    console.log(ran);
    if(ran==0){
        document.querySelector("#p4").classList.remove("hidden");
    }
    
    if(ran==1){
        document.querySelector("#p5").classList.remove("hidden");
        (document.querySelector("#s1").innerHTML)=Number(document.querySelector("#s1").innerHTML) + 1;
        
    }
    if(ran==2){
        (document.querySelector("#s2").innerHTML)=Number(document.querySelector("#s2").innerHTML) + 1;
        document.querySelector("#p6").classList.remove("hidden");
    }
    


}

function pe2(){
    document.querySelector("#p1").classList.add("hidden");
    document.querySelector("#p3").classList.add("hidden");
    let ran=Math.floor(Math.random() * 3);

    if(ran == 0){
        document.querySelector("#s2").innerHTML=Number(document.querySelector("#s2").innerHTML) + 1;
        document.querySelector("#p4").classList.remove("hidden");
    }
    if(ran == 1){
        document.querySelector("#p5").classList.remove("hidden");
    }
    if(ran == 2 ){
        document.querySelector("#s1").innerHTML=Number(document.querySelector("#s1").innerHTML) + 1;
        document.querySelector("#p6").classList.remove("hidden");
    }
   
}

function pe3(){
    document.querySelector("#p1").classList.add("hidden");
    document.querySelector("#p2").classList.add("hidden");
    let ran=Math.floor(Math.random() * 3);

    if(ran == 0){
        document.querySelector("#s1").innerHTML=Number(document.querySelector("#s2").innerHTML) + 1;
        document.querySelector("#p4").classList.remove("hidden");
    }
    if(ran == 1){
        document.querySelector("#s2").innerHTML=Number(document.querySelector("#s2").innerHTML) + 1;
        document.querySelector("#p5").classList.remove("hidden");
    }
    if(ran == 2 ){
        document.querySelector("#p6").classList.remove("hidden");
    }

}

function rest(){
    document.querySelector("#p1").classList.remove("hidden");
    document.querySelector("#p2").classList.remove("hidden");
    document.querySelector("#p3").classList.remove("hidden");
    document.querySelector("#p4").classList.add("hidden");
    document.querySelector("#p5").classList.add("hidden");
    document.querySelector("#p6").classList.add("hidden");

}
document.addEventListener("keydown",(e)=>{
    if(e.key == 'r'){
        rest();
    }
})

