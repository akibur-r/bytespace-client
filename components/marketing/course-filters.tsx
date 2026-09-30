"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { landingPage } from "@/lib/content/marketing/landing-page";

export function CourseFilters() {
  const { categories, moreLabel } = landingPage.courses;

  return (
    <Tabs defaultValue={categories[0].slug}>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5">
        <TabsList className="contents">
          {categories.map((category) => (
            <TabsTrigger
              key={category.slug}
              value={category.slug}
              className="label-m! flex-none rounded-full bg-gray-50 px-4 py-3 text-gray-700 data-active:bg-lime-400 data-active:text-gray-950 group-data-[variant=default]/tabs-list:data-active:shadow-none cursor-pointer"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <Button
          variant="ghost"
          className="label-m! hover:bg-transparent px-4 py-2 text-blue-800 cursor-pointer"
        >
          {moreLabel}
        </Button>
      </div>
    </Tabs>
  );
}