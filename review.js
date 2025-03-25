// 1

    function oner(){
        let one = 1
        console.log(one)
    }
    // console.log(one)
    // You get an error that says one is not defined because one isn't a global variable, it is a local variable, meaning it can only be accessed through the funciton. 


// 2

    // Hoisting is when Javascript takes all variables and puts them at the top, before the code is even compiled. However, if a variable is declared with the wrong variable type then it won't be able to utilize that variable until it has been declared.

    // Hoisting affects var in the way that if var is declared anywhere on the file, then Javascript will be able to use it. However, if its a let variable then it only allows you to use it after the variable has been established, otherwise it gives you a referenceError. However, Const will make the code not run at all if the variable is shown before the const declaration, as it will result in a syntax error and the code will not run. 
    // Var
        // bobber = 4
        // console.log(bobber) // logs 4
        // var bobber

    // Let (ReferenceError)
        // bobby = 2
        // console.log(bobby) // logs 2
        // let bobby

    // Const (Syntax Error)
        // Bobbington = 4
        // console.log(Bobbington) // logs 4
        // const Bobbington

//3

    let scores = [2,3,10,39,100]
    let result = scores.map((x)=>{
        return x ** 2
    })
    console.log(result)

//4
    function Filterer(lister){
        return lister.filter((x)=>{
            return x > 50
        })
    }
        let filtered = Filterer(scores)
        console.log(filtered)

//5
