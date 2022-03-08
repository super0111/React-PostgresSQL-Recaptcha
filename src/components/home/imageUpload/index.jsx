import React from 'react';
import { useState }  from "react";
import Image from 'next/image'
import Progress from './../../progress';

export default function ImageUpload() {
    const [isProgress, setProgress] = useState(false)

    const fileObj = [];
    const fileArray = [];
    const [ file, setFile] = useState([]);

    const uploadMultipleFiles = (e) => {

        setTimeout(() => {
            setProgress(!isProgress)
            setTimeout(() => {
                setProgress(false)
            }, 1500)
        }, 50);

        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
        }
        setFile([...file, ...fileArray])
    }

        return (
            <>
                <div className="d-flex justify-content-center align-items-center form-group imageUploading-btn">
                    <label className="uploadLabel">
                        <input type="file"  className="uploadInput" onChange={uploadMultipleFiles} multiple />
                        <Image key='' 
                            className='upload-img'
                            alt="Picture of the author"
                            width={80}
                            height={60}
                            src="/imgs/image uploading.png"
                        />
                        <span className='upload-text'>click or Drag and drop</span>
                    </label>
                </div>
                {
                    isProgress ? <Progress done="100" /> : ""
                }
                <div className=" form-group multi-preview">
                    {(file || []).map(url => (
                        <img key='' 
                        className='upload-img img-thumbnail'
                        alt="Picture of the author"
                        src={url} />
                    ))}
                </div>
            </>
        )
}