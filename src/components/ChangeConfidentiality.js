import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

function ChangeConfidentiality(props) {
  const [priority, setPriority] = useState('L')
  let user = localStorage.getItem('UploadedFile')
  user = JSON.parse(user)
  console.log(user.FileList)
  const obj = [user]
  function setPriorities() {
    user.priority = priority
    localStorage.setItem('UploadedFile', JSON.stringify(user))
    setPriority('S')
  }

  const selectPriority = (e) => {
    setPriority(e.target.value)
  }
  const rows = obj.map(usr => {

    return (<tr>
      <td>{usr.FileList}</td>
      <td>{usr.created_by}</td>
      <td>{usr.Date}</td>
      <td><span className='btn-group' style={{ backgroundColor: 'orange' }}>{usr.priority}<select onChange={(e) => { selectPriority(e) }}>
        <option value="L">Low</option>
        <option value="M">Medium</option>
        <option value="H">High</option>
      </select><Button onClick={() => setPriorities()}>Update</Button></span></td>
      <td><Button>View</Button></td>
    </tr>)
  })


  return (
    <div className='pa4-l bg-snow mw7 mv5 center pa4'>
      Welcome to Change Confidentiality<br />

      <div>
        <Table className="table">
          <thead className="thead">
            <tr style={{ backgroundColor: '#6093D0' }}>
              <th scope="col">File Name</th>
              <th scope="col">Created By</th>
              <th scope="col">Created DateTime</th>
              <th scope="col">Confidentiality</th>
              <th scope="col">View File</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
      <div className='row'>

        <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginLeft: '0rem' }} onClick={() => { props.switchProps('saveFile') }}>Save File in IPFS Screen </Button>
        <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginRight: '1rem', marginLeft: '1rem' }} onClick={() => { props.switchProps('fileperms') }}>Add/Edit File Access Permissions Screen</Button>
        <Button className={'col'} style={{ marginBottom: '7rem', marginRight: '0rem' }} onClick={() => { props.switchProps('addUserPerms') }}>Add/Edit User Permissions Screen </Button>

      </div>
    </div>
  )
};

export default ChangeConfidentiality;
