'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';

// Mock data
const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    isWhitelisted: true
  },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', isWhitelisted: false },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    isWhitelisted: true
  }
];

const voteSubmissions = [
  {
    id: 1,
    voter: 'Alice Johnson',
    firstVote: 'Bob Smith',
    secondVote: 'Charlie Brown',
    thirdVote: 'Diana Martinez'
  },
  {
    id: 2,
    voter: 'Bob Smith',
    firstVote: 'Charlie Brown',
    secondVote: 'Diana Martinez',
    thirdVote: 'Ethan Lee'
  }
];

const topEmployees = [
  { rank: 1, name: 'Charlie Brown', points: 13 },
  { rank: 2, name: 'Diana Martinez', points: 8 },
  { rank: 3, name: 'Bob Smith', points: 5 }
];

export default function AdminPanel() {
  const [newUserEmail, setNewUserEmail] = useState('');

  const handleWhitelist = (userId: number) => {
    console.log('userId', userId);
    // toast({
    //   title: 'User Whitelisted',
    //   description: `User with ID ${userId} has been whitelisted.`
    // });
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();

    // toast({
    //   title: 'User Added',
    //   description: `New user with email ${newUserEmail} has been added.`
    // });
    setNewUserEmail('');
  };

  return (
    <div className='container mx-auto p-6 space-y-8'>
      <h1 className='text-3xl font-bold'>Admin Panel</h1>
      <Tabs defaultValue='users'>
        <TabsList>
          <TabsTrigger value='users'>Manage Users</TabsTrigger>
          <TabsTrigger value='votes'>Vote Submissions</TabsTrigger>
          <TabsTrigger value='results'>Results</TabsTrigger>
        </TabsList>
        <TabsContent value='users' className='space-y-4'>
          <form onSubmit={handleAddUser} className='flex gap-2'>
            <Input
              type='email'
              placeholder='New user email'
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              required
            />
            <Button type='submit'>Add User</Button>
          </form>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Whitelist Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.isWhitelisted ? 'Whitelisted' : 'Not Whitelisted'}
                  </TableCell>
                  <TableCell>
                    {!user.isWhitelisted && (
                      <Button onClick={() => handleWhitelist(user.id)}>
                        Whitelist
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value='votes'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Voter</TableHead>
                <TableHead>First Vote (5 pts)</TableHead>
                <TableHead>Second Vote (3 pts)</TableHead>
                <TableHead>Third Vote (2 pts)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {voteSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{submission.voter}</TableCell>
                  <TableCell>{submission.firstVote}</TableCell>
                  <TableCell>{submission.secondVote}</TableCell>
                  <TableCell>{submission.thirdVote}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value='results'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Employee</TableHead>
                <TableHead>Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topEmployees.map((employee) => (
                <TableRow key={employee.rank}>
                  <TableCell>{employee.rank}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
