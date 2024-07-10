import { MenuIcon, Wallet } from 'lucide-react';
import { ModeToggle } from './ui/mode-toggle';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function Header() {
  return (
    <div className="w-screen dark:shadow-none dark:border-b shadow-sm bg-background h-14 py-2 px-2 md:px-16 lg:px-32 flex items-center justify-between">
      <div>
        <Button variant={'link'}>
          <Wallet />
          <span className="hidden">Home</span>
        </Button>
      </div>
      <div className="md:block hidden">
        <Button variant={'link'}>Features</Button>
        <Button variant={'link'}>Pricing</Button>
        <Button variant={'link'}>About</Button>
        <Button variant={'link'}>Contact</Button>
      </div>
      <div className="md:block hidden">
        <ModeToggle />
      </div>
      <div className="md:hidden block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'outline'} size={'icon'}>
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-1 mr-2">
            <DropdownMenuGroup>
              <DropdownMenuItem className="active:bg-secondary">
                <span>Features</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="active:bg-secondary">
                <span>Pricing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="active:bg-secondary">
                <span>About</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="active:bg-secondary">
                <span>Contact</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
