import React, { useState }  from "react";
import Image from 'next/image'
import Progress from '../../progress';
import { AiFillCloseCircle } from "react-icons/ai";

export default function PdfUpload() {
    const [isProgress, setProgress] = useState(false)

    const fileObj = [];
    const [fileName, setFileName] = useState([]);
    const uploadMultipleFiles = (e) => {

        setTimeout(() => {
            setProgress(!isProgress)
            setTimeout(() => {
                setProgress(false)
            }, 1500)
        }, 50);

        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            setFileName([...fileName, fileObj[0][i]]);
        }
    }
    const handleFileCancel = () => {

    }
        return (
            <>
                <div className="d-flex justify-content-center align-items-center form-group imageUploading-btn">
                    <label className="uploadLabel">
                        <input type="file"  className="uploadInput" onChange={uploadMultipleFiles} multiple />
                        <Image key='' 
                            className='upload-file'
                            alt="Picture of the author"
                            width={80}
                            height={60}
                            src="/imgs/file uploading.png"
                        />
                        <span className='upload-text'>click or Drag and drop</span>
                    </label>
                </div>
                {
                    isProgress ? <Progress done="100" /> : ""
                }
                <div className=" multi-preview">
                    {(fileName || []).map(name => (
                        <div key={name.name} className="d-flex flex-row justify-content-between align-items-center p-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img style={{ width: 25, height: 33 }} src="/imgs/file uploading.png"/>
                                <span style={{color:"#1b1b1b", marginLeft:10}} >{name.name}</span>
                            </div>
                            <div onClick={handleFileCancel} className="d-flex flex-row align-items-center mr-1 cursorPointer fileUploadCancel"><AiFillCloseCircle className="mr-1" />Delete</div>
                        </div>
                    ))}
                </div>
            </>
        )
}