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

function add()
{
    var node = document.createElement("input");
    var butt=document.createElement("p");
    var dele=document.createElement("span");
    var textnode = document.createTextNode("Enter Child Name:-->");
    var textnode1 = document.createTextNode("-");
    dele.setAttribute('onClick','remove()');

    butt.appendChild(textnode);
    dele.appendChild(textnode1);

    //butt.className="one";
    //dele.className="two";
    butt.id="one";
    dele.id="two";
    
    butt.appendChild(node);
    butt.appendChild(dele);
    var child=document.getElementById('main');
    child.appendChild(butt);
}
function remove()
{
    var remo=document.getElementById('main');
    remo.removeChild(remo.lastChild);
}

