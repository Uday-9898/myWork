import React from 'react';
import { Button, Table } from 'react-bootstrap';

function AddUserPermissions(props) {

  return (
    <div className='pa4-l bg-snow mw7 mv5 center pa4'>
      Welcome to AddUserPermissions<br />
      <div className='row'>
        <div className='col' style={{ columnRuleWidth: 'medium' }}>
          <Table className="table">
            <thead className="thead">
              <tr style={{ backgroundColor: '#6093D0' }}>
                <th scope="col">User Name</th>
                <th scope="col">Confidentiality</th>
                <th scope="col">Access(can be revoked)</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </Table>
        </div>
        <div className='col'>
          <div style={{ backgroundColor: '#6093D0', justifyContent: 'center', display: 'flex' }}><h4>Add-User</h4></div>
          <div className='row'>
            <Button className={'btn-block', 'col'} style={{ marginTop: '1rem', marginLeft: '1rem', marginRight: '2rem' }}>User-Key</Button>
            <Button className={'btn-block', 'col'} style={{ marginTop: '1rem', marginRight: '1rem', marginLeft: '2rem' }}>Button</Button>
          </div>
          <div className='row'><Button className={'btn-block', 'col'} style={{ marginBottom: '1rem', marginTop: '1rem', marginRight: '1rem', marginLeft: '12rem' }}>Message</Button></div>
        </div>
      </div>
      <div className='row'>
        <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginLeft: '0rem' }} onClick={() => { props.switchProps('saveFile') }}>Save File in IPFS Screen </Button>
        <Button className={'btn-block', 'col'} style={{ marginBottom: '7rem', marginLeft: '1rem', marginRight:'1rem' }} onClick={() => { props.switchProps('fileperms') }}>Add/Edit File Access Permissions Screen</Button>
        <Button className={ 'col'} style={{ marginBottom: '7rem', marginRight: '0rem' }} onClick={() => { props.switchProps('changeConfi') }}>View Files and Change Confidentiality Screen</Button>
      </div>
    </div>
  )
}

export default AddUserPermissions;
