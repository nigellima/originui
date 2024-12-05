"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus, Share2, ArchiveRestore, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu"

export default function DropdownDemo() {
  const [framework, setFramework] = useState("nextjs");
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Complex menu with icons
          <ChevronDown className="-me-1 ms-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Plus size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>New</span>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>Framework</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuRadioGroup value={framework} onValueChange={setFramework}>
                  <DropdownMenuRadioItem value="nextjs">Next.js</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="sveltekit" disabled>SvelteKit</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="remix">Remix</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="astro">Astro</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger inset>Notifications</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuCheckboxItem
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}        
                >Email</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                >Push</DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Share2 size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Share</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ArchiveRestore size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
            <span>Archive</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <Trash size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
          <span>Delete</span>
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
