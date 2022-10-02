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
        src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10792562/2022/3/25/17bbc36f-c331-42b0-b5ef-0de38fa40d3d1648208654463-Lakme-9To5-Primer--Matte-Perfect-Cover-Foundation---Neutral--1.jpg",
        desc : "Foundation-Neutral Medium N220",
        price:"400rs"
    },
    {
        id:6,
        name :"Natural",
        src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2421530/2022/4/25/3813980e-3d5e-4de0-9878-2ad3d9b567091650869407873FACESCANADAUltimeProMakeupFixer1.jpg",
        desc : "Ultime Pro Makeup Fixer",
        price:"400rs"
    },
    {
        id:7,
        name :"Natural",
        src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11038230/2022/2/21/9bbd553c-d41e-4c23-b47e-07aaefee391b1645444471767-Livon-Set-of-2-Anti-Frizz-Hair-Serum-with-Vitamin-E--Argan-O-1.jpg",
        desc : "Livon  Natural",
        price:"400rs"
    },
    {
        id:8,
        name :"Cream",
        src: "https://rukminim1.flixcart.com/image/612/612/kh80vww0/foundation/b/w/h/25-absolute-mattreal-skin-natural-mousse-spf-8-lakme-original-imafxahkhwuf7h8y.jpeg?q=70",
        desc : "Lakme Absolute Skin Natural",
        price:"400rs"
    },
    {
        id:9,
        name :"Makup",
        src: "https://rukminim1.flixcart.com/image/612/612/xif0q/makeup-kit/l/b/s/makeup-fragrance-set-fair-iba-original-imaggapbhqxevx7v.jpeg?q=70",
        desc : "IBA MAKUP FRAGRANCE SET",
        price:"400rs"
    },
    {
        id:10,
        name :"Cream",
        src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10235945/2022/1/27/4dbe4a3b-9195-4b9f-ad5c-a7640e3fef9a1643279843160PondsSuperLightGelOilFreeMoisturiserwithHyaluronicAcidVitami1.jpg",
        desc : "Light Gel Oil Free Moisturiser",
        price:"400rs"
    },
    {
        id:11,
        name :"Face Sirum",
        src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14172246/2022/4/29/50d3b62a-21d7-4f54-a61f-77797b34ebf51651215613044-Garnier-Bright-Complete-VITAMIN-C-Booster-Face-Serum-30ml-31-1.jpg",
        desc : "VITAMIN C Bright Face Serum",
        price:"400rs"
    },
    {
        id:12,
        name :"Cream",
        src: "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13509846/2021/8/11/b67377aa-386a-41e3-b1a7-7e3889d7eb531628659416371OlayTotalEffects7InOneNightCream-50g1.jpg",
        desc : "Oley Face",
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