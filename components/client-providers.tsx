'use client';

import { IqLoginProvider } from '@everipedia/iq-login/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './ui/sonner';

const queryClient = new QueryClient();

export function ClientProviders({
  children
}: Readonly<React.PropsWithChildren>) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <IqLoginProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </IqLoginProvider>
      <Toaster
        position='bottom-center'
        closeButton
        duration={3000}
        expand={true}
        richColors
      />
    </ThemeProvider>
  );
}
