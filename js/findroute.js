x= prompt("enter the time range")
function route(a)
{
if(a=="5-8"||a=="11-3"||a=="9-5")
    {
      return "the best route is highway"  
    }
else if(a=="8-11"||a=="3-9")
{
    return "the best route is pipeline"
}
else
{
    return"false input"
}
}

alert(route(x))