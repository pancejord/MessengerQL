'use client'
import { ApolloProvider } from "@apollo/client"
import { client } from "./apollo-client"

interface IApollo {
    children: React.ReactNode
}

const ApolloContext: React.FC<IApollo> = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default ApolloContext;
 