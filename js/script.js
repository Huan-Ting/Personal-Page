let items=document.querySelectorAll(".a-slider");
let tabs=document.querySelectorAll(".tab div");


let currentIndex=0;
function slide(items){
    for(let i=0; i<items.length ;i++){
        items[i].setAttribute("style","display:none;");
    }
    items[currentIndex].setAttribute("style","display:block;");
    changeTabColor(tabs);
    hidePre_Nxt_Button();
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
            tabs[currentIndex].setAttribute("style","background-color: #161616;");
        }else{
            tabs[i].setAttribute("style","color: #E4E4E4;");
            tabs[i].setAttribute("style","background-color: #2F385D;");
        }
    }
}

function hidePre_Nxt_Button(){
    if(currentIndex==0){
        $(".pre-btn").attr("style","display:none;");
        $(".nxt-btn").attr("style","display:block;");
    }else if(currentIndex==items.length-1){
        $(".nxt-btn").attr("style","display:none;");
        $(".pre-btn").attr("style","display:block;");
    }else{
        $(".nxt-btn").attr("style","display:block;");
        $(".pre-btn").attr("style","display:block;");
    }
}

/*
function hidePre_Nxt_Button(slideButton){
    let pBtn=slideButton[0]
    let nBtn=slideButton[1]
    if(currentIndex==0){
        pBtn.setAttribute("style","display:none;");
        nBtn.setAttribute("style","display:block;");
    }else if(currentIndex==items.length){
        nBtn.setAttribute("style","display:none;");
        pBtn.setAttribute("style","display:block;");
    }else{
        pBtn.setAttribute("style","display:block;");
        nBtn.setAttribute("style","display:block;");
    };
}
*/
function go_pre(){
    currentIndex-=1;
    slide(items);
}
function go_nxt(){
    currentIndex+=1;
    slide(items);
}


slide(items);

