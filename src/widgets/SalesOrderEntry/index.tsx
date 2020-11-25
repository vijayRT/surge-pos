import React, { useState } from 'react'
import { Button, Card, Form, Table } from 'react-bootstrap'
import { useSalesOrderStore } from './store'

function SalesOrderEntry() {
    const salesOrderEntries = useSalesOrderStore(state => state.salesOrderEntries)
    const addEntry = useSalesOrderStore(state => state.addEntry)
    const total = useSalesOrderStore(state => state.total)

    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    
    const buttonHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        addEntry({itemName, price, quantity})
    }
    const entriesTable = 
        <Table className="my-3" responsive>
            <thead>
                <tr>
                    <th>ItemName</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {salesOrderEntries.map((entry, index) => {
                    return <tr>
                        <td>{entry.itemName}</td>
                        <td>{entry.price}</td>
                        <td>{entry.quantity}</td>
                        <td>{entry.price * entry.quantity}</td>
                    </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} className="text-right font-weight-bold">
                        Total
                    </td>
                    <td className="font-weight-bold">
                        {total}
                    </td>
                </tr>
            </tfoot>
        </Table>
    return (
        <Card className="my-5">
            <Card.Header>
                <Card.Title>Sales Order Entry</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                <Form.Group controlId="itemName">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter item name" onChange={(e) => setItemName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter price" onChange={(e) => setPrice(parseFloat(e.target.value))} />
                </Form.Group>
                <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" placeholder="Enter quantity" onChange={(e) => setQuantity(parseInt(e.target.value))} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={buttonHandler}>
                    Add
                </Button>
                </Form>
                {salesOrderEntries.length > 0 ? entriesTable : <></>}
            </Card.Body>
        </Card>
    )
}

export default SalesOrderEntry
