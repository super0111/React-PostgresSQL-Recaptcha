import React, { useState, useEffect } from "react";
import { Upload,  } from "antd";
import { AiOutlineFilePdf } from "react-icons/ai";


const { Dragger } = Upload;

export default function FileUpload2() {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    console.log("STATE_CHANGED");
  });

  const handleBeforeUpload = (file) => {
    setFileList([...fileList, file]);
    return false;
  };

  const handleChangeFiles = ({ fileList, file }) => {
    console.log("ON_CHANGE_FILES:", file);
    setFileList([...fileList]);
  };

  const handleRemove = (selectedFile) => {
    return fileList.filter((file) => {
      return selectedFile.uid !== file.uid;
    });
  };

  return (
    <div style={{height:"155px"}}>
      <Dragger
        {...{
          fileList,
          defaultFileList: fileList,
          onRemove: handleRemove,
          beforeUpload: handleBeforeUpload,
          multiple: true,
          onChange: handleChangeFiles,
          listType: "picture",
          progress: { showInfo: true },
          data: (file) => {
            console.log("DATA:", file);
          }
        }}
      >
        <p className="ant-upload-drag-icon">
          <AiOutlineFilePdf fontSize={90} color="rgb(202 202 202)" />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
    </div>
  );
}

