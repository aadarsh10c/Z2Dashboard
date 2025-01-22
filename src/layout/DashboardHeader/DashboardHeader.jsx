import { Avatar, AvatarFallback, AvatarImage } from  "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Command, Search, ChevronDown } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center pr-2 py-2 w-full">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center gap-2 flex-1">
          <div className="flex items-center gap-2 bg-white/10 px-2 rounded-md max-w-[20rem] w-full h-8">
            <Search className="w-6 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent border-none outline-none text-[hsl(var(--white-400))] caret-[hsl(var(--white-400))] w-full h-full text-sm"
            />
            <div className="flex items-center gap-0.5 px-1 py-0.5 bg-white/10 rounded text-xs text-[hsl(var(--white-400))]">
              <Command className="w-3 h-3" />
              <span className="text-xs">S</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button className="w-8 h-8">
            <span className="mb-[0.3rem] font-bold">...</span>
          </Button>
          <Button className="h-8 px-1.5">
            <span className="">🔼</span>
            <span>Submit Ticket</span>
          </Button>
          <div className="h-8 flex items-center gap-1 border border-[hsl(var(--navy-blue-600))] rounded-2xl p-1 text-[hsl(var(--white-500))] text-sm">
            <Avatar className="w-4 h-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>John Doe</span>
            <ChevronDown className="w-4 h-2 font-bold" />
          </div>
        </div>
      </div>
    </header>
  );
}
