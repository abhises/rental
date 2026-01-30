import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ModeToggle";
const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col">
         <div className="flex justify-between p-3">
        <div className="text-bold">
          <span>Logo</span>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <UserButton />
          <ModeToggle />
        </div>
      </div>

        {children}
    </div>
  )
}

export default DashboardLayout