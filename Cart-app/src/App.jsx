import React, { useState } from "react";
import Card from "./Card/Card.jsx";
import Header from "./Header/Header.jsx";

function App() {
    const [cards, setCards] = useState([
        { id: 1, title: "Banana", description: "A dozen of ripe bananas", price: 30, quantity: 0 },
        { id: 2, title: "Apple", description: "A dozen of fresh apples", price: 50, quantity: 0 },
        { id: 3, title: "Oranges", description: "A dozen of fresh Oranges", price: 25, quantity: 0 },
        // Add more cards as needed
    ]);

    const [totals, setTotals] = useState({ totalQuantity: 0, totalPrice: 0 });

    const removeCard = (id) => {
        const cardToRemove = cards.find(card => card.id === id);
        if (cardToRemove) {
            setTotals(prevTotals => ({
                totalQuantity: prevTotals.totalQuantity - cardToRemove.quantity,
                totalPrice: prevTotals.totalPrice - cardToRemove.quantity * cardToRemove.price,
            }));
        }
        setCards(cards.filter(card => card.id !== id));
    };

    const updateTotals = (id, newQuantity) => {
        const updatedCards = cards.map(card => {
            if (card.id === id) {
                return { ...card, quantity: newQuantity };
            }
            return card;
        });

        // Calculate new totals
        const totalQuantity = updatedCards.reduce((sum, card) => sum + card.quantity, 0);
        const totalPrice = updatedCards.reduce((sum, card) => sum + card.quantity * card.price, 0);

        setCards(updatedCards);
        setTotals({ totalQuantity, totalPrice });
    };

    return (
        <>
            <Header quantity={totals.totalQuantity} total={totals.totalPrice} />
            {cards.map(card => (
                <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    price={card.price}
                    quantity={card.quantity}
                    removeCard={() => removeCard(card.id)}
                    updateQuantity={(newQuantity) => updateTotals(card.id, newQuantity)}
                />
            ))}
        </>
    );
}

export default App;