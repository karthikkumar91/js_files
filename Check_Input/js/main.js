function validation()
{
    var x=document.getElementById('first');
    if(x.value==="")
    {
        // console.log("Plz Enter Name");
        document.getElementById("first").placeholder = "plz Write Name..";
        x.style.border="2px solid red";
    }
    else
    {
        x.style.border="1px solid green";
    }
    var y=document.getElementById('second');
    if(y.value==="")
    {
        document.getElementById("second").placeholder = "plz Write Name..";
        y.style.border="2px solid red";    
    }
   else
    {
        y.style.border="1px solid green";
    }
}