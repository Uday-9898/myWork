import React from 'react';
import { Button, Table } from 'react-bootstrap';

function FilePermissionsScreen(props) {
  let user = localStorage.getItem('UploadedFile')
  user = JSON.parse(user)
  console.log(user.FileList)
  const obj = [user]
  const rows = obj.map(usr => {

    return (<tr>
      <td>{usr.FileList}</td>
      <td><Button>View</Button></td>
      <td><span className='row'>
        <div className={"dropdown", 'col'}>
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
            User List
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">User 1</a></li>
            <li><a className="dropdown-item" href="#">User 2</a></li>
            <li><a className="dropdown-item" href="#">User 3</a></li>
          </ul>
        </div>

        <Button className='col' style={{ marginRight: '3rem' }}><select className='btn-group'>
          <option value="R">Read</option>
          <option value="W">Write</option></select>Update</Button>
      </span></td>
      <td><span className='col'><button style={{ backgroundColor: 'orange' }}>R</button><Button style={{ marginLeft: '1rem' }}>Button</Button></span></td>
    </tr>)
  })


  return (
    <div>
      <div id="save-file" style={{ backgroundColor: 'orange', marginLeft: '62rem', marginBottom: '-8rem' }}>Fill output Message here</div>
      <div className='pa4-l bg-snow mw7 mv5 center pa4'>
        Welcome to File permissions <br />
        {/* <Button onClick={() => {props.switchProps('saveFile')}}>Go back to Save IPFS</Button> */}
        <div>
          <Table className="table">
            <thead className="thead">
              <tr style={{ backgroundColor: '#6093D0' }}>
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
          <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginLeft: '1rem' }} onClick={() => { props.switchProps('saveFile') }}>Save File in IPFS Screen </Button>
          <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginLeft: '1rem', marginRight: '1rem' }} onClick={() => { props.switchProps('changeConfi') }}>View Files and Change Confidentiality Screen</Button>
          <Button className={'col'} style={{ marginBottom: '7rem', marginRight: '0rem' }} onClick={() => { props.switchProps('addUserPerms') }}>Add/Edit User Permissions Screen </Button>
        </div>
      </div>
    </div>
  );
}

export default FilePermissionsScreen;
