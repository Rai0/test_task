import {useState} from "react";

export const useResponse = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const status = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }

    return [status, isLoading, error]
}