function checkTemp (temp) {
    if (temp >= 0 && temp <= 20)
{
    console.log ("Liiga külm");
}
if (temp >= 21 && temp <= 40)
{
    console.log("Temp on paras")
}
if (temp >= 41 && temp <= 60)
{
    console.log("Liiga kuum")
}
}



function checkTemp (temp) {
    if (temp >= 0 && temp <= 20)
{
    console.log ("Liiga külm");
        return "-1"
}
if (temp >= 21 && temp <= 40)
{
    console.log("Temp on paras");
        return "0"
}
if (temp >= 41 && temp <= 60)
{
    console.log("Liiga kuum");
        return "+1"
}
}
