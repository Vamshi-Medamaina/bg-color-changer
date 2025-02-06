function shift(col){
    let bel=document.body
   if(col=='rd')  bel.style.backgroundColor='red';
   if(col=='yw')  bel.style.backgroundColor='yellow';
   if(col=='be')  bel.style.backgroundColor='blue';
   if(col=='gn')  bel.style.backgroundColor='green ';
}

function shifter(){
    const colEl=document.querySelector("input");
    const val=colEl.value.toLowerCase();
    const bodyEl=document.body;
    bodyEl.style.backgroundColor=val;
    colEl.value="";
}