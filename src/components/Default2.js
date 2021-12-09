import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Default2 = (props) => {
    return (
        <div>
            <div className='pa4-l bg-snow mw7 mv5 center pa4'>
                Welcome to Default2 User<br />
                <div><Table className='table'>
                        <thead className="thead">
                            <tr style={{ backgroundColor: '#6093D0' }}>
                                <th scope="col">File Name</th>
                                <th scope="col">View/Edit File(Save in IPFS Buttons will only show up if the logged in user has write permission for the listed user and for the Listed File)</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </Table>
                    <div className='row'>
                        <Button className={'btn-block', 'col'} style={{ marginLeft: '8rem', marginRight: '5rem' }}>View/Edit File</Button>
                        <Button className={'btn-block', 'col'} style={{ marginRight: '3rem', marginLeft: '5rem' }}>Save in IPFS(Button)</Button>
                    </div>
                </div>
            </div>
            <div className='row' style={{ marginTop: '-60px' }}>
                <Button className={'btn-block', 'col'} style={{ marginLeft: '15rem', marginRight: '10rem' }}>Message </Button>
                <Button className={'btn-block', 'col'} style={{ marginRight: '15rem', marginLeft: '20rem' }} onClick={() => { props.switchProps('saveFile') }}>Back-Button </Button>
            </div>
        </div>
    )
}

export default Default2;
