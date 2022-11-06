//disable the loading gif div element on page load
document.getElementById('processing_image').setAttribute('hidden','');
//disable the output graphs div on page load
document.getElementById('output_graphs').setAttribute('hidden','');
//for displaying google graphs
// google.load('visualization', '1', {packages: ['corechart']});

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
    if (name=='Constant'){
        var chart = new google.visualization.ScatterChart(
            document.getElementById('divConstant')
        );
        chart.draw(array, options);
    }else if (name=='Logarithmic'){
        var chart = new google.visualization.ScatterChart(
            document.getElementById('divLogarithmic')
        );
        chart.draw(array, options);
    }else if (name=='Linear'){
        var chart = new google.visualization.ScatterChart(
            document.getElementById('divLinear')
        );
        chart.draw(array, options);
    }else if (name=='Quasilinear'){
        var chart = new google.visualization.ScatterChart(
            document.getElementById('divQuasi')
        );
        chart.draw(array, options);
    }else if (name=='Quadratic'){
        var chart = new google.visualization.ScatterChart(
            document.getElementById('divQuadratic')
        );
        chart.draw(array, options);
    }else if (name=='Exponential'){
        var chart = new google.visualization.ScatterChart(
            document.getElementById('divExponential')
        );
        chart.draw(array, options);
    }
}

var language_selector = document.getElementById('prog_language');
var code_textbox = document.getElementById('code_textbox');
var try_fibonacci_button = document.getElementById('try_fibonacci');
var submit_button = document.getElementById('submit_button');
var string_radio = document.getElementById('string');
var num_radio = document.getElementById('number');
var array_radio = document.getElementById('array');

var num_type_label = document.getElementById('num_types_allowed');
var int_box = document.getElementById('int');
var int_label = document.getElementById('int_label');
var float_box = document.getElementById('float');
var float_label = document.getElementById('float_label');

var str_max_len_label = document.getElementById('str_max_len_label');
var str_len_input = document.getElementById('max_len');
var range_start_label = document.getElementById('range_start_label');
var range_start = document.getElementById('range_start');
var range_end_label = document.getElementById('range_end_label');
var range_end = document.getElementById('range_end');

var allowed_chars_label = document.getElementById('str_allowed_char_label');
var lower_az_box = document.getElementById('lower_az');
var lower_az_label = document.getElementById('lower_az_label');
var upper_az_box = document.getElementById('upper_az');
var upper_az_label = document.getElementById('upper_az_label');
var num_box = document.getElementById('nums');
var num_box_label = document.getElementById('nums_label');

var arr_ele_label = document.getElementById('arr_ele_allowed_label');
var int_radio = document.getElementById('int_radio')
var int_radio_label = document.getElementById('int_radio_label')
var float_radio = document.getElementById('float_radio')
var float_radio_label = document.getElementById('float_radio_label')
var str_radio = document.getElementById('str_radio');
var str_radio_label = document.getElementById('str_radio_label');

var br1 = document.getElementById('inter_break_1');
var br2 = document.getElementById('inter_break_2');
var br3 = document.getElementById('inter_break_3');
var br4 = document.getElementById('inter_break_4');

// initialising python lang vars for fibonacci button action
var python_lang_index = -1;

function hide_all_sub_selections(){
    num_type_label.style.display = 'none';
    int_box.style.display = 'none';
    int_label.style.display = 'none';
    float_box.style.display = 'none';
    float_label.style.display = 'none';
    allowed_chars_label.style.display = 'none';
    lower_az_box.style.display = 'none';
    lower_az_label.style.display = 'none';
    upper_az_box.style.display = 'none';
    upper_az_label.style.display = 'none';
    num_box.style.display = 'none';
    num_box_label.style.display = 'none';
    str_max_len_label.style.display = 'none';
    str_len_input.style.display = 'none';
    range_start_label.style.display = 'none';
    range_start.style.display = 'none';
    range_end_label.style.display = 'none';
    range_end.style.display = 'none';
    arr_ele_label.style.display = 'none';
    int_radio.style.display = 'none';
    int_radio_label.style.display = 'none';
    float_radio.style.display = 'none';
    float_radio_label.style.display = 'none';
    str_radio.style.display = 'none';
    str_radio_label.style.display = 'none';
    br1.style.display = 'none';
    br2.style.display = 'none';
    br3.style.display = 'none';
    br4.style.display = 'none';
}

