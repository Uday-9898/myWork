import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const Default2 = (props) => {
    const [files, setFile] = useState(null)
    // const selectFile = (e) => {
    // setFile(e.target.files[0])

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
            const obj = JSON.stringify({ FileList: files.name })
            localStorage.setItem('UploadedFile', obj)
            setFile(null)
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
            <td>{usr.FileList}</td></tr>)
    })
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
                        {rows}
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
                    <div className='row'>
                        <Button className={'btn-block', 'col'} style={{ marginTop: '-2rem', marginLeft: '10rem', marginRight: '3rem' }}>View/Edit File</Button>
                        <Button className={'btn-block', 'col'} style={{ marginTop: '-2rem', marginRight: '2rem', marginLeft: '3rem' }} onClick={(e) => { uploadFile(e) }}>Save in IPFS(Button)</Button>
                    </div>
                </div>
            </div>
            <div className='row' style={{ marginTop: '-60px' }}>
                <div id="save-file" className={'btn-block', 'col'} style={{ marginLeft: '14rem', marginRight: '5rem', backgroundColor: 'orange' }}>Fill output Message here</div>
                <Button className={'btn-block', 'col'} style={{ marginRight: '14rem', marginLeft: '20rem' }} onClick={() => { props.switchProps('saveFile') }}>Back-Button </Button>
            </div>
        </div>
    )
}

export default Default2;
