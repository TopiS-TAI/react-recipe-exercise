import { Button, Card } from "react-bootstrap"
import "./RecipeCard.css"
import { useState, type MouseEvent } from "react"
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
    
    function handleCardClick(e: MouseEvent<HTMLElement>) {
        console.log('card', e)
        setShowDialog(true)
    }
    
    function handleButtonClick(e: MouseEvent<HTMLButtonElement>) {
        console.log('button', e)
        e.stopPropagation()
        setShowDetails(s => !s)
    }

    return (
        <>
            <Card onClick={e => handleCardClick(e)}>
                <Card.Img src={pictureUrl}/>
                <Card.Body>
                    <Card.Title className={"ellipsis " + (showDetails ? 'show' : '')}>{title}</Card.Title>
                    <Card.Text className={"ellipsis " + (showDetails ? 'show' : '')}>{description}</Card.Text>
                    <Button onClick={handleButtonClick}>{showDetails ? 'Hide Details' : 'Show Details'}</Button>
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
