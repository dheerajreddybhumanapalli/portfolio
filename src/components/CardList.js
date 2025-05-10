import Card from "./Card";

export default function CardList({ cards }){
    return (
        <div className="card-list">
            {cards.map((card, card_key) => (
                <Card key={ card_key } title={ card.title } roles={ card.roles }/>
            ))}
        </div>
    )
}