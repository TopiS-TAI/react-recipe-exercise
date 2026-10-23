import { Button, Card } from "react-bootstrap"
import "./RecipeCard.css"
import { useState } from "react"

type Props = {
    title: string,
    description: string,
    pictureUrl: string
}

export default function RecipeCard({title, description, pictureUrl}: Props) {
    const [show, setShow] = useState(false)
    function handleClick() {
        setShow(s => !s)
    }
    return (
        <Card>
            <Card.Img src={pictureUrl}/>
            <Card.Body>
                <Card.Title className={"ellipsis " + (show ? 'show' : '')}>{title}</Card.Title>
                <Card.Text className={"ellipsis " + (show ? 'show' : '')}>{description}</Card.Text>
                <Button onClick={handleClick}>{show ? 'Hide Details' : 'Show Details'}</Button>
            </Card.Body>
        </Card>
    )
}
