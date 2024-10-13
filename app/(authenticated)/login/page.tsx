'use client';

import { Login } from '@everipedia/iq-login/client';
import { useRouter } from 'next/navigation';

function Page({ searchParams: { from } }: { searchParams: { from: string } }) {
  const router = useRouter();
  return (
    <div className='flex items-center justify-center py-10 p-6'>
      <Login
        handleRedirect={() => {
          router.push(from || '/');
        }}
      />
    </div>
  );
}

export default Page;
