'use client'
import { Box } from "@chakra-ui/react"
import { useSession, getSession } from 'next-auth/react';
import type { NextPage, NextPageContext } from "next";
import Loading from '@/components/Loading';
import Chat from '@/components/Chat/Conversations/Feed/Chat';
import Auth from '@/components/Auth/Auth';
import { Session } from "next-auth";

const Home: NextPage = () => {

  const { data: session } = useSession();

  console.log("session", session)


  const reloadSession = () => {

  }



  return (
    <Box>
      {session?.user?.username ? ( <Chat /> ) : (<Auth session={session} reloadSession={reloadSession}/>)}
      </Box>




  )
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  }
}

export default Home;



