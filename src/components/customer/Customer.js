import React from "react"
import "./customer.css"

export const Customer = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address className="location__address">{customer.location.name}</address>
    </section>
)