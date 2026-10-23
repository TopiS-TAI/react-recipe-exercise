import { ListGroup } from "react-bootstrap";
import RecipeItem from "./RecipeItem";

type RecipeItemType = {
    name: string,
    amount: number
}

type Props = {
    items: RecipeItemType[]
}

export default function RecipeItemList({items}: Props) {
    return (
        <ListGroup>
            { items.map(item => (
                <ListGroup.Item>
                    <RecipeItem name={item.name} amount={item.amount}/>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}