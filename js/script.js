let items=document.querySelectorAll(".slider div");
let tabs=document.querySelectorAll(".tab div");

let currentIndex=0;
function slide(items){
    for(let i=0; i<items.length ;i++){
        items[i].setAttribute("style","display:none;");
    }
    items[currentIndex].setAttribute("style","display:block;");
    changeTabColor(tabs);


}


function click_exp_tab(){
    currentIndex=0;
    slide(items);
}
function click_ability_tab(){
    currentIndex=1;
    slide(items);
}
function click_projects_tab(){
    currentIndex=2;
    slide(items);
}

function changeTabColor(tabs){
    for(let i=0; i<tabs.length ;i++){
        if(i==currentIndex){
            tabs[currentIndex].setAttribute("style","color: red;");
            tabs[currentIndex].setAttribute("style","background-color: blue;");
        }else{
            tabs[i].setAttribute("style","color: #E4E4E4;");
            tabs[i].setAttribute("style","background-color: #1E2233;");
        }
    }




    tabs[currentIndex].setAttribute("style","color: #d85418;");
    tabs[currentIndex].setAttribute("style","background-color: #020202;");
}

function go_pre(){}
function go_nxt(){}


slide(items);

