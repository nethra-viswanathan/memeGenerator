import memeLogo from '../assets/images/meme.png'

function Header(props){
    const downloadImg = async () => {
        props.downFn()
        
    }
    return(
        <>
            <div className="navParent">
                <div className='navBar'>
                    <img src={memeLogo} alt="" />
                    <span>MemeGenerator</span>
                </div>
                { props.show && 
                    <div className="downloadSection">
                        <button onClick={downloadImg}>
                            <span class="material-symbols-outlined">download</span>
                        </button>
                    </div>
                }
            </div>
        </>
    )
}

export default Header;