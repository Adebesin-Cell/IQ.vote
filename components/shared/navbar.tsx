import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { adminWhitelist } from '@/db/adminWhitelist';
import { getAuth } from '@everipedia/iq-login';
import Link from 'next/link';
import { IqWikiIcon } from './iq-wiki-logo';
import { MobileMenu, NavLinks } from './mobile-menu';
import { ThemeSwitcher } from './theme-switcher';

export default async function Navbar() {
  const { address } = await getAuth();

  const isLoggedIn = !!address;
  const isAdmin = adminWhitelist
    .map((admin) => admin.toLowerCase())
    .includes(address?.toLowerCase() as string);
  const user = { name: 'John Doe', email: 'john@example.com' };

  return (
    <nav className='bg-background border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center'>
              <IqWikiIcon className='h-8 w-8 mr-2' />
              <span className='text-xl font-semibold'>IQ.vote</span>
            </Link>
            <div className='hidden md:flex md:ml-10 md:space-x-8'>
              <NavLinks isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
            </div>
          </div>
          <div className='flex items-center'>
            <ThemeSwitcher />
            <div className='hidden md:block'>
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='ghost'
                      className='relative h-8 w-8 rounded-full'
                    >
                      <Avatar className='h-8 w-8'>
                        <AvatarImage
                          src='https://github.com/shadcn.png'
                          alt={user.name}
                        />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className='space-x-2'>
                  <Button asChild>
                    <Link href='/signup'>Sign In</Link>
                  </Button>
                </div>
              )}
            </div>
            <MobileMenu isLoggedIn={isLoggedIn} user={user} isAdmin={isAdmin} />
          </div>
        </div>
      </div>
    </nav>
  );
}
