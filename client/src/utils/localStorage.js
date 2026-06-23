export function getStoredArray(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : [];
    } catch (error) {
        console.error(`Failed to read ${key} from localStorage`, error);
        return [];
    }
}

export function setStoredArray(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Failed to save ${key} to localStorage`, error);
    }
}