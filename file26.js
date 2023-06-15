// nested distructuring
const users=[
    {userId:1,firstName:'Anish',gender:'male'},
    {userId:2,firstName:'vikas',gender:'male'},
    {userId:3,firstName:'Nitish',gender:'male'}
]
const [{firstName},,{gender}]=users;
console.log(firstName);