import React, { useState, useRef } from 'react';
import { Table, Button } from 'react-bootstrap';


const DefaultNew = (props) => {
  const [files, setFile] = useState(null)
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
      const obj = JSON.stringify({ FileList: files.name, User_Name: props.user })
      localStorage.setItem('UploadedFile', obj)
      setFile(null)
      ref.current.value = ""
      document.getElementById('save-file').innerHTML = "<h3>" + "File uploaded successfully." + "</h3>"
    } else {
      document.getElementById('save-file').innerHTML = "<h3>" + "File is not uploaded due to some issue." + "</h3>"
    }
  }

  let user = localStorage.getItem('UploadedFile')
  user = JSON.parse(user)
  console.log(user.FileList)
  const obj = [user]
  const rows = obj.map(usr => {
    return (<tr key={Math.random()}>
      <td><span className='row'>Anuj{usr.User_Name}<button clasName='col' onClick={() => { props.switchProps('default2') }}>ViewFiles</button></span></td>
    </tr>)
  })



  return (
    <div>
      <div className='pa4-l bg-snow mw7 mv5 center pa4'>
        Welcome to Default New User<br />
        <div><Table className='table'>
          <thead className="thead">
            <tr style={{ backgroundColor: '#6093D0' }}>
              <th scope="col">User Name</th>
              <th scope="col">Add-File(Buttons will only show up if the logged in user has write permission for the listed user)</th>
            </tr>
            {rows}
          </thead>
          <tbody>

          </tbody>
        </Table>
          <div className='col'>
            <input type='file' className={'form-control', 'row'} style={{ marginLeft: '14rem', marginTop: '-3.5rem' }} onChange={(e) => { selectFile(e) }} ref={ref} />
            <Button className={'row'} style={{ marginRight: '1rem', marginLeft: '35rem', marginTop: '-3rem' }} onClick={(e) => { uploadFile(e) }} >Save in IPFS</Button>
          </div>
        </div>
      </div>
      <div id="save-file" style={{ marginLeft: '1rem', marginRight: '62rem', marginTop: '-60px', backgroundColor: 'orange' }}>Fill output Message here</div>
    </div>
  )
}

export default DefaultNew;
