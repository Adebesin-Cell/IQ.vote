import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { getAuth } from '@everipedia/iq-login';
import { Award } from 'lucide-react';
import Link from 'next/link';
import { VotingForm } from './_components/voting-form';
import VotingTable from './_components/voting-table';
// Function to generate random names

const voteSubmissions = [
  {
    id: 1,
    month: 'October',
    firstVote: 'Bob Smith',
    secondVote: 'Charlie Brown',
    thirdVote: 'Diana Martinez'
  },
  {
    id: 2,
    month: 'November',
    firstVote: 'Charlie Brown',
    secondVote: 'Diana Martinez',
    thirdVote: 'Ethan Lee'
  },
  {
    id: 3,
    month: 'December',
    firstVote: 'Alice Johnson',
    secondVote: 'Bob Smith',
    thirdVote: 'Charlie Brown'
  },
  {
    id: 4,
    month: 'January',
    firstVote: 'Diana Martinez',
    secondVote: 'Ethan Lee',
    thirdVote: 'Alice Johnson'
  }
];

export default async function LandingPage() {
  const { address } = await getAuth();

  const isLoggedIn = !!address;
  return (
    <main className='container max-w-7xl mx-auto'>
      {isLoggedIn ? (
        <div className='space-y-8 pt-20'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
                Welcome to IQ.vote
              </h1>
              <p className='max-w-[600px] text-muted-foreground'>
                The official voting system for IQ.wiki. Vote for your peers and
                help determine the Employee of the Month.
              </p>
            </div>
            <VotingForm />
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Most Voted Employee
                </CardTitle>
                <Award className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>Bob Smith</div>
                <p className='text-xs text-muted-foreground'>
                  Leading by 5 points
                </p>
              </CardContent>
            </Card>
          </div>
          <div className=''>
            <Card className='col-span-2 md:col-span-1'>
              <CardHeader>
                <CardTitle>Recent Votes</CardTitle>
                <CardDescription>Summary of your vote cast</CardDescription>
              </CardHeader>
              <CardContent>
                <VotingTable votes={voteSubmissions} />
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center min-h-screen gap-5'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
            Welcome to IQ.vote
          </h1>
          <p className='max-w-[600px] text-muted-foreground text-center'>
            The official voting system for IQ.wiki. Vote for your peers and help
            determine the Employee of the Month.
          </p>
          <Button>
            <Link href='/login'>Login</Link>
          </Button>
        </div>
      )}
    </main>
  );
}
