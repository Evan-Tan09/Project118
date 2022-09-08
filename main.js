
    quick_draw_data_set = ["pen", "paper", "book", "bottle"];
    random_no = Math.floor((Math.random() * quick_draw_data_set.length));
    console.log(random_no);
    Element_of_array = quick_draw_data_set[random_no];
    sketch = Element_of_array;
    console.log(sketch);
    timer_counter = 0;
    timer_check = "";
    drawn_sketch = "";
    answer_holder = "";
    document.getElementById("sketchtobedrawn").innerHTML = sketch;
    score = 0;


function draw() {
    function check_sketch() {
        if (sketch = drawn_sketch) {
            answer_holder = "set";
            score = score + 1;
            document.getElementById(score).innerHTML = "Score: ", score;
        }
    }
}
function updateCanvas() {
    background = white;
}
function setup() {
    canvas = createCanvas(280, 280);
    background("white");
    canvas.center();
}
function chexketch() {
    timer_counter=timer_counter+1;
    document.getElementById(timer).innerHTML = "Timer: ", timer;
    console.log("Timer counter: ", timer_counter);
    if(timer > 400){
        timer_counter=0;
        timer_check="completed";
    }
if ((timer_check = "completed") || (answer_holder = "set")){
    timer_check = "";
    answer_holder = "";
    updateCanvas();
}
}
