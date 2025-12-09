import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Header from "../components/Header";
import Progress from "../components/Progress";

const LazyMarketingApp = lazy(() => import("../components/MarketingApp"));
const LazyAuthApp = lazy(() => import("../components/AuthApp"));

const generateClassName = createGenerateClassName({
    productionPrefix: 'cnt',
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth" component={LazyAuthApp} />
                            <Route path="/" component={LazyMarketingApp} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
}