import React from 'react';
import { Button, Table, DropdownButton } from 'react-bootstrap';
 
function FilePermissionsScreen(props) {
  let user=localStorage.getItem('UploadedFile')
  user = JSON.parse(user)
  console.log(user.FileList)
  const obj = [user]
  const rows = obj.map(usr => {
    console.log(usr)
    return (<tr>
      <td>{usr.FileList}</td>
      <td><Button>View</Button></td>
      <td><DropdownButton title="Dropdown" ></DropdownButton></td>
      <td><Button>TextBox</Button></td>
      
    </tr>)
  })
  console.log(rows)
 
  return (
    <div className='pa4-l bg-snow mw7 mv5 center pa4'>
      Welcome to File permissions <br/>
      {/* <Button onClick={() => {props.switchProps('saveFile')}}>Go back to Save IPFS</Button> */}
    <div>
  <Table className="table">
    <thead className="thead">
    <tr style={{backgroundColor: '#6093D0'}}>
      <th scope="col">File Name</th>
      <th scope="col">View File</th>
      <th scope="col">Specially Permissioned Users(update can happen as Read/Write/Revoke)</th>
      <th scope="col">Give Permission To new User</th>
    </tr>
  </thead>
  <tbody>
  {rows}  
  </tbody>
</Table>
</div>
<div className='row'>
          <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginLeft: '1rem' }} onClick={() => {props.switchProps('saveFile') }}>Save File in IPFS Screen </Button>
          <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginLeft: '1rem', marginRight: '1rem' }} onClick={() => {props.switchProps('changeConfi') }}>View Files and Change Confidentiality Screen</Button>
          <Button className={'col'} style={{ marginBottom: '7rem', marginRight: '0rem' }} onClick={() => { props.switchProps('addUserPerms')}}>Add/Edit User Permissions Screen </Button>
        </div>
    </div>
  
  );
}
 
export default FilePermissionsScreen;
