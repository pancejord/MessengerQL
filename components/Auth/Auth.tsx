import React, { useState } from 'react'
import { Session } from 'next-auth';
import { Center, Stack, Text, Button, Image, Input } from "@chakra-ui/react"
import { signIn, signOut, useSession,  } from 'next-auth/react';
import { FC } from 'react';

interface IAuthProps {
    session: Session | null;
    reloadSession: () => void;

}


const onSubmit = async () => {
    try {
        
    } catch (error) {
        
    }

}

const Auth: FC<IAuthProps> = ({session, reloadSession}) => {

    const [username, setUsername] = useState("");

  return (
    <Center height="100vh">
        <Stack>
            {session ? ( 
                
                <>
                <Text className="font-bold text-5xl pb-4"> Create Username</Text>

                <Input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                 placeholder="Enter A Username" 
                value={username} 
                onChange={(e) => (setUsername)(e.target.value)}>
                </Input>
     

                <Button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                onClick={() => onSubmit}>Save</Button>
                </>
            ): (  
                <>
                <Text className="font-bold text-5xl pb-4">MessengerQL</Text>
                <Button className='bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  onClick={() => signIn('google')} leftIcon={<Image height='20px' src='googlelogo.png' />}>Continue With Google</Button>
                </>


            )}
        </Stack>
    </Center>
  )
}

export default Auth
