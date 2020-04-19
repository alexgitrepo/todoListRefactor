export interface IArray {
   name:string
   age:number
}

let someArray :Array<IArray>=new Array({name:'Ivan',age:22})
console.log(someArray)
