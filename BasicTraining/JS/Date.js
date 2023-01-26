// will show the date 2023/01/26
// var date = new Date(1674724598193);
    // date = date.toISOString().split('T')[0];
    // date = date.replace("-", "/");
    // date = date.replace("-", "/");
    // console.log(date);

    // var date = new Date(1674724598193);
    // date = date.toISOString().split('T');
    // console.log(date);

//     var date = new Date(1674724598193);
//     date = date.toLocaleString();
//     console.log(date);

    // var date = new Date(1674724598193);
    // hours = date.getHours();
    // minutes = date.getMinutes();
    // seconds = date.getSeconds();
    // var newDate = date.toISOString().split('T')[0].replace("-", "/").replace('-', '/');
    // // console.log(`${newDate} ${hours}:${minutes}:${seconds}`);
    // console.log(`The time is ${hours} hours and ${minutes} and ${seconds} with date of ${newDate}`);


    // Will create not hard codded function to get the time
// const showMeTheTime = (value) => {
//     var date = new Date(value);
//     var newDate = date.toISOString().split('T')[0].replace("-", "/").replace('-', '/');
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     console.log( `The time is ${hours} hours and ${minutes} and ${seconds} with date of ${newDate}`);
// }
// showMeTheTime(1674724598193)
// showMeTheTime(1684724598211)


// Used with IIFE = Immediately Invoked Function Expression
 const showMeTheTime =((value) => {    
    var date = new Date(value);    
    var newDate = date.toISOString().split('T')[0].replace("-", "/").replace('-', '/');    
    var hours = date.getHours();    
    var minutes = date.getMinutes();    
    var seconds = date.getSeconds();    
    console.log( `The time is ${hours} hours and ${minutes} and ${seconds} with date of ${newDate}`);
})(1684724598211);