import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BarChart, Users } from 'lucide-react';
import React from 'react';

export default function StatsCard() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Points</CardTitle>
          <BarChart className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{10}</div>
          <p className='text-xs text-muted-foreground'>+2 from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Active Users</CardTitle>
          <Users className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>12</div>
          <p className='text-xs text-muted-foreground'>+3 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Employee with the most vote
          </CardTitle>
          <Award className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>Jack Davis</div>
          <p className='text-xs text-muted-foreground'>Leading by 5 points</p>
        </CardContent>
      </Card>
    </div>
  );
}
