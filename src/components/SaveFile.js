import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';

const SaveFile = (props) => {
  const [files, setFile] = useState(null)
  const [priority, setPriority] = useState(null)
  const ref = useRef();
  const selectFile = (e) => {
    setFile(e.target.files[0])
  }

  const uploadFile = () => {
    console.log(files)
    if (files) {
      var today = new Date();
      var dd = today.getDate();

      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }
      today = dd + '-' + mm + '-' + yyyy;
      const obj = JSON.stringify({ FileList: files.name, priority, created_by: props.user, Date: today, User_type: props.UserType })
      localStorage.setItem('UploadedFile', obj)
      setFile(null)
      setPriority(null)
      ref.current.value = ""
      document.getElementById('save-file').innerHTML = "<h3>" + "File uploaded successfully." + "</h3>"
    } else {
      document.getElementById('save-file').innerHTML = "<h3>" + "File is not uploaded due to some issue." + "</h3>"
    }
  }
  const selectPriority = (e) => {
    setPriority(e.target.value)
  }
  return (

    <div className='pa4-l bg-snow mw7 mv5 center pa4'>
      <div className='row'>
        <div className='col-md'>
          <input type='file' className="form-control" onChange={(e) => { selectFile(e) }} ref={ref} />
          <div className='row'>
            <div className='col-md'>
              <Button className="form-check-label" style={{ marginTop: '1rem' }} disabled={true}>
                Set Confidentiality
              </Button>
            </div>
            <div className='col-md' onChange={(e) => { selectPriority(e) }}>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" value='L' checked={priority === 'Low' ? true : false} id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                  Low
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" value='M' checked={priority === 'Medium' ? true : false} id="flexRadioDefault2" />
                <label className="form-check-label" for="flexRadioDefault2">
                  Medium
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" value='H' checked={priority === 'High' ? true : false} id="flexRadioDefault3" />
                <label className="form-check-label" for="flexRadioDefault3">
                  High
                </label>
              </div>
            </div>
          </div>
          <span className='row'>
            <Button className='btn-block' style={{ marginTop: '1rem' }} onClick={(e) => { uploadFile(e) }}>Save in IPFS </Button>
            <div id="save-file" style={{ marginTop: '1rem', backgroundColor: 'orange' }}>Fill output Message here</div>
          </span>
        </div>
        <div className='col-md'>
          <Button className='btn-block' onClick={() => { props.switchProps('changeConfi') }}>View File and change Confidentiality Screen </Button>
          <Button className='btn-block' style={{ marginTop: '1.7rem', marginBottom: '1.7rem' }} onClick={() => { props.switchProps('fileperms') }}>Add/Edit File Access Permissions Screen</Button>
          <Button className='btn-block' onClick={() => { props.switchProps('addUserPerms') }}>Add/Edit User Permissions Screen </Button>
        </div>
      </div>
    </div>
  );
}


export default SaveFile;