// hide the sub-selections of radio buttons on page load
hide_all_sub_selections();

var base_url = 'http://localhost:8000/'
// set the languages 
fetch(base_url + 'get_active_languages', { method: 'GET'})
    .then((response) => {
        console.log('response status is ', response.status)
        if (response.status == 503){
            // compiler isn't available; disable the elements
            language_selector.disabled = true;
            code_textbox.disabled = true;
            try_fibonacci_button.disabled = true;
            submit_button.disabled = true;
            code_textbox.value = 'There was an error in getting the '+
                'available languages from the server.\nWe are working to fix'+
                ' this issue and will be back soon.\nPlease check back in a '+
                'couple of hours :)';
            return null;
        }else{
            return response.json();
        }
    })
    .then((data) => {
        if (data != null){
            for(var i = 0; i < data.length; i++) {
                // add elements to the language selecter
                var lang_element = document.createElement('option');
                lang_element.textContent = data[i]['name']
                lang_element.value = data[i]['id']
                language_selector.appendChild(lang_element);
                // get the language code of python for fibonacci example
                if (data[i]['name'].includes('Python (3.')){
                    python_lang_index = i;
                }
            }
        }
    })
    .catch(() => {
        // disable the elements
        language_selector.disabled = true;
        code_textbox.disabled = true;
        try_fibonacci_button.disabled = true;
        submit_button.disabled = true;
        code_textbox.value = 'Hmm... There was a problem in reaching the '+
            'server. It seems the developer is cutting back on his AWS bill '+
            ':p\nPlease send an email (check  the "Contact Developer" page) '+
            'and this site will be back in action in no time!'
    })
// options to show for test cases
string_radio.onclick = function(){
    // display the sub-selections for string; hide all others
    hide_all_sub_selections();
    allowed_chars_label.style.display = 'inline';
    lower_az_box.style.display = 'inline';
    lower_az_label.style.display = 'inline';
    upper_az_box.style.display = 'inline';
    upper_az_label.style.display = 'inline';
    num_box.style.display = 'inline';
    num_box_label.style.display = 'inline';
    str_max_len_label.style.display = 'inline';
    str_len_input.style.display = 'inline';
    br3.style.display = 'inline';
    br4.style.display = 'inline';
}

num_radio.onclick = function(){
    // display the sub-selections for string; hide all others
    hide_all_sub_selections();
    num_type_label.style.display = 'inline';
    int_box.style.display = 'inline';
    int_label.style.display = 'inline';
    float_box.style.display = 'inline';
    float_label.style.display = 'inline';
    range_start.style.display = 'inline';
    range_start_label.style.display = 'inline';
    range_end.style.display = 'inline';
    range_end_label.style.display = 'inline';
    br3.style.display = 'inline';
    br4.style.display = 'inline';
}

array_radio.onclick = function(){
    // display the sub-selections for string; hide all others
    hide_all_sub_selections();
    arr_ele_label.style.display = 'inline';
    int_radio.style.display = 'inline';
    int_radio_label.style.display = 'inline';
    float_radio.style.display = 'inline';
    float_radio_label.style.display = 'inline';
    str_radio.style.display = 'inline';
    str_radio_label.style.display = 'inline';
}

str_radio.onclick = function(){
    // hide elements of int/float
    range_start.style.display = 'none';
    range_start_label.style.display = 'none';
    range_end.style.display = 'none';
    range_end_label.style.display = 'none';
    //show elements of str
    allowed_chars_label.style.display = 'inline';
    lower_az_box.style.display = 'inline';
    lower_az_label.style.display = 'inline';
    upper_az_box.style.display = 'inline';
    upper_az_label.style.display = 'inline';
    num_box.style.display = 'inline';
    num_box_label.style.display = 'inline';
    str_max_len_label.style.display = 'inline';
    str_len_input.style.display = 'inline';
    br1.style.display = 'inline';
    br2.style.display = 'inline';
    br3.style.display = 'inline';
    br4.style.display = 'inline';
}

