import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-background'>
      <div className='w-full max-w-md space-y-8 p-6 bg-card rounded-lg shadow-lg'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold'>Login to IQ.vote</h1>
          <p className='text-muted-foreground'>
            Enter your credentials to access your account
          </p>
        </div>
        <form className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              placeholder='m@example.com'
              required
              type='email'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' required type='password' />
          </div>
          <Button className='w-full' type='submit'>
            Login
          </Button>
        </form>
        <div className='text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link className='underline' href='/signup'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
