type Props = {
    name: string,
    amount: number
}

export default function RecipeItem({name, amount}: Props) {
    return (
        <p style={{display: 'flex', 'justifyContent': 'space-between', 'margin': 0}}>
            <span>{name}</span>
            <span>{amount}</span>
        </p>
    )
}