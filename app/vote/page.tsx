'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useState } from 'react';
// import { toast } from '@/components/ui/use-toast';

// Mock data for employees
const employees = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'Diana Martinez' },
  { id: 5, name: 'Ethan Lee' }
];

export default function VotingPage() {
  const [firstVote, setFirstVote] = useState('');
  const [secondVote, setSecondVote] = useState('');
  const [thirdVote, setThirdVote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstVote && secondVote && thirdVote) {
      console.log('Votes submitted:', { firstVote, secondVote, thirdVote });
      //   toast({
      //     title: 'Votes Submitted',
      //     description: 'Your votes have been successfully recorded.'
      //   });
    } else {
      console.log('Error');
      //   toast({
      //     title: 'Incomplete Votes',
      //     description: 'Please select an employee for each vote.',
      //     variant: 'destructive'
      //   });
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-background'>
      <div className='w-full max-w-md space-y-8 p-6 bg-card rounded-lg shadow-lg'>
        <div className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold'>Cast Your Votes</h1>
          <p className='text-muted-foreground'>
            Select your top three employees for Employee of the Month
          </p>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>First Vote (5 points)</label>
            <Select onValueChange={setFirstVote}>
              <SelectTrigger>
                <SelectValue placeholder='Select an employee' />
              </SelectTrigger>
              <SelectContent>
                {employees.map((employee) => (
                  <SelectItem key={employee.id} value={employee.id.toString()}>
                    {employee.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>
              Second Vote (3 points)
            </label>
            <Select onValueChange={setSecondVote}>
              <SelectTrigger>
                <SelectValue placeholder='Select an employee' />
              </SelectTrigger>
              <SelectContent>
                {employees.map((employee) => (
                  <SelectItem key={employee.id} value={employee.id.toString()}>
                    {employee.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>Third Vote (2 points)</label>
            <Select onValueChange={setThirdVote}>
              <SelectTrigger>
                <SelectValue placeholder='Select an employee' />
              </SelectTrigger>
              <SelectContent>
                {employees.map((employee) => (
                  <SelectItem key={employee.id} value={employee.id.toString()}>
                    {employee.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button className='w-full' type='submit'>
            Submit Votes
          </Button>
        </form>
      </div>
    </div>
  );
}
