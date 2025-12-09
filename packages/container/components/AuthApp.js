import React, { useRef, useEffect } from "react";
import { mount as AuthAppMount } from 'auth/AuthApp';
import { useHistory } from "react-router-dom";

export default () => {
    // Test comment for updated CI/CD A
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = AuthAppMount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ hash, key, pathname, search, state }) => {
                console.log('Container noticed navigation to ', pathname);
                history.push({ pathname, search, hash, state })
            }
        });

        history.listen(onParentNavigate)
    }, []);

    return (
        <div ref={ref} />
    );
}