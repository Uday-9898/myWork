import React from 'react';
import { Table, Button } from 'react-bootstrap';


const DefaultNew = (props) => {
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
          </thead>
          <tbody>

          </tbody>
        </Table>
          <div className='row'>
            <Button className={'btn-block', 'col'} style={{ marginLeft: '8rem' }}>File path(Text Box)</Button>
            <Button className={'btn-block', 'col'} style={{ marginRight: '1rem', marginLeft: '1rem' }}>Browse</Button>
            <Button className={'col'} style={{ marginRight: '1rem' }}>Save in IPFS(Button)</Button>
          </div>
        </div>
      </div>
      <div>
        <Button className={'btn-block'} style={{ marginLeft: '13rem', marginTop: '-100px' }} onClick={() => { props.switchProps('default2') }} >Message</Button>
      </div>
    </div>
  )
}

export default DefaultNew;
