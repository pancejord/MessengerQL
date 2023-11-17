'use client'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import Chat from "../components/Chat/Chat"
import Auth from "../components/Auth/Auth"
import { Session } from 'next-auth';

const page: NextPage = () => {
    const { data: session } = useSession();

    console.log(session)

    const reloadSession = () => {

    }

  
    return (
      <Box>
        {session?.user?.username ?  <Chat /> : <Auth session={session} reloadSession={reloadSession}/>}
      </Box>
    );
  };
  
  export default page;
  
  
