import { Button, Image, Modal } from "react-bootstrap"
import RecipeItemList from "./RecipeItemList"

type Props = {
    title: string,
    description: string,
    pictureUrl: string,
    items: {name: string, amount: number}[],
    show: boolean,
    hide: () => void
}

export default function RecipeDialog({title, description, pictureUrl, items, show, hide}: Props) {
    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={pictureUrl} width='100%'></Image>
                <p>{description}</p>
                <RecipeItemList items={items}/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => hide()}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}