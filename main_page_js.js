//alert about mobile browsers
alert("Due to security certificate issues, this website does not work on mobile browsers. "+
"Please make sure you're on a desktop browser (preferable Google Chrome).")
//warning alert if the browser is not chrome
var isChrome = 0;
if(navigator.userAgent.indexOf("Chrome")!=-1){
    isChrome = 1;
}else{
    alert("We have detected that you're using a browser other than Google Chrome.\n"+
          "Due to different security requirements, this site might not work on this browser.");
}

//disable the loading gif div element on page load
document.getElementById("processing_image").setAttribute("hidden","");
//disable the output graphs div on page load
document.getElementById("output_graphs").setAttribute("hidden","");
//for displaying google graphs
google.load("visualization", "1", {packages: ["corechart"]});

function drawChart(tab, name){
    var array = google.visualization.arrayToDataTable(tab);
    var options = {
        title: name+' Function',
        'width':900,
        'height':500,
        legend: 'none',
        interpolateNulls: true,
        series: {
          1: { lineWidth: 1, pointSize: 0 }
        }
    };
    if(name=="Constant"){
        var chart = new google.visualization.ScatterChart(document.getElementById("divConstant"));
        chart.draw(array, options);
    }else if(name=="Logarithmic"){
        var chart = new google.visualization.ScatterChart(document.getElementById("divLogarithmic"));
        chart.draw(array, options);
    }else if(name=="Linear"){
        var chart = new google.visualization.ScatterChart(document.getElementById("divLinear"));
        chart.draw(array, options);
    }else if(name=="Quasilinear"){
        var chart = new google.visualization.ScatterChart(document.getElementById("divQuasi"));
        chart.draw(array, options);
    }else if(name=="Quadratic"){
        var chart = new google.visualization.ScatterChart(document.getElementById("divQuadratic"));
        chart.draw(array, options);
    }else if(name=="Exponential"){
        var chart = new google.visualization.ScatterChart(document.getElementById("divExponential"));
        chart.draw(array, options);
    }
}

