# Calculator-API


A Basic Calculator API using express.js

port : 3001
hostname : localhost 


Having Four API:

/sum : Perform Summation for an *array* of numbers <br>
/div : Perform Division of two numbers <br>
/prod : Performs Product operation on an *array* of numbers<br>
/diff : Performs difference Operation. --> USED Math.abs() function to make differnce positive i.e. Math.abs(x-y)<br>


 format for JSON input for /sum and /prod as : <br>
{<br>
    "numbers" : [1,2,3,4.....]<br>
}                                           <br>
<br>
 format for other function :<br>
<br>
{<br>
    "firstnum" : x,<br>
    "Secondnum" : y<br>
}<br>



