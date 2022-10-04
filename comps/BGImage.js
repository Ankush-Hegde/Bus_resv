import { useEffect,useState } from "react";
import Image from "next/image"
// import styled from "styled-components"

function getWindowDimensions(){
    const { innerWidth:width,innerHeight:height}=window;
    return{
        width,
        height,
    };
}








function BGImage(){
    const [width,setWidth]=useState<500>(width);
    const [height,setheight]=useState<600>(height);

    useEffect(()=>{
        const{width,height}=getWindowDimensions();
        setWidth(width);
        setheight(height);
    },[]);
    
    useEffect(()=>{
        function handleResize(){
        const{width,height}=getWindowDimensions();
        setWidth(width);
        setheight(height);

        }
        window.addEventListener("resize",handleResize);
        return()=>window.removeEventListener("resize",handleResize);

    },[]);
 if(width && height){
     return(
         <Image
         src={("/map.jpg")}
         width={500}
         height={500}/>
     )
 }



}

export default BGImage;