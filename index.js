// function getScreen(){
//     return document.getElementById("screen").innerText;
// }
// alert(getScreen());
// function myFirstCode(){
//     var name='maxwell ezeugwu';
//     console.log(name)


// myFirstCode();


console.log("my name is")
console.error('this is an error');
console.warn("im warning you ");
const age =30;
const name='maxwell Ezeugwu'
console.log(age);
var a = 20;
var c= age + a;
//alert(c);
console.log(c);
var d=30 *c;
console.log(d);
var max=d/10;
console.log(max);
// we us const when we dont want to change the variable in the future.
//  whenever you declare const you must assign it value.
console.log(typeof c);
//the above is to get the name of the data structure string'',
// number,boolean(true or false)etc.
console.log('My name is '+ name + ' and my age is '+age+' how do '+ age + ' you see it');
//the above is called concatenation meaning link together,
//you use + bothsides spacing quatation mark.
var hello=(`My name is ${name} and i am ${age} at last`);
//we can achieve the same result above by using `` called backtest 
//instead of quates and dollar sign $ instead of + and corybrasses'

console.log(hello);
console.log(name.length);
//we use the above to calculate number of words including spaces apart.
console.log(hello.toUpperCase());
// the above is to change the case it has a bracket as part of it method.
//a method is a function that is associated with an object

var s= 'technology,computer,laptop, code,java';
console.log(name.split(''));
//if you want to split by letter you put empthy quot 
console.log(name.substring(0,7).toUpperCase());
//the above code selects name from 0 to 7 meaning (MAXWELL) 
//and turn it to uppercase
console.log(s.split(','))
//we used comma inside the quot to split the variables into string
const numbers= new Array(1,2,3,4,5,6,3,'apple');
console.log(numbers);
const fruits=['Apples', 'Oranges', 'Mangoes', 20,true];
//in other languages you must have the same data type in array
// but here you see we have both string,number 
// fruits[3]='grapes';
//the above added grape to replace 20 from the itemse,
//but commenting the add on line 59 keeps it since i will leave line 66
console.log(fruits);
console.log(fruits[2]);
//the log above sellects the item counting from zero
fruits[3]='grapes';
console.log(fruits);
fruits.push('Oranges');
fruits.unshift('Cashewnut');
console.log(fruits);
//the above add fruits at the end(push)and in the beginning(unshift)
console.log(Array.isArray(fruits));
// this use to check true or false of an statement
fruits.pop();
console.log(fruits);
const names= ['maxwell','ifeanyi', 'chukwu','paul']
console.log(names.indexOf('ifeanyi'));
// the indexOf show the numeric position of the item in the Array
console.log(typeof 'maxwell') 
const person= {
    firstName:'max',
    lastName:'Anyi',
    age: 30,
    hobbies:['music', 'movie', 'sports'],
    address:{
        street:'50 main st',
        city:'boston',
        state:'MA'

         }
}
console.log(person.address);
//you use the code to get the address
console.log(person.lastName, person.address,person.firstName);
// you can add more than one object values using dots 
//and separating each with comma
console.log(person.hobbies[1]);//that will sellect number 1 item in the array
console.log(person.hobbies);
console.log(person.address.city)// you see the chains of commands to access city
//person.address.city
console.log(typeof person);
const {firstName, lastName}=person;//this is not like assigning 
//but pulling out data from (person) instead of console.log(person.firstName)
//we can just do console.log(firstName)like below
console.log(firstName);
const{address:{city}}=person;//pulling out inside object you use the colibrases
console.log(city);
person.email='marsino2004@yahoo.com'// adding email to person as a property of the object
console.log(person.email);
console.log(person);
const activity=[
    {id:1,
        text:'Take out trash',
        isCompleted:true       
},
{id:2,
    text:'meeting with boss',
    isCompleted:true       
},
{id:3,
    text:'dentist appt',
    isCompleted:false     
}

];
console.log(activity);
console.log(activity[0].text);
console.log(typeof activity[2].isCompleted);//becasued it is numbered 
//you have to put your choiced number into[]before .text like above
prompt('what is your age');//prompt behaves like alert it shows up in the browzer

// to convert to Json which is what API uses to talk to server you use JSON.stringify(activity);
//you the console.log after storing it in a new variable .example below.
const activityMax= JSON.stringify(activity);//NOTE: JSON must be in capital letter.
//you can store with any name of your choice 
//but use name that will hint you the function
console.log(activityMax);
//loop statement formate. for(let i=0; i<10; i++)
for(let i=0; i<=10; i++){
    console.log(i);
    // console.log(`for loop Number:${i}`);
}
 // it can also be written like this.
//  let i=0;
//  while(i<10);
//  {
//      console.log(`while loop number:${i}`); i++;
//  }
 for(let i=0;i < activity.length;i++){
     console.log(i)
     console.log(activity[i])//because you have stored i with the length of 
     //activity which 3 the console.log shows it all.
     //you can chose to show text only by console.log(activity[i].text)
 }

for(let just of activity){
    console.log(just.text)//I chose (just) using this method make (rename  activity to just. 
    //you must also add (of ie (just of) ) to work like above
    console.log(just.id);
}
var max,
max='ifeanyi';
console.log(max);
const x= 15
if(x==10){
    console.log('x is 10');
}
else if(x < 10){
    console.log('x is less  than 10');
}
 else if(x > 10){
    console.log('x is greater than 10' )
}

else{
    console.log('x is not 10') 
}
    console.log(x) // this will show 10 
    //because that is what you stored there
    //if you change the value you assigned to x to 20 
    //or at the (==) then 
    //the console will display (x is not 10 ) 
   // that is the power of 'if' statement
   const z = 6;
   const y = 11;
   if(z > 5 && y > 10){
       console.log('z is more than 5 or y is more than 10');
       // if &&(meaning "and") then both must be true 
       // before it can show in the console
        

   }

   const e = 4;
   const b = 6;
   if(e > 5 || b > 10){
       console.log('e is more than 5 or b is more 10' )
       //// there must be true of one of them because of this ||
       //for it to show in the console.this || means 'or' which is called 
       //double pipe character(||) 
   }
   else{console.log('e is less then 5 or b is less then 10')
   }