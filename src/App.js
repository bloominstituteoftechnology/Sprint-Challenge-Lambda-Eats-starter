import React,{useState} from "react";
import {Route} from 'react-router-dom';

import Home from "./Pages/Home";
import Form from "./Pages/form";
import OrderComplete from './Pages/OrderCompletePage';

const App = () => {
    const [order,setOrder] = useState([]);
    return (
        <>
            <Route exact path ='/'>

                <Home />

            </Route>

            <Route path='/pizza'>

                <Form order = {order} setOrder = {setOrder} />

            </Route>

            <Route path='/order'>

                <OrderComplete order = {order} />

            </Route>


        </>
    );
};
export default App;