//adding appropriate skeletal code as the selected langugage is changed
document.getElementById("prog_language").onchange = function(){
    if (document.getElementById("prog_language").value=="C"){
        var code_skeletal = "#include <stdio.h>\n\n"+
        "int main(void) {\n"+
        "    //your code goes here\n\n"+
        "    return 0;\n"+
        "}";
        document.getElementById("code_textbox").innerHTML=code_skeletal;
    }else if(document.getElementById("prog_language").value=="C++14 [GCC]"){
        var code_skeletal = "#include <iostream>\n"+
        "using namespace std;\n\n"+
        "int main() {\n"+
        "    // your code goes here\n"+
        "    return 0;\n"+
        "}";
        document.getElementById("code_textbox").innerHTML=code_skeletal;
    }else if(document.getElementById("prog_language").value=="C++ [GCC]"){
        var code_skeletal = "#include <iostream>\n"+
        "using namespace std;\n\n"+
        "int main() {\n"+
        "    // your code goes here\n"+
        "    return 0;\n"+
        "}";
        document.getElementById("code_textbox").innerHTML=code_skeletal;
    }else if(document.getElementById("prog_language").value=="C# [Mono]"){
        var code_skeletal = "using System;\n\n"+
        "public class Test\n"+
        "{\n"+
        "    public static void Main()\n"+
        "    {\n"+
        "        // your code goes here\n"+
        "    }\n"+
        "}";
        document.getElementById("code_textbox").innerHTML=code_skeletal;
    }else if(document.getElementById("prog_language").value=="Go"){
        var code_skeletal = "package main\n"+
        "import \"fmt\"\n\n"+
        "func main(){\n"+
        "    // your code goes here\n"+
        "}\n";
        document.getElementById("code_textbox").innerHTML=code_skeletal;
    }else if(document.getElementById("prog_language").value=="Java"){
        var code_skeletal = "/* package whatever; // don't place package name! */\n\n"+
        "import java.util.*;\n"+
        "import java.lang.*;\n"+
        "import java.io.*;\n\n"+
        "/* Name of the class has to be 'Main' only if the class is public. */\n"+
        "class Main\n"+
        "{\n"+
        "    public static void main (String[] args) throws java.lang.Exception\n"+
        "    {\n"+
        "        // your code goes here\n"+
        "    }\n"+
        "}";
        document.getElementById("code_textbox").innerHTML=code_skeletal;    
    }else if(document.getElementById("prog_language").value=="JavaScript [Rhino]"){
        var code_skeletal = "importPackage(java.io);\n"+
        "importPackage(java.lang);\n\n"+        
        "// your code goes here";
        document.getElementById("code_textbox").innerHTML=code_skeletal;    
    }else if(document.getElementById("prog_language").value=="JavaScript [SpiderMonkey]"){
        var code_skeletal = "// your code goes here";
        document.getElementById("code_textbox").innerHTML=code_skeletal;    
    }else if(document.getElementById("prog_language").value=="Node.js"){
        var code_skeletal = "process.stdin.resume();\n"+
        "process.stdin.setEncoding('utf8');\n\n"+
        "// your code goes here";
        document.getElementById("code_textbox").innerHTML=code_skeletal;    
    }else if(document.getElementById("prog_language").value=="Objective-C"){
        var code_skeletal = "#import <objc/objc.h>\n"+
        "#import <objc/Object.h>\n"+
        "#import <Foundation/Foundation.h>\n\n"+
        "@implementation TestObj\n"+
        "int main()\n"+
        "{"+
        "    // your code goes here\n"+
        "    return 0;\n"+
        "}\n"+
        "@end";
        document.getElementById("code_textbox").innerHTML=code_skeletal;    
    }else if(document.getElementById("prog_language").value=="Python 2.x [Pypy]"){
        var code_skeletal = "# your code goes here\n";
        document.getElementById("code_textbox").innerHTML=code_skeletal;    
    
    }else if(document.getElementById("prog_language").value=="Python 3.x"){
        var code_skeletal = "# your code goes here\n";
        document.getElementById("code_textbox").innerHTML=code_skeletal;    
    
    }else if(document.getElementById("prog_language").value=="R"){
        var code_skeletal = "# your code goes here\n";
        document.getElementById("code_textbox").innerHTML=code_skeletal;    
    }else if(document.getElementById("prog_language").value=="Rust"){
        var code_skeletal = "use std::io::stdin;\n"+
        "use std::io::BufRead;\n"+
        "use std::io::BufReader;\n\n"+
        "fn main() {\n"+
        "    // your code goes here\n"+
        "}";        
        document.getElementById("code_textbox").innerHTML=code_skeletal;    
    }else if(document.getElementById("prog_language").value=="Swift"){
        var code_skeletal = "// your code goes here\n";
        document.getElementById("code_textbox").innerHTML=code_skeletal;
    }
};

//adding more input textarea on button click
var num_buttons = 4;
function add_new_input_case(val=""){
    num_buttons++;
    var form_name = document.getElementById("form");
    var div_element = document.createElement("div");
    newline_num = document.createTextNode(num_buttons+".");
    form_name.appendChild(newline_num)
    var input_element = document.createElement("textarea");
    input_element.type = "text";
    input_element.id = "test"+num_buttons;
    input_element.rows = 2;
    input_element.cols = 50;
    input_element.placeholder = "inputs are encoded as string by default";
    if (val.length>0){
        input_element.value = val;
    }
    form_name.appendChild(input_element);
    form_name.appendChild(document.createElement("br"));
    form_name.appendChild(document.createElement("br"));
}

//button to add more input textareas
document.getElementById("Add more button").onclick = function(){
    add_new_input_case(val="");
}

//try fibonacci code button
document.getElementById("try_fibonacci").onclick = function(){
    //disable the language selection list
    document.getElementById("prog_language").disabled = true;
    var fibonacci_code = "def recursive_fibonacci(n):\n"+
    "    if n <= 1:\n"+
    "        return n\n"+
    "    else:\n"+
    "        return(recursive_fibonacci(n-1) + recursive_fibonacci(n-2))\n\n"+
    "nterms = int(input())\n"+
    "# check if the number of terms is valid\n"+
    "if nterms <= 0:\n"+
    "   print('Plese enter a positive integer')\n"+
    "else:\n"+
    "   for i in range(nterms):\n"+
    "       recursive_fibonacci(i)";
    document.getElementById("code_textbox").value = fibonacci_code;
    document.getElementById("prog_language").value = "Python 3.x"
    //setting input case values
    document.getElementById("test1").value = "1";
    document.getElementById("test2").value = "2";
    document.getElementById("test3").value = "4";
    document.getElementById("test4").value = "8";
    add_new_input_case(val = "10");
    add_new_input_case(val = "15");
    add_new_input_case(val = "20");
    add_new_input_case(val = "25");
    add_new_input_case(val = "30");
    add_new_input_case(val = "32");
};

