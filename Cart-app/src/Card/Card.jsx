import styles from "./Card.module.css";
import React from "react";

function Card({ title = "Default Title", description = "Default Description", price = 0, quantity = 0, removeCard, updateQuantity }) {
    const handleAdd = () => updateQuantity(quantity + 1);
    const handleSub = () => updateQuantity(quantity > 0 ? quantity - 1 : 0);

    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src="https://placehold.co/150" alt={title} />
            <div className={styles.right}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDesc}>{description}</p>
                <div className={styles.cardButtons}>
                    <button className={styles.cardButton} onClick={handleSub}> - </button>
                    <input className={styles.cardInput} readOnly value={quantity} />
                    <button className={styles.cardButton} onClick={handleAdd}> + </button>
                </div>
            </div>

            <div className={styles.cardPrice}>
                <label className={styles.cardPriceLabel}>Price:</label>
                <input className={styles.cardPriceInput} readOnly value={`${price} $`} />
                <br />
                <br />
                <label className={styles.cardPriceLabel}>Total:</label>
                <input className={styles.cardPriceInput} readOnly value={`${quantity * price} $`} />
            </div>

            <button className={styles.cardRemoveButton} onClick={removeCard}></button>
        </div>
    );
}

export default Card;

