"use client";

import { Search } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

export function SearchBar({
  className,
  placeholder,
  label,
}: {
  className?: string;
  placeholder: string;
  label: string;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <InputGroup
        className="flex-1 rounded-full bg-white h-12 px-4 space-x-2"
        onClick={() => inputRef.current?.focus()}
      >
        <InputGroupAddon>
          <Search className="size-5 text-gray-400" />
        </InputGroupAddon>

        <InputGroupInput
          ref={inputRef}
          type="search"
          aria-label="Search courses"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="text-gray-950 placeholder:text-gray-400 body-l!"
        />
      </InputGroup>

      <Button variant="default" className="rounded-full h-12 w-24 label-l!">
        {label}
      </Button>
    </div>
  );
}
