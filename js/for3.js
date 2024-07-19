for(i=1;i<=5;i++)
    {
        str=" "
        for(k=1;k<=5-i;k++)
            {
                str+=" "
            }
        for(j=1;j<=i;j++)
        {
            str+="* ";
        }
    
        console.log(str);
    }