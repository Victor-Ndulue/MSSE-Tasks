const passing = 75;
function getCurrent(){
    let studentGrade = parseInt(prompt("Enter current grade"));
    return studentGrade;
};
function getWeight(){
    let courseWeight = parseInt(prompt("Enter course weight"));
    return courseWeight;
};
function calculate(c, w){
    let finalScore = (passing - (1-(w/100))*c)/(w/100);
    return (Math.round(finalScore));
}
alert(calculate(getCurrent(), getWeight()));