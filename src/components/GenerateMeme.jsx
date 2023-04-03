import { useState,useRef } from "react";

function GenerateMeme(props){
    console.log("props",props)
    const memeList = useRef();
    const [randomImg, setRandomImg] = useState("")
    const [showTopText, setTopText] = useState("");
    const [showBottomText, setBottomText] = useState("");

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("https://api.imgflip.com/get_memes", {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
        });
        const result = await res.json();

        if(result.success == true){
            let filteredList = result.data.memes.filter(el =>  el.width < 1400);
            console.log("filteredList",filteredList)
            memeList.current = filteredList;
            props.showSetFn(true);
        }
        generateRandomNumber()

    }

    const handleKeyTop = (e) => {
        setTopText(e.target.value)
    }

    const handleKeyBottom = (e) => {
        setBottomText(e.target.value)
    }

    const generateRandomNumber = () => {
        console.log(memeList.current)
        const randomNumber = Math.floor(Math.random() * memeList.current.length);
        console.log(memeList.current[randomNumber])
        setRandomImg(memeList.current[randomNumber])
    }
    return(
        <>
            <div className="memeFormParent">
                     
                     <form className="memeForm" onSubmit={handleSubmit}>
                        { props.show &&
                        <div className="memeInputs">
                            <input type="text" placeholder="Enter the text you'd like to display at the top" onKeyUp={handleKeyTop}/>
                            <input type="text" placeholder="Enter the text you'd like to display at the bottom" onKeyUp={handleKeyBottom}/>
                        </div>
                        }
                        <div className="generateBtn">
                            <input type="submit" value="Get me my meme!"/>
                        </div>
                    </form>
                    <div className="main">
                        <div className="displayMemeParent" id="downloadEl" style={{height: randomImg.height , width:randomImg.width} }>
                            <img src={randomImg.url} alt="" />
                            {/* <div>idhu???</div> */}
                            <div className="textParent">
                                <div className="topText">
                                    {showTopText}
                                </div>
                                <div className="bottomText">
                                    {showBottomText}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default GenerateMeme