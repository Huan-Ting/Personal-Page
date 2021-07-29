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


//Projects
function readJSONFile(file) {
    fetch(file).then(response => {
        return response.json();
    }).then(data => {
        totalitems= data.items;
        renderProjects(totalitems);
    });
}
readJSONFile("./seeders/data.json")



let projectList_html=document.querySelectorAll(".list");
let bars_html=document.querySelectorAll(".bars");

function renderProjects(){

    totalitems.forEach(function(project){
        projectList_html[0].innerHTML+=`<div class="p-name"><p>${project.name}</P></div>`;
    });
    notYetHover();
    interaction();
    
    
}


function interaction(){
    let pro_list=document.getElementsByClassName("p-name");
      
    for(let i= 0;i<pro_list.length;i++){
            $(`.p-name:eq(${i})`).hover(
                function() {
                    
                    projectHover(i);
                }, function() {
                    notYetHover();
                }
            );
        
    };  
}


function projectHover(i){
    let color=['#FFFFDC','#F7BF86','#F9C43F','#EC885A','#C34C2C','#F36439' ];
    bars_html[0].innerHTML="";
    bars_html[0].innerHTML+=
        `
        <div class="p-bars" data-id="">
            <p>Information Architecture:</P>
            <div class="progress" style="background-color:#404A71;">
            <div class="progress-bar" role="progressbar" style="width:${totalitems[i].infoarch}%; background-color:${color[i]}; color:#404A71;" aria-valuenow="${totalitems[i].infoarch}" aria-valuemin="0" aria-valuemax="100">${totalitems[i].infoarch}%</div>
            </div><br><br>
            <p>Perception Design:</P>
            <div class="progress" style="background-color:#404A71;">
            <div class="progress-bar" role="progressbar" style="width:${totalitems[i].perceptdesign}%;  background-color:${color[i]}; color:#404A71;" aria-valuenow="${totalitems[i].perceptdesign}" aria-valuemin="0" aria-valuemax="100">${totalitems[i].perceptdesign}%</div>
            </div>
        </div>
        `;
};

function notYetHover(){
    bars_html[0].innerHTML="";
                bars_html[0].innerHTML+=
                `
                <div>
                    <p>Information Architecture:</P>
                    <div class="progress" style="background-color:#404A71;">
                    <div class="progress-bar" role="progressbar" style="width:0%;"  aria-valuemin="0" aria-valuemax="100">0%</div>
                    </div><br><br>
                    <p>Perception Design:</P>
                    <div class="progress" style="background-color:#404A71;">
                    <div class="progress-bar" role="progressbar" style="width:0%;"  aria-valuemin="0" aria-valuemax="100">0%</div>
                    </div>
                </div>
                `;
}

