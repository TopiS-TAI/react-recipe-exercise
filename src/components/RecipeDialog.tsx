import { Button, Form, Image, Modal } from "react-bootstrap"
import RecipeItemList from "./RecipeItemList"
import { useState } from "react"

type Props = {
    title: string,
    description: string,
    pictureUrl: string,
    items: {name: string, amount: number}[],
    show: boolean,
    hide: () => void
}

export default function RecipeDialog({title, description, pictureUrl, items, show, hide}: Props) {
    const [edit, setEdit] = useState(false)
    const [_title, setTitle] = useState(title)
    const [_description, setDescription] = useState(description)
    return (
        <Modal show={show}>
            <Modal.Header >
                {
                    edit ? (
                        <Form.Control value={_title} onChange={e => setTitle(e.target.value)}></Form.Control>
                    ) : (
                        <Modal.Title style={{ flexGrow: 1}}>{_title}</Modal.Title>
                    )
                }
                <Button variant={edit ? 'success' : 'primary'} onClick={() => setEdit(e => !e)}>
                    {
                        edit ? (
                            <i className="bi bi-check-lg"></i>
                        ) : (
                            <i className="bi bi-pencil-fill"></i>
                        )
                    }
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Image src={pictureUrl} width='100%'></Image>
                {
                    edit ? (
                        <Form.Control as='textarea' value={_description} rows={5} onChange={e => setDescription(e.target.value)}></Form.Control>
                    ) : (
                        <p>{_description}</p>
                    )
                }
                <RecipeItemList items={items}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {setEdit(false); hide()}}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}