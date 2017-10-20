var msg ="Search for a student or type quit or press Enter to Close.";
var search = prompt(msg);
search = search.toLowerCase();
var isThere = false;
var index = 0;


for(key in students){
    var studentInData = students[key].name;
    studentInData = studentInData.toLowerCase() ;
    if(search === studentInData){
        isThere = true;
        index = key;
    }
}
while(true){
    console.log(isThere);
    if(search === 'quit'|| search ==""){
        document.write("<P>You've choosed to quit.<P><a style=\"color:green\" href =\"index.html\">Retry</a>");
        break;
    }else if(isThere){
        document.write("<h2>Student :"+students[index].name +"</h2>");
        document.write("<p>Track :" +students[index].track+ "</p>");
        document.write("<p>Acheivments :" +students[index].achievments+"</p>");
        document.write("<p>Points :" +students[index].points+"</p>"+"<a id=\"retry\" href =\"index.html\">Search Another Student</a>");
        break;
    }else{
        document.write("<div>Sorry the student is not in our database.<div>You can <a href =\"index.html\"> search again.</a>");
        break;
    }
}