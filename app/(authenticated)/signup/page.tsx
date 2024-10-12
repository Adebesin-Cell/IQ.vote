import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-background'>
      <div className='w-full max-w-md space-y-8 p-6 bg-card rounded-lg shadow-lg'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold'>Sign Up for IQ.vote</h1>
          <p className='text-muted-foreground'>
            Create an account to participate in employee voting
          </p>
        </div>
        <form className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Full Name</Label>
            <Input id='name' placeholder='John Doe' required />
          </div>
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
          <div className='space-y-2'>
            <Label htmlFor='confirm-password'>Confirm Password</Label>
            <Input id='confirm-password' required type='password' />
          </div>
          <Button className='w-full' type='submit'>
            Sign Up
          </Button>
        </form>
        <div className='text-center text-sm'>
          Already have an account?{' '}
          <Link className='underline' href='/login'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
