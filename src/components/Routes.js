// /src/components/Routes.js
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Portal from '../pages/Portal'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/portal" component={Portal} />
    </BrowserRouter>
);

export default Routes