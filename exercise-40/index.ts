let magicians_Names : string[] = ["Harry Houdini","David Copperfield","Dynamo","Criss Angel"]

function show_magician(magicians_Names:string[]){
    console.log("ORIGINAL LIST : ");
     magicians_Names.forEach((items)=>{console.log(items);
    })
}


function make_greet(magicians_Names:string[]){
      for(let i = 0 ; i < magicians_Names.length; i++){
        magicians_Names[i] = "The great " +  magicians_Names [ i]  ;
      }
}

 make_greet(magicians_Names)
 show_magician(magicians_Names)






