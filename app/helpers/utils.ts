export const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
        // Client-side
        return window.location.origin;
    } else {
        // Server-side
        return process.env.NEXT_PUBLIC_API_BASE_URL;
    }
};
