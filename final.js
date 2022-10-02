let obj=[{
    img:"https://thumbs.gfycat.com/UnsungWavyAvians-size_restricted.gif"
}]

const append=(data)=>{
   document.getElementById("box").innerHTML=null
    data.forEach((el)=>{
     

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.img;
        console.log('img',img);

        div.append(img);
        document.getElementById("box").append(div)
    })
}
setTimeout(function(){
    append(obj)
 },4000)

        
let s=screen.height;
console.log(s);
  



 
