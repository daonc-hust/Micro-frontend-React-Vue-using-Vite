// src/VueComponentLoader.jsx
import { useEffect, useRef } from 'react';
import {createApp} from "vue";

const VueComponentLoader = () => {
    const vueContainerRef = useRef(null);

    useEffect(() => {
        const loadVueApp = async () => {
            // Ensure Vue is loaded
            // await import('https://cdn.jsdelivr.net/npm/vue@next');

            // Ensure Vue app library is loaded
            await import('daonc/Main');

            // Initialize Vue app on the div container
            if (vueContainerRef.current) {
                createApp(vueContainerRef.current);
            }
        };

        loadVueApp();
    }, []);

    return <div ref={vueContainerRef}></div>;
};

export default VueComponentLoader;
