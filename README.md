# Calculator-API


A Basic Calculator API using express.js

port : 3001
hostname : localhost 


Having Four API:

/sum : Perform Summation for an *array* of numbers 
/div : Perform Division of two numbers
/prod : Performs Product operation on an *array* of numbers
/diff : Performs difference Operation. --> USED Math.abs() function to make differnce positive i.e. Math.abs(x-y)


 format for JSON input for /sum and /prod as :
{
    "numbers" : [1,2,3,4.....]
}

 format for other function :

{
    "firstnum" : x,
    "Secondnum" : y
}



