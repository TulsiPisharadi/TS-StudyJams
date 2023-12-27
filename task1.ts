function registerUser(name:string,birthYear:number){

    const value:boolean=checkAge(birthYear);
    if(value){
        console.log("The User name is :",name)
        console.log("Thebirthyear is:",birthYear)
        console.log("User Registration Success !");
    }
    else{

        console.log("User Registration failed ");
    }
}
function checkAge(birthYear:number): boolean {
    const year=2023;
    let age=year-birthYear;
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}

registerUser("tulsi",2004)

export{}