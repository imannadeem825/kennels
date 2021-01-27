import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <address className="animal__location">{animal.location.name}</address>
        <div className="animal__breed">{animal.breed}</div>
    </section>
)