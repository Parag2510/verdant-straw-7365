// filter array 

let filterarray =[];

// gallery card array

let galleryarray = [
    {
        id:1,
        name :"perfume",
        src: "https://rukminim1.flixcart.com/image/612/612/kjom6q80-0/perfume/m/o/h/100-gentleman-royale-daily-wear-perfume-eau-de-toilette-yardley-original-imafz7ehwfuhy7hz.jpeg?q=70",
        desc : "yardley-london-gentleman-Perfume",
        price:"400rs"
    },
    {
        id:2,
        name : "perfume",
        src: "https://rukminim1.flixcart.com/image/612/612/kosxzm80/perfume/o/v/x/raw-single-pack-eau-de-parfum-skinn-by-titan-men-original-imag36mjhxraaa7g.jpeg?q=70",
        desc : "skinn-titan-raw-single-pack-eau-de-parfum"
    },
    {
        id:3,
        name :"perfume",
        src: "https://rukminim1.flixcart.com/image/612/612/kp1imq80/perfume/b/o/2/raw-eau-de-parfum-skinn-by-titan-men-original-imag3cx6hkjz2xwc.jpeg?q=70",
        desc : "SKIN TITANPerfume",
        price:"400rs"
    },
    {
        id:4,
        name :"Cream",
        src: "https://rukminim1.flixcart.com/image/612/612/j3uh47k0/fairness/s/s/n/60-white-glow-skin-whitening-and-brightening-nourishing-night-original-imaeuwe8qse5hgyb.jpeg?q=70",
        desc : "Lotus Herbal white glow",
        price:"400rs"
    },
    {
        id:5,
        name :"Natural",
        src: "https://rukminim1.flixcart.com/image/612/612/kh80vww0/foundation/b/w/h/25-absolute-mattreal-skin-natural-mousse-spf-8-lakme-original-imafxahkhwuf7h8y.jpeg?q=70",
        desc : "Lakme Absolute Skin Natural",
        price:"400rs"
    },
    {
        id:6,
        name :"Makup",
        src: "https://rukminim1.flixcart.com/image/612/612/xif0q/makeup-kit/l/b/s/makeup-fragrance-set-fair-iba-original-imaggapbhqxevx7v.jpeg?q=70",
        desc : "IBA MAKUP FRAGRANCE SET",
        price:"400rs"
    }
   ];



showgallery(galleryarray);


// create function to show card

function showgallery(curarra){
   document.getElementById("card").innerText = "";
   for(var i=0;i<curarra.length;i++){
       document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3" >
           <div class="card p-3 ps-5 pe-5">
               <h4 class="text-capitalize text-center">${curarra[i].name}</h4>

          <img src="${curarra[i].src}" width="100%" height="250px"/>
          <p class="mt-2">${curarra[i].desc}</p>
          <p class="mt-2">RS 400</p>
          <button class="btn btn-primary w-100 mx-auto">Add To Cart</button>
       
          </div>
        </div>
       `
   }

}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
           }

   });
   if(this.value==""){
       showgallery(galleryarray);
   }
   else{
       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = ""; 
       }
       else{

           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }

});