import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import counter from "./features/counter"
import fruits from "./features/fruits"
import fruitsCart from "./features/fruitsCard"
import logger from "redux-logger"
import users from "./features/users"
import chrono from "./features/chrono"

export const store = configureStore({
    reducer: {
        counter,
        fruits,
        fruitsCart,
        users,
        chrono
    },
    /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) */
})

/* function customMiddleware(store) {
    return function(next){
        return function(action){
            //console.log(store.getState());
            //console.log(next);
            // console.log(action);
            next({
                type: "fruitsCart/addOne",
                payload:{
                    name: "Mango",
                    url: "/images/mango.jpg",
                    price: 999,
                    id: 38749327
                }
            })
        }
    }
} */