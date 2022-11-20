
document.getElementsByTagName('input')[0].value;

//function to display the input
function display(num){

    
    document.getElementsByTagName('input')[0].value+=num;

}

//function to calculate using eval() function
function equal()
{
    var exp=document.getElementsByTagName('input')[0].value;
    
   if(exp)
    {
     document.getElementsByTagName('input')[0].value= eval(exp)
    }
    else 
    {alert("Invalid Input")}

}

//function to clear the input box
function clear()

{
    var text1 = document.getElementsByTagName('input')[0].value;

    var result = text1.substring(text1.length,text1.length);

    document.getElementsByTagName('input')[0].value=result;


/*let result = text.substring(1, 4);

document.getElementById("demo").innerHTML = result;


    var inputText=''
    document.getElementsByTagName('input')[0].value=inputText;
    }*/
    
}

//function to delete the input from right to left one by one
function delete1()
{
    var exp=document.getElementsByTagName('input')[0].value;

    document.getElementsByTagName('input')[0].value = exp.substring(0,exp.length-1);

    if(document.getElementsByTagName('input')[0].value==0)
    {
        /*clear();*/
        document.getElementsByTagName('input')[0].value=''
    }
}