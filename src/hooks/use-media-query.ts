// src/hooks/use-media-query.ts
import { useEffect, useState } from 'react';

// Custom hook to check for media query
export function useMediaQuery(query: string): boolean {
    // State to store whether the query matches
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        // Create a MediaQueryList object
        const mediaQueryList = window.matchMedia(query);

        // Function to handle changes
        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Set the initial state
        setMatches(mediaQueryList.matches);

        // Add event listener for changes
        mediaQueryList.addEventListener('change', handleChange);

        // Clean up the event listener on unmount
        return () => {
            mediaQueryList.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
}
