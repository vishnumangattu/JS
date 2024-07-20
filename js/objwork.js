let ar=[]
while(true)
    {
choice=prompt("[1] ADD DATA \n [2] DISPLAY DATA \n [3] EDIT DATA \n [4] DELETE DATA \n [5] EXIT \n Enter Your Choice");
if(choice==1)
    {
    nme=prompt("add name");
    ages=prompt("add age");
    obj={name:nme,age:ages}
    ar.push(obj)
    alert("value added")
    }
else if(choice==2)
        {
            str=``
        for(i in ar)
            {
                str+=`[${+i+1}] ${JSON.stringify(ar[i].name)} ${JSON.stringify(ar[i].age)} \n`
            }
            alert(str)
        }
// else if(choice==3)
//     {
//         edi=prompt(`enter the index number to be changed`);
//         editnme=prompt(`enter the name to be added`)
//         editage=prompt(`enter the age to be added`)
        
//         alert("value changed")
//     }
else if(choice==4)
        {
            del=prompt(`enter the index number to be deleted`);
            ar.splice(+del-1,1)
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