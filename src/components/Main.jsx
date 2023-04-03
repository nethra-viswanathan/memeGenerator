import Nav from './Header'
import GenerateMeme from './GenerateMeme'
import { useState } from "react";
import * as htmlToImage from 'html-to-image';
function Main(){
    const [showInputs, setShowInputs] = useState(false);
    const downloadImg = async() => {
    const el = document.getElementById("downloadEl")
    const dataUrl = await htmlToImage.toPng(el);

    // download image
    const link = document.createElement('a');
    link.download = 'html-to-img.png';
    link.href = dataUrl;
    link.click();
    }
    return(
        <>
            <Nav showSetFn = {setShowInputs} show = {showInputs} downFn={downloadImg}/>
            <GenerateMeme showSetFn={setShowInputs} show={showInputs}/>
        </>
    )
}   

export default Main;