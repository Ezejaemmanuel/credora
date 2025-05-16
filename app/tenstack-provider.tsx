// app/providers.jsx
'use client'

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export function TenstackProviders(props: { children: React.ReactNode }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                queryCache: new QueryCache({
                    onError: (error) => {
                        console.error('Global Query Error:', { error })
                    },
                    

                }),
                mutationCache: new MutationCache({
                    onError: (error) => {
                        console.error('Global Mutation Error:', { error })
                    },
                    onSettled(data, error, variables, context, mutation) {
                    },
                    onSuccess(data, variables, context, mutation) {
                        console.log('Global Mutation Success:', { data, variables, context, mutation })
                        queryClient.invalidateQueries()
                        console.log('Global Mutation Success - Cache Invalidated')
                    },
                }),
                defaultOptions: {
                    queries: {
                        staleTime: 5 * 1000 * 1000, // 5 seconds in milliseconds



                    },
                },
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
            <ReactQueryDevtools initialIsOpen={true} buttonPosition='top-left' position='left' />
        </QueryClientProvider>
    )
}
