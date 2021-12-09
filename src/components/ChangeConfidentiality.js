import React from 'react';
import { Button, Table } from 'react-bootstrap';

function ChangeConfidentiality(props) {
  // let btnClass = className ('btn-block', 'col')
  let user=localStorage.getItem('UploadedFile')
  user = JSON.parse(user)
  console.log(user.FileList)
  const obj = [user]
  const rows = obj.map(usr => {
    console.log(usr)
    return (<tr>
      <td>{usr.FileList}</td>
      <td>{usr.created_by}</td>
      <td>{usr.Date}</td>
      <td>{usr.priority}<Button>Update</Button></td>
      <td><Button>View</Button></td>
    </tr>)
  })
  console.log(rows)
  // const  = JSON.stringify(localStorage.getItem('')
  return (
    <div className='pa4-l bg-snow mw7 mv5 center pa4'>
      Welcome to Change Confidentiality<br/>
    
    <div>
    <Table className="table">
    <thead className="thead">
    <tr style={{backgroundColor: '#6093D0'}}>
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
        
        <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginLeft: '0rem'}} onClick={() => {props.switchProps('saveFile') }}>Save File in IPFS Screen </Button>
        <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginRight: '1rem', marginLeft: '1rem' }} onClick={() => { props.switchProps('fileperms')}}>Add/Edit File Access Permissions Screen</Button>
        <Button className={'col'} style={{ marginBottom: '7rem', marginRight: '0rem' }} onClick={() => { props.switchProps('addUserPerms')}}>Add/Edit User Permissions Screen </Button>
      
        </div>
    </div>
  )
};
 
export default ChangeConfidentiality;
