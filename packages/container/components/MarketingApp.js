import React, { useRef, useEffect } from "react";
import { mount as MarketingMount } from 'marketing/MarketingApp';

export default () => {
    // Test comment for updated CI/CD ABC
    const ref = useRef(null);

    useEffect(() => {
        MarketingMount(ref.current);
    }, []);

    return (
        <div ref={ref} />
    );
}