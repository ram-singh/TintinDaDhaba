export async function fetchHeader(){
    try{
        // let response = await fetch("../db/header.json");
        const url = '../db/header.json';
        let response =  fetch(url);
        console.log("response : ",response);
        return response;
        
    } catch(err){
        alert(err);
    }
    
}