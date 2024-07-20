let a=[]
while(true)
    {
choice=prompt("[1] ADD DATA \n [2] DISPLAY DATA \n [3] EDIT DATA \n [4] DELETE DATA \n [5] EXIT \n Enter Your Choice");
if(choice==1)
    {
    data=prompt("add data");
    a.push(data)
    alert("value added")
    }
else if(choice==2)
        {
            str=``
        for(i in a)
            {
                str+=`[${+i+1}] ${a[i]}  \n`
            }
            alert(str)
        }
else if(choice==3)
    {
        edi=prompt(`enter the index number to be changed`);
        edits=prompt(`enter the value to be added`)
        a[+edi-1]=edits
        alert("value changed")
    }
else if(choice==4)
        {
            del=prompt(`enter the index number to be deleted`);
            a.splice(+del-1,1)
            alert("item deleted")
        }   
else if(choice==5)
    {
        break;
    }
else
{
    alert("invalid choice")
}
    }