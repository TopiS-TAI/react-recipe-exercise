import { Button, Card } from "react-bootstrap"
import "./RecipeCard.css"
import { useState } from "react"
import RecipeDialog from "./RecipeDialog"
import type { RecipeItemType } from "./RecipeItemList"

type Props = {
    title: string,
    description: string,
    pictureUrl: string,
    items: RecipeItemType[]
}

export default function RecipeCard({title, description, pictureUrl, items}: Props) {
    const [showDetails, setShowDetails] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    function handleClick() {
        setShowDetails(s => !s)
    }
    function handleCardClick() {
        setShowDialog(true)
    }
    return (
        <>
            <Card onClick={handleCardClick}>
                <Card.Img src={pictureUrl}/>
                <Card.Body>
                    <Card.Title className={"ellipsis " + (showDetails ? 'show' : '')}>{title}</Card.Title>
                    <Card.Text className={"ellipsis " + (showDetails ? 'show' : '')}>{description}</Card.Text>
                    <Button onClick={handleClick}>{showDetails ? 'Hide Details' : 'Show Details'}</Button>
                </Card.Body>
            </Card>
            <RecipeDialog
                description={description}
                hide={() => setShowDialog(false)}
                items={items}
                pictureUrl={pictureUrl}
                show={showDialog}
                title={title}
            />
        </>
    )
}
