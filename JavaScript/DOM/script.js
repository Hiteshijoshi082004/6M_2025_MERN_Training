function printDate(){
    months = [ "JAN", "FEB","MARCH", "APRIL","MAY","JUNE"]
    days = ['sun' ,'mon','tues']
    let date = new Date()
    console.log(date);
    console.log(date.getDate());
    console.log(months[(date.getMonth())]);
    console.log("date:",days[(date.getDay())]);
    console.log("Hours:", date.getHours());
    console.log("Minutes:",date.getMinutes());
    console.log("Seconds:",date.getSeconds());
    console.log("Milliseconds:", date.getMilliseconds());
    console.log("Whole year:", date.getFullYear());
    console.log("UTCHours:",date.getUTCHours());    
}