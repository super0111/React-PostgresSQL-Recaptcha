import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {CloudUpload} from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadLabel: {
    color: 'black',
    border: '1px solid #ccc',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    cursor: 'pointer',
    fontSize: 15,
  },
  x: {
    display: 'none'
  },
  uploadPreview: {
    margin: '0 10px',
  }
})
const ImageUpload = (props) => {
  const {label, changeFile} = props
  const classes = useStyles()
  const [file, setFile] = useState(null)

  const onChange = (e) => {
    setFile(e.target.files[0])
    changeFile(e.target.files[0])
  }
  return (
    <div className={classes.root}>
      <label className={classes.uploadLabel}>
        <input className={classes.x} type="file" onChange={onChange} />
        <CloudUpload style={{paddingRight: 10, fontSize: 30}} /> 
        {label}
      </label>
      <div className={classes.uploadPreview}>{file?.name}</div>
    </div>
  )
}
export default ImageUpload
