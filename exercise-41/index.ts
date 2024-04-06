let magicianss_Names : string[] = ["Harry Houdini","David Copperfield","Dynamo","Criss Angel"]

function shoew_magician(magicianss_Names:string[]){
     magicianss_Names.forEach((items)=>{console.log(items);
    })
}

let copy  = makee_greet([...magicianss_Names])

function makee_greet(magicianss_Names:string[]){
    let copy = [...magicianss_Names]
    
    for(let i = 0 ; i < copy.length; i++){
      copy [i] = "The great " + " " +  copy [i]  ;
    }
    return copy
}
console.log("ORIGINAL LIST : \n");
shoew_magician(magicianss_Names)
console.log("\nGREAT LIST : \n");
shoew_magician(copy)
 
 
 