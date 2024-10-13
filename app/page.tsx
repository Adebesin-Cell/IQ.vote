import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-background'>
      <main className='text-center space-y-6 p-6'>
        <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
          Welcome to IQ.vote
        </h1>
        <p className='max-w-[600px] text-muted-foreground'>
          The official voting system for IQ.wiki. Vote for your peers and help
          determine the Employee of the Month.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Button asChild>
            <Link href='/login'>Sign In</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
