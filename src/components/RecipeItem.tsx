import { useState } from "react"
import { Button, Form } from "react-bootstrap"

type Props = {
    name: string,
    amount: number
}

export default function RecipeItem({name, amount}: Props) {
    const [_name, setName] = useState(name)
    const [_amount, setAmount] = useState(amount)
    const [edit, setEdit] = useState(false)
    return (
        <p style={{display: 'flex', justifyContent: 'space-between', margin: 0}}>
            {
                edit ? (
            <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1, margin: 0}}>
                <Form.Control value={_name} onChange={v => setName(v.target.value)}></Form.Control>
                <Form.Control style={{flexBasis: '4em', textAlign: 'right'}} type="number" value={_amount} onChange={v => setAmount(parseInt(v.target.value))}></Form.Control>
            </span>
                ) : (
                <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexGrow: 1, margin: 0}}>
                <span>{_name}</span>
                <span>{_amount}</span>
            </span>
                )
            }
            <Button variant={ edit ? 'success' : 'primary'} style={{marginLeft: '1em'}} onClick={() => setEdit(e => !e)}>
                {
                    edit ? (
                        <i className="bi bi-check-lg"></i>
                    ) : (
                        <i className="bi bi-pencil-fill"></i>
                    )
                }
            </Button>
        </p>
    )
}