float_radio.onclick = function(){
    // hide elements of string
    allowed_chars_label.style.display = 'none';
    lower_az_box.style.display = 'none';
    lower_az_label.style.display = 'none';
    upper_az_box.style.display = 'none';
    upper_az_label.style.display = 'none';
    num_box.style.display = 'none';
    num_box_label.style.display = 'none';
    str_max_len_label.style.display = 'none';
    str_len_input.style.display = 'none';
    br1.style.display = 'none';
    br2.style.display = 'none';
    // show elements of float
    range_start.style.display = 'inline';
    range_start_label.style.display = 'inline';
    range_end.style.display = 'inline';
    range_end_label.style.display = 'inline';
    br3.style.display = 'inline';
    br4.style.display = 'inline';
}

int_radio.onclick = function(){
    // hide elements of string
    allowed_chars_label.style.display = 'none';
    lower_az_box.style.display = 'none';
    lower_az_label.style.display = 'none';
    upper_az_box.style.display = 'none';
    upper_az_label.style.display = 'none';
    num_box.style.display = 'none';
    num_box_label.style.display = 'none';
    str_max_len_label.style.display = 'none';
    str_len_input.style.display = 'none';
    br1.style.display = 'none';
    br2.style.display = 'none';
    // show elements of int
    range_start.style.display = 'inline';
    range_start_label.style.display = 'inline';
    range_end.style.display = 'inline';
    range_end_label.style.display = 'inline';
    br4.style.display = 'inline';
    br3.style.display = 'inline';
    
}

// send errors (discord?)
function send_error(error_message){
    alert('NotImplementedError: `send_error` is not implemented');
}

// set code and test case options for fibonacci
document.getElementById('try_fibonacci').onclick = function(){
    // clear all selections
    hide_all_sub_selections();
    // disable the language selector and code area
    language_selector.disabled = true;
    code_textbox.disabled = true;

    var fibonacci_code = 
    "def recursive_fibonacci(n: int) -> int:\n" +
    "  if n <= 1:\n" +
    "    return n\n" +
    "  else:\n" +
    "    return(recursive_fibonacci(n-1) + recursive_fibonacci(n-2))\n\n" +
    "# get the 'nth' fibonacci term\n" +
    "n = int(input())\n" +
    "print(f'{n}th fibonacci term is: {recursive_fibonacci(n)}')";

    code_textbox.value = fibonacci_code;
    language_selector.selectedIndex = python_lang_index;
    if (python_lang_index == -1){
        send_error(error_message="python_lang_index is -1");
        // show error alert
        // disable submit button
        submit_button.disabled = true;
    }
    
    // set input type
    num_radio.checked = true;
    string_radio.disabled = true;
    array_radio.disabled = true;
    num_type_label.style.display = 'inline';
    int_box.style.display = 'inline';
    int_label.style.display = 'inline';
    int_box.checked = true;
    int_box.disabled = true;
    float_box.style.display = 'inline';
    float_label.style.display = 'inline';
    float_box.checked = false;
    float_box.disabled = true;
    range_start.style.display = 'inline';
    range_start_label.style.display = 'inline';
    range_end.value = '50';
    range_end.style.display = 'inline';
    range_end_label.style.display = 'inline';
};

