let btn = document.getElementById('btn');
function color(){
    btn.style.color = 'white';
    btn.style.width = "200px";
    btn.style.height = "200px";
    

}
// onclick with function 
btn.onclick = color;

// addEventListener plus 'click' , function(){}
btn.addEventListener('click', function(){
    document.body.style.background = "red";
})