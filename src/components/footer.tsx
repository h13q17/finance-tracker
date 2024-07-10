import { Button } from './ui/button';

export default function Footer() {
  return (
    <div className=" w-screen dark:shadow-none dark:border-y shadow-sm bg-background pt-5 sm:pt-2 sm:h-14 py-2 px-2 md:px-16 lg:px-32 flex items-center justify-between flex-col sm:flex-row">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Fintrack. All rights reserved.
      </p>
      <div>
        <Button variant={'link'}>Terms of service</Button>
        <Button variant={'link'}>Privacy</Button>
      </div>
    </div>
  );
}
