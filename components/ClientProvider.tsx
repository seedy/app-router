"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react";

interface ClientProviderProps {
    children: ReactNode
}
const ClientProvider = ({ children }: ClientProviderProps) => {
    const [queryClient] = useState(() => new QueryClient({ defaultOptions: { queries: { suspense: true } } }));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ClientProvider