'use server'

import { getSession } from 'next-auth/react';
import type { NextPageContext } from "next";


export async function setServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
  
    return {
      props: {
        session,
      }
    }
  }
  