import { errorValidationType } from "@/types/errors.type";
import { toast } from "sonner";

const uri = import.meta.env.VITE_API_URI;

type ErrorResponseType = {
    message? : string,
    data? : object | []
}

type FetchingParamsType<T> = {
    method?: "POST" | "PATCH" | "GET" | "PUT" | "DELETE";
    endpoint: string;
    data?: Record<string, unknown> | FormData;
    credentials?: boolean;
    onSuccess?: (response: T) => void;
    onError?: (error:ErrorResponseType) => void;
    onFinish?: (response: T | null) => void;
};

async function fetching<T>({ 
    method = "GET", 
    endpoint, 
    data, 
    credentials = false, 
    onSuccess, 
    onError, 
    onFinish 
}: FetchingParamsType<T>): Promise<T | null> {

    const headers: HeadersInit = {
        "Accept": "application/json",
    };

    // Si data no es FormData, agregamos Content-Type JSON
    if (data && !(data instanceof FormData)) {
        headers["Content-Type"] = "application/json";
    }

    try {
        const result = await fetch(`${uri}${endpoint}`, {
            method,
            body: data ? (data instanceof FormData ? data : JSON.stringify(data)) : undefined,
            headers,
            credentials: credentials ? "include" : "same-origin",
        });

        const status = await result.status;

        const resJson = await result.json();

        if (result.status === 400 && resJson.errors) {
            const errorValidation: errorValidationType = resJson;
            errorValidation.errors.forEach(error => {
                toast.info("Campos faltantes", { description: error.message });
            });
            onError?.({ message: "Campos faltantates", data: errorValidation?.errors });  // Llamamos onError también
        } else if (result.status === 500) {
            const errorMessage = resJson.message;
            toast.error(errorMessage);
            onError?.(errorMessage);
        } else if (result.ok) {
            onSuccess?.(resJson);
        }

        onFinish?.(resJson);

        return {...resJson, status};
    } catch (error) {
        const errorMessage = (error as Error).message;
        toast.error(errorMessage);
        onError?.({ message: errorMessage });

        return null;
    }
}

export default fetching;
