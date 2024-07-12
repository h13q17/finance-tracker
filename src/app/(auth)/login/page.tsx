'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { ChromeIcon, GithubIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema } from '@/lib/types';
import Loader from '@/components/loader';

export default function Page() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState('');

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData
  ) => {};

  return (
    <>
      <div className="absolute top-8 right-10">
        <ModeToggle />
      </div>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Create an accout.</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              onChange={() => {
                if (submitError) {
                  setSubmitError('');
                }
              }}
              className="grid gap-4"
            >
              <div className="grid grid-cols-2 gap-2">
                <Button variant={'outline'} disabled={isLoading}>
                  <GithubIcon className="mr-2 w-4 h-4" />
                  Github
                </Button>
                <Button variant={'outline'} disabled={isLoading}>
                  <ChromeIcon className="mr-2 w-4 h-4" />
                  Github
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center items-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormDescription>
                        <Label htmlFor="email" className="text-foreground">
                          Email
                        </Label>
                      </FormDescription>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="email@test.com"
                          type="email"
                          disabled={isLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="flex flex-col space-y-1.5">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormDescription>
                        <Label htmlFor="password" className="text-foreground">
                          Password
                        </Label>
                      </FormDescription>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="SuperSecretPassword"
                          disabled={isLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <div className="flex flex-col space-y-1 mt-1.5 -mb-2">
                <Button disabled={isLoading}>
                  {isLoading ? (
                    <div className="h-6 w-6">
                      <Loader />
                    </div>
                  ) : (
                    'Create an account'
                  )}
                </Button>
                <Button
                  variant={'link'}
                  className="text-muted-foreground"
                  disabled={isLoading}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault()
                    router.push('/signup');
                  }}
                >
                  Already have an account?
                </Button>
              </div>
              {submitError && <FormMessage>{submitError}</FormMessage>}
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
