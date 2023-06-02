let users = [
    {firstname:'indra',lastname:'sena',age:20},
    { firstname: 'Destratum', lastname: 'solutions', age: 19 },
    { firstname: 'taminadu', lastname: 'chennai', age: 18 }
    //"bfhnfbbvhnfbfbf"
]



console.log(users.filter(x => x.age<20).map((x) => x.firstname+" "+x.lastname));
const ages = [32,33,16,40];
const result = ages.filter(checkadult);
function checkadult(age){
    return age >= 18;
}