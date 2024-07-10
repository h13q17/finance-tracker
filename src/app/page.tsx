import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function Page() {
  return (
    <div className="h-[calc(100svh-142px)] sm:h-[calc(100svh-112px)] px-2 md:px-16 lg:px-32 py-2 flex items-center">
      <div className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-3xl xl:text-6xl font-bold text-center">
              Take Control of Your Finances
            </h1>
            <p className="max-w-[800px] text-md sm:text-xl text-muted-foreground text-center">
              Fintrack is a powerful finance tracking app that helps you manage
              your money with ease. Track your income, expenses, and savings,
              and get personalized insights to reach your financial goals.
            </p>
            <div className="sm:space-x-4 space-y-2 sm:space-y-0 flex flex-col items-center justify-center sm:flex-row">
              <Button variant={'default'}>Create an account</Button>
              <Button className='m-0' variant={'outline'}>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
