import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {LogoutLink} from '@kinde-oss/kinde-auth-nextjs/components'


interface iAppProps{
    userImage: string | null
}
function UserDropdown({userImage} : iAppProps) {
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="h-6 w-6 lg:w-5 lg:h-5" />
          <img
            className="rounded-full h-8 w-8 hidden lg:block"
            src={userImage ?? "https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png"}
            alt="avatar"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem>
          <Link className="w-full" href="/r/create">
            Create community
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full" href="/create">
            Create Post
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
            <Link className="w-full" href="/settings">
         Settings
        </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator/>
        <DropdownMenuItem>
           <LogoutLink className="w-full">Logout</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdown;
