import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useCreditCheckStore } from './store'

import "./index.css"

type CreditCheckProps = {
    compareValue?: number
}
function CreditCheck({compareValue}: CreditCheckProps) {

    const creditLimit = useCreditCheckStore(state => state.creditLimit)
    const setCreditLimit = useCreditCheckStore(state => state.setCreditLimit)
    const [isCreditLimitLesser, setIsCreditLimitLesser] = useState(false)

    useEffect(() => {
        if (compareValue && creditLimit < compareValue) {
            setIsCreditLimitLesser(true)
        } else {
            setIsCreditLimitLesser(false)
        }
    }, [compareValue, creditLimit])
    const setAndCheckCreditLimit = (value: string) => {
        setCreditLimit(parseFloat(value))
    }
    return (
        <Card className="my-5">
            <Card.Header>
                <Card.Title>Set and Check Credit Limit</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Credit Limit</Form.Label>
                    <Form.Control className={isCreditLimitLesser ? "blob red border border-danger": "border border-success"} type="number" placeholder="Enter credit limit" value={creditLimit} onChange={(e) => setAndCheckCreditLimit(e.target.value)}/>
                </Form.Group>
                </Form>
            </Card.Body>
            </Card>
    )
}

export default CreditCheck
