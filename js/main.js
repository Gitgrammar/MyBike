const img_src=["images/img0.jpeg","images/img1.jpg","images/img2.jpg"];
let num=-1;
function slide_time(){
    if(num===2){
        num=0;
    }else{
        num++
    }document.getElementById("slide_img").src=img_src[num];
}
    setInterval(slide_time,(2300));