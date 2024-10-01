import FormTasks from "@/components/FormTasks";
import ListTask from "@/components/ListTask";
import React from "react";
export const revalidate = 0;

function HomePage() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex gap-x-10">
        <FormTasks />
        <ListTask />
      </div>
    </div>
  );
}

export default HomePage;
