let get_data=JSON.parse(localStorage.getItem("details"));
console.log(get_data);
for(let i=0;i<get_data.length;i++){
    document.getElementById("shipu").innerText=`${get_data[i].email}`
   document.getElementById("ship").innerText=`${get_data[i].address},${get_data[i].pincode} ${get_data[i].city} ${get_data[i].select} ${get_data[i].country}`
}

const apply=document.getElementById("app_bu").addEventListener
("click",()=>{
    
})