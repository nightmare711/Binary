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
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card  className='list item3'>
                <div className="background-img">
                    <br/>
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card  className='list item4'>
                <div className="background-img">
                    <br/>
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <br></br>
            <Card  className='list item5'>
                <div className="background-img">
                    <br/>
                </div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Product
