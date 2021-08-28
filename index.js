// object destructing
const color =['blue','black','white']

const [first,second,third] =color;
console.log(first);

const person ={
    name:'Mehek',
    place:'CKM',
    branch:'cs',

}
const {name,place,branchname} = person;
console.log(name)

// spread operator
const one =[2,3,5,7]
const two =[8,9,10,11]

const combine= [...one, ...two]
console.log(combine)
