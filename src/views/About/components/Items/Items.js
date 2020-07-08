import React from 'react'
import {Card,Button,NavLink} from 'react-bootstrap'

import './Items.css'
function Product() {
    return (
        <div className="items" >
            <Card  className='list item1'>
                <div className="background-img">
                    <br/>
                </div>
                <Card.Body>
                    <Card.Title>Hoàng Ngọc Bảo Trân</Card.Title>
                    <Card.Text>
                    You can check me out from here and asking some questions!
                    </Card.Text>
                    <NavLink href="https://www.facebook.com/kudokun0711"><Button variant="primary">Go to my Facebook</Button></NavLink>
                </Card.Body>
            </Card>
            <Card  className='list item2'>
                <div className="background-img">
                    <br/>
                </div>
                <Card.Body>
                    <Card.Title>Phạm Quang Danh</Card.Title>
                    <Card.Text>
                    You can check me out from here and asking some questions!
                    </Card.Text>
                    <NavLink href="https://www.facebook.com/quangdanhhh"><Button variant="primary">Go to my Facebook</Button></NavLink>
                </Card.Body>
            </Card>
            <Card  className='list item3'>
                <div className="background-img">
                    <br/>
                </div>
                <Card.Body>
                    <Card.Title>Nguyễn Tấn Thành</Card.Title>
                    <Card.Text>
                    You can check me out from here and asking some questions!
                    </Card.Text>
                    <NavLink href="https://www.facebook.com/tan.thanhhhh"><Button variant="primary">Go to my Facebook</Button></NavLink>
                </Card.Body>
            </Card>
            <Card  className='list item4'>
                <div className="background-img">
                    <br/>
                </div>
                <Card.Body>
                    <Card.Title>Phan Ngọc Bảo Tuyền</Card.Title>
                    <Card.Text>
                    You can check me out from here and asking some questions!
                    </Card.Text>
                    <NavLink href="https://www.facebook.com/profile.php?id=100010702246953"><Button variant="primary">Go to my Facebook</Button></NavLink>
                </Card.Body>
            </Card>
            <br></br>
            <Card  className='list item5'>
                <div className="background-img">
                    <br/>
                </div>
                <Card.Body>
                    <Card.Title>Phạm Hoàng Phước</Card.Title>
                    <Card.Text>
                    You can check me out from here and asking some questions!
                    </Card.Text>
                    <NavLink href="https://www.facebook.com/phuoc2690"><Button variant="primary">Go to my Facebook</Button></NavLink>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Product
