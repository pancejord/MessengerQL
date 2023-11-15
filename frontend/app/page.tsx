'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import Chat from "../components/Chat/Chat"
import Auth from "../components/Auth/Auth"
import { Session } from 'next-auth';

const page: NextPage = () => {
    const { data: session, status } = useSession();

    console.log(session)
  
    const handleSignIn = () => {
      signIn('google');
    };
  
    const handleSignOut = () => {
      signOut();
    };
  
    if (status === 'loading') {
      // Loading state: Render a loading indicator or nothing
      return <div>Loading...</div>;
    }
  
    return (
      <Box>
        {session?.user?.username ?  <Chat />  : <Auth/>}
      </Box>
    );
  };
  
  export default page;
  
  
