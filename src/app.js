import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Loader, Nav } from './components';
import { routes, ProtectectedRoutes } from './routes';
import { theme } from './styles/theme';
import NormalizeStyles from './styles/NormalizeStyles';
import BaseStyles from './styles/BaseStyles';


const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <NormalizeStyles />
            <BaseStyles />
            <Router>
                <Suspense fallback={<Loader />}>
                    {/* <Nav /> */}
                    <Switch>
                        {
                            routes.map(route => {
                                return (
                                    <ProtectectedRoutes key={route.path} {...route} />
                                );
                            })
                        }
                    </Switch>
                </Suspense>
            </Router>
        </ThemeProvider>
    )
}

export default App;