document.getElementById('submit_button').onclick = function(){
    // show an alert if there is no code
    if (code_textbox.value.length < 1){
        alert("Plesae enter some code in the provided area");
        return;
    }

    var input_type;
    var string_details;
    var number_details;
    var arr_details;

    if (string_radio.checked){
        input_type = 0
        var allowed_chars_bin = [
            lower_az_box.checked, upper_az_box.checked, num_box.checked
        ].map(val => val ? 1:0).join('');

        if (allowed_chars_bin === '000'){
            alert('Please select the characters allowed in the string');
            return;
        }

        if (
            isNaN(parseInt(str_len_input.value)) || 
            parseInt(str_len_input.value)<1
        ){
            alert('"Max string length" field expects an integer value > 0');
            return false;
        }
        
        string_details = {
            "characters_allowed": allowed_chars_bin,
            "max_length": parseInt(str_len_input.value)
        }
    }else if (num_radio.checked){
        input_type = 1
        var range_start_value;
        var range_end_value;

        var allowed_nums_bin = [int_box.checked, float_box.checked].map(
            val => val ? 1:0).join('');

        if (float_box.checked){
            if (isNaN(parseFloat(range_start.value))){
                alert('"Range start" field expects a numeric value');
                return false;
            }
            if (isNaN(parseFloat(range_end.value))){
                alert('"Range end" field expects a numeric value');
                return false;
            }
            
            range_start_value = parseFloat(range_start.value);
            range_end_value = parseFloat(range_end.value);
            
            if (range_start_value > range_end_value){
                alert('"Range end" cannot be less than "Range start"');
                return;
            }
        }else if (int_box.checked){
            if (isNaN(parseInt(range_start.value))){
                alert('"Range start" field expects a numeric value');
                return false;
            }
            if (isNaN(parseInt(range_end.value))){
                alert('"Range end" field expects a numeric value');
                return false;
            }
            
            range_start_value = parseInt(range_start.value);
            range_end_value = parseInt(range_end.value);
            
            if (range_start_value > range_end_value){
                alert('"Range end" cannot be less than "Range start"');
                return;
            }
        }else{
            alert('Please select the numeric values allowed');
            return;
        }

        number_details = {
            "numbers_allowed": allowed_nums_bin,
            "range_start": range_start_value,
            "range_end": range_end_value
        }
    }else if (array_radio.checked){
        input_type = 2
        var element_type = -1;
        var range_start_value;
        var range_end_value;
        var allowed_chars_bin;
        var max_length_value;
        if (int_radio.checked){
            element_type = 0;
            if (isNaN(parseInt(range_start.value))){
                alert('"Range start" field expects a numeric value');
                return false;
            }
            if (isNaN(parseInt(range_end.value))){
                alert('"Range end" field expects a numeric value');
                return false;
            }
            range_start_value = parseInt(range_start.value);
            range_end_value = parseInt(range_end.value);
            
            if (range_start_value > range_end_value){
                alert('"Range end" cannot be less than "Range start"');
                return;
            }
        }else if (float_radio.checked){
            element_type = 1;
            if (isNaN(parseFloat(range_start.value))){
                alert('"Range start" field expects a numeric value');
                return false;
            }
            if (isNaN(parseFloat(range_end.value))){
                alert('"Range end" field expects a numeric value');
                return false;
            }
            range_start_value = parseFloat(range_start.value);
            range_end_value = parseFloat(range_end.value);
            
            if (range_start_value > range_end_value){
                alert('"Range end" cannot be less than "Range start"');
                return;
            }
        }else if (str_radio.checked){
            element_type = 2;
            allowed_chars_bin = [
                lower_az_box.checked, upper_az_box.checked, num_box.checked
            ].map(val => val ? 1:0).join('');
    
            if (allowed_chars_bin === '000'){
                alert('Please select the characters allowed in the string');
                return;
            }
    
            if (
                isNaN(parseInt(str_len_input.value)) || 
                parseInt(str_len_input.value)<1
            ){
                alert('"Max string length" field expects an integer value>0');
                return false;
            }
            max_length_value = parseInt(str_len_input.value);

        }else{
            alert('Please select the type of inputs allowed in the array');
            return;
        }
        arr_details = {
            "element_type": element_type,
            "range_start": range_start_value,
            "range_end": range_end_value,
            "characters_allowed": allowed_chars_bin,
            "max_length": max_length_value
        }
    }else{
        alert('Please select the type of input your code accepts');
        return;
    }

    var selected_lang = language_selector[language_selector.selectedIndex]
    var response_json = {
        "language_id": selected_lang['value'],
        "code": code_textbox.value,
        "input_type": input_type
    }

    if (input_type == 0){
        response_json["string_details"] = string_details
    }else if (input_type==1){
        response_json["number_details"] = number_details
    }else if (input_type==2){
        response_json["array_details"] = arr_details
    }

    console.log(response_json)

    // cors: https://stackoverflow.com/a/59353387
    fetch(base_url + 'estimate_complexity', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        cache: 'reload',
        body: JSON.stringify(response_json)
    }).then( (response) => { 
        // check if the POST returns a status code other than 200
     });  
};


