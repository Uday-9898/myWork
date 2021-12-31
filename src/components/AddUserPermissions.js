import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

function AddUserPermissions(props) {
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
    return (<tr key={Math.random()}>
      <td>IC</td>
      <td><span className='btn-group' style={{ backgroundColor: 'orange', marginRight: '1rem', marginLeft: '0.5rem' }}>{usr.priority}<select onChange={(e) => { selectPriority(e) }}>
        <option value="L">Low</option>
        <option value="M">Medium</option>
        <option value="H">High</option>
      </select><Button onClick={() => setPriorities()}>Update</Button></span></td>
      <td><span className='btn-group'><button style={{ backgroundColor: 'orange' }}>R</button><Button>Button</Button></span></td>
    </tr>)
  })

  return (
    <div className='pa4-l bg-snow mw7 mv5 center pa4'>
      Welcome to AddUserPermissions<br />
      <div className='row'>
        <div className='col' style={{ columnRuleWidth: 'medium' }}>
          <Table className="table">
            <thead className="thead">
              <tr style={{ backgroundColor: '#6093D0' }}>
                <th scope="col">User Type</th>
                <th scope="col">Confidentiality</th>
                <th scope="col">Access(can be revoked)</th>
              </tr>
              {rows}
            </thead>
            <tbody>

            </tbody>
          </Table>
        </div>
        <div className='col'>
          <div style={{ backgroundColor: '#6093D0', justifyContent: 'center', display: 'flex' }}><h4>Add-User</h4></div>
          <div className='row'>
            <Button className='col' style={{ marginTop: '1rem', marginLeft: '1rem' }}>User-Key</Button>
            <span className='col'><button style={{ backgroundColor: 'orange', marginLeft: '0.1rem', marginRight: '0.1rem', marginTop: '1rem' }}>L</button>
              <button style={{ backgroundColor: 'orange', marginLeft: '0.1rem', marginRight: '0.1rem', marginTop: '1rem' }}>R</button></span>
            <Button className='col' style={{ marginTop: '1rem', marginRight: '1rem' }}>Button</Button>
          </div>
          <div id="save-file" style={{ marginTop: '1rem', marginBottom: '1rem', backgroundColor: 'orange', marginLeft: '10rem' }}>Fill output Message here</div>
        </div>
      </div>
      <div className='row'>
        <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginLeft: '0rem' }} onClick={() => { props.switchProps('saveFile') }}>Save File in IPFS Screen </Button>
        <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginLeft: '1rem', marginRight: '1rem' }} onClick={() => { props.switchProps('fileperms') }}>Add/Edit File Access Permissions Screen</Button>
        <Button className={'col'} style={{ marginBottom: '7rem', marginRight: '0rem' }} onClick={() => { props.switchProps('changeConfi') }}>View Files and Change Confidentiality Screen</Button>
      </div>
    </div>
  )
}

export default AddUserPermissions;
