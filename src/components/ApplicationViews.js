import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationProvider } from "./location/LocationProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"

import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from './employee/EmployeeList'

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider> 

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route> 
            </CustomerProvider>
           
           <LocationProvider>
           <Route path="/locations">
                    <LocationList />
                </Route> 
           </LocationProvider>
        
            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route> 
            </EmployeeProvider>
           
        </>
    )
}

