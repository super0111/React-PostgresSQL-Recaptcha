import { useState } from "react"
import { AiOutlineRight } from "react-icons/ai";

export default function FileUpload() {
    const [  videoState, videoSetState ] = useState("resolution");
    const [  specificationState, specificationSetState ] = useState("4K");

    return (
        <>
            <div className="d-flex flex-column videoProperties">
                <div className='property-title'>
                    <span>Video Properties</span>
                </div>
                <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex flex-row justify-content-between cursorPointer align-items-center mt-2">
                        <button onClick={() => videoSetState('resolution')}>Resolution</button>
                        { videoState == "resolution" ? <AiOutlineRight color="#abacac"/> : "" }
                    </div>
                    <div className="d-flex flex-row justify-content-between cursorPointer align-items-center">
                        <button onClick={() => videoSetState('location')}>Location</button>
                        { videoState == "location" ? <AiOutlineRight color="#abacac"/> : "" }
                    </div>
                    <div className="d-flex flex-row justify-content-between cursorPointer align-items-center">
                        <button onClick={() => videoSetState('Number of People')}>Number of People</button>
                        { videoState == "Number of People" ? <AiOutlineRight color="#abacac"/> : "" }
                    </div>
                    <div className="d-flex flex-row justify-content-between cursorPointer align-items-center">
                        <button onClick={() => videoSetState('Age')}>Age</button>
                        { videoState == "Age" ? <AiOutlineRight color="#abacac"/> : "" }
                    </div>
                    <div className="d-flex flex-row justify-content-between cursorPointer align-items-center">
                        <button onClick={() => videoSetState('Composition')}>Composition</button>
                        { videoState == "Composition" ? <AiOutlineRight color="#abacac"/> : "" }
                    </div>
                    <div className="d-flex flex-row justify-content-between cursorPointer align-items-center">
                        <button onClick={() => videoSetState('View Point')}>View Point</button>
                        { videoState == "View Point" ? <AiOutlineRight color="#abacac"/> : "" }
                    </div>
                </div>

            </div>
            <div className="border-right"></div>

            <div className="d-flex flex-column specifications ">
                <div className='property-title'>
                    <span>Specifications</span>
                </div>
                { videoState == "resolution" ? 
                    <div className="d-flex flex-column justify-content-start">
                        <div className="d-flex flex-row justify-content-between cursorPointer align-items-center mt-2 mb-2">
                            <button onClick={() => specificationSetState('4K')}>4K</button>
                            { specificationState == "4K" ? <AiOutlineRight color="#abacac"/> : "" }
                        </div>
                        <div className="d-flex flex-row justify-content-between cursorPointer align-items-center mb-2">
                            <button onClick={() => specificationSetState('HD')}>HD</button>
                            { specificationState == "HD" ? <AiOutlineRight color="#abacac"/> : "" }
                        </div>
                        <div className="d-flex flex-row justify-content-between cursorPointer align-items-center mb-2">
                            <button onClick={() => specificationSetState('SD')}>SD</button>
                            { specificationState == "SD" ? <AiOutlineRight color="#abacac"/> : "" }
                        </div>
                    </div> : ""
                }
            </div>
            <div className="border-right"></div>

            <div className="yourProperty">
                <div className='property-title'>
                    <span>Your Video&apos;s Properties</span>
                </div>
                { specificationState == "4K" ? <button className="mt-2">4K</button> : "" }
            </div>
        </>
    )
}