document.getElementById("submit_button").onclick = function(){
    //reseting the code and input flags
    var code = 0;
    var inputs = 0;
    
    //raise an alert if the code textarea is empty
    var text_area_content = document.getElementById("code_textbox").value;
    if(text_area_content.length < 1){
        alert("It's not possible to estimate complexity when there "+ 
        "isn't any code to begin with. Please type some code in the box and try again.")
    }else{
        //code is alright, set the code flag to 1
        code = 1;
    }
    //raise an alert if input cases is less than 4
    var non_empty=0;
    for(var i=1; i<=num_buttons; i++){
        var input_content = document.getElementById("test"+i).value;
        if(input_content.length>0){
            non_empty++;
        }
    }
    if(non_empty<4){
        alert("Although higher number of inputs would result in a better estimate, "+
        "please provide at least 4 inputs.")
    }else{
        //inputs are alright, set the inputs flag to 1
        inputs = 1;
    }
    
    var tests = [];
    var testString = "";
    if(code==1 && inputs==1){
        //disable submit button
        document.getElementById("submit_button").disabled = true;
        //collect all non empty input casese
        for(var i=1; i<=num_buttons; i++){
            var input_content = document.getElementById("test"+i).value;
            if(input_content.length>0){
                testString = testString + input_content + "EnDoFtEsTcAsE";
            }
        }
        tests = JSON.stringify(tests);
        var user_code = document.getElementById("code_textbox").value;
        var lang = document.getElementById("prog_language").value;
        //encoding code and input cases to be sent as a part of the URL
        var code = encodeURIComponent(user_code);
        var code = code.replaceAll("%2F", "%SLASH");
        var testString = encodeURIComponent(testString);
        var testString = testString.replaceAll("%2F", "%SLASH");
    
        //creating an http request to API
        var req = new XMLHttpRequest();
        //var base_url = "https://3.135.19.178:80/"    //ec2 inbound http
        // var base_url = "https://3.135.19.178:443/"    //ec2 inbound https
        
        //var base_url = "http://ip.aws.cloudns.nz/"    //SSL certificate
        
        var base_url = "https://ip.aws.cloudns.nz/"
        
        var endpoint = "complexity";
        var url = base_url+endpoint+"/"+code+"/"+testString+"/"+lang;
        req.open("GET", url, true);
        
        //send an alert if server returns an error
        req.onerror = function (){
            //hide the "processing" image div
            document.getElementById("processing_image").setAttribute("hidden","");
            //unhide the code and inputs textareas
            document.getElementById("contents").removeAttribute("hidden");
            //enable the submit button
            document.getElementById("submit_button").disabled = false;

            if(isChrome==1){
                var errorMessage = "The server returned an error."+
                "\nPlease contact the developer if the error persists.";
            }else{
                var errorMessage = "The server returned an error."+
                "\nPlease try again using a different browser (preferably Google Chrome, Version 91+)."+
                "\nContact the developer if the error persists.";
            }
            alert(errorMessage);
        };
        
        req.send()
        //hide the "contents" div, make the "loading" div visible
        document.getElementById("contents").setAttribute("hidden","");
        document.getElementById("processing_image").removeAttribute("hidden");
        document.getElementById("output_graphs").setAttribute("hidden","");
        
        //constant model
        function constantModel(paramList, x) {
            a = paramList[0];
            return (x*0)+a;
        }
        //log model
        function logModel(paramList, x) {
            a = paramList[0];
            b = paramList[1];
            return (a*Math.log(x)) + b;
        }
        //linear model
        function linearModel(paramList, x) {
            a = paramList[0];
            b = paramList[1];
            return (a*x)+b;
        }
        //quasilinear model
        function quasiModel(paramList, x) {
            a = paramList[0];
            b = paramList[1];
            return (a*x*Math.log(x))+b;
        }
        //quadratic model
        function quadModel(paramList, x) {
            a = paramList[0];
            b = paramList[1];
            c = paramList[2];
            return (a*x*x)+(b*x)+c;
        }
        //exponential model
        function expModel(paramList, x) {
            a = paramList[0];
            b = paramList[1];
            return Math.pow(2, ((a*x)+b));
        }
        
        req.onload = function(){
            //hide the "processing" image div
            document.getElementById("processing_image").setAttribute("hidden","");
            //unhide the code and inputs textareas
            document.getElementById("contents").removeAttribute("hidden");
            //compile the results
            var parsedReq = JSON.parse(req.responseText);
            parsedReq = JSON.parse(parsedReq);
            if(parsedReq.hasOwnProperty('errorMessage')){
                //the process returned an error
                alert("Error occured:\n"+parsedReq['errorMessage'])
            }else{
                //show the results and plot the graphs
                var estimatedComplexity = parsedReq.estimatedComplexity;
                var runtimeList = parsedReq["runtimeList"];
                var constantModelParams = parsedReq["constantModel"];
                var linearModelParams = parsedReq["linearModel"];
                var logModelParams = parsedReq["logModel"];
                var quasiModelParams = parsedReq["quasiModel"];
                var quadModelParams = parsedReq["quadraticModel"];
                var expModelParams = parsedReq["exponentialModel"];
            
                //display the runtime complexity
                document.getElementById("final_complexity").innerHTML = estimatedComplexity;
                //google data array for constant plot
                var constantPlot = [['X', 'Points', 'Constant Line']];
                for(var i=1; i<=runtimeList.length; i++){
                    var constantModelValue = constantModel(constantModelParams, i);
                    var newRow = [i, runtimeList[i-1], constantModelValue];
                    constantPlot.push(newRow);
                }
                
                //google data array for log plot
                var logPlot = [['X', 'Points', 'Logarithmic Curve']];
                for(var i=1; i<=runtimeList.length; i++){
                    var logModelValue = logModel(logModelParams, i);
                    var newRow = [i, runtimeList[i-1], logModelValue];
                    logPlot.push(newRow);
                }
                
                //google data array for linear plot
                var linearPlot = [['X', 'Points', 'Linear Line']];
                for(var i=1; i<=runtimeList.length; i++){
                    var linearModelValue = linearModel(linearModelParams, i);
                    var newRow = [i, runtimeList[i-1], linearModelValue];
                    linearPlot.push(newRow);
                }
                
                //google data array for quasilinear plot
                var quasiPlot = [['X', 'Points', 'Quasilinear Curve']];
                for(var i=1; i<=runtimeList.length; i++){
                    var quasiModelValue = quasiModel(quasiModelParams, i);
                    var newRow = [i, runtimeList[i-1], quasiModelValue];
                    quasiPlot.push(newRow);
                }
                
                //google data array for quadratic plot
                var quadPlot = [['X', 'Points', 'Quadratic Curve']];
                for(var i=1; i<=runtimeList.length; i++){
                    var quadModelValue = quadModel(quadModelParams, i);
                    var newRow = [i, runtimeList[i-1], quadModelValue];
                    quadPlot.push(newRow);
                }
                
                //google data array for exponential plot
                var expPlot = [['X', 'Points', 'Exponential Curve']];
                for(var i=1; i<=runtimeList.length; i++){
                    var expModelValue = expModel(expModelParams, i);
                    var newRow = [i, runtimeList[i-1], expModelValue];
                    expPlot.push(newRow);
                }
            
                //draw all the plots 
                drawChart(constantPlot, "Constant");
                drawChart(logPlot, "Logarithmic");
                drawChart(linearPlot, "Linear");
                drawChart(quasiPlot, "Quasilinear");
                drawChart(quadPlot, "Quadratic");
                drawChart(expPlot, "Exponential");
                
                //make them visible
                document.getElementById("output_graphs").removeAttribute("hidden");
                
                //smoothly scroll to the plotted graphs div
                var elmntToView = document.getElementById("output_graphs");
                elmntToView.scrollIntoView({behavior: "smooth"});
            
                //enable submit button
                document.getElementById("submit_button").disabled = false;
            }
        };
    };
};
