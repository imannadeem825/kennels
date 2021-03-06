

import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    // const { locations, getLocations } = useContext(LocationContext)
    // const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("AnimalList: Initial render before data")
        // getLocations()
        // .then(getCustomers)
        getAnimals()
    }, [])


    return (
        <div className="animals">
            {animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
        </div>
    )
}

// animals.map(animal => {
//   const owner = customers.find(c => c.id === animal.customerId)
//   const clinic = locations.find(l => l.id === animal.locationId)

//   return <AnimalCard key={animal.id}
//               location={clinic}
//               customer={owner}
//               animal={animal} />
// })



// import React, { useContext, useEffect } from "react"
// import { AnimalContext } from "./AnimalProvider"
// import { AnimalCard } from "./AnimalCard"
// import "./Animal.css"

// export const AnimalList = () => {
//   // This state changes when `getAnimals()` is invoked below
//   const { animals, getAnimals } = useContext(AnimalContext)

//   //useEffect - reach out to the world for something
//   useEffect(() => {
//     console.log("AnimalList: useEffect - getAnimals")
//     getAnimals()

//   }, [])


//   return (
//     <div className="animals">
//       {console.log("AnimalList: Render", animals)}
//       {
//         animals.map(animal => {
//           return <AnimalCard key={animal.id} animal={animal} />
//         })
//       }
//     </div>
//   )
// }


