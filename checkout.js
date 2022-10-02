

const submit=document.getElementById("button2").addEventListener("click",(event)=>{
    event.preventDefault()

    let email=document.getElementById("email").value;

    let country=document.getElementById("country").value;
    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;
    let company=document.getElementById("company").value;
    let apartment=document.getElementById("apartment").value;
    let select=document.getElementById("select").value;
    let city=document.getElementById("yourcity").value;
    let pin=document.getElementById("pin").value;
    let mobile=document.getElementById("mobile").value;
    
    let obj={
        email:email,
        country:country,
        first:firstname,
        last:lastname,
        address:company,
        apart:apartment,
        select:select,
        city:city,
        pincode:pin,
        mobile:mobile,
    }
    
    let arr=JSON.parse(localStorage.getItem("details"))||[];
    arr.push(obj);
    localStorage.setItem("details",JSON.stringify(arr))
    window.location.href="payment.html"

})
