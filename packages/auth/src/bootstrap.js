import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from "./App";

const mount = ($el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    
    if (onNavigate) 
        history.listen(onNavigate);


    console.log($el, App);
    ReactDOM.render(<App history={history} />, $el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

if (process.env.NODE_ENV === 'development') {
    const rootElement = document.getElementById('root');
    if (rootElement)
        mount(rootElement, {defaultHistory: createBrowserHistory()});
}

export { mount };