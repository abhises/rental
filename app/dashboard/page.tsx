"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Key, MoveRight } from "lucide-react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [role, setRole] = useState<"owner" | "renter" | null>(null);
  const router = useRouter();
  const handleContinue = () => {
    if (role === "owner") {
      router.push("/dashboard/house-owner");
    }

    if (role === "renter") {
      router.push("/dashboard/renter");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">
            What are you looking for?
          </h1>
          <p className="text-muted-foreground mt-2">
            Choose how you want to use the platform
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* House Owner */}
          <Card
            onClick={() => setRole("owner")}
            className={clsx(
              "cursor-pointer transition hover:shadow-lg",
              role === "owner" && "ring-2 ring-primary border-primary",
            )}
          >
            <CardContent className="flex flex-col items-center text-center p-8">
              <Home className="h-12 w-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold">House Owner</h2>
              <p className="text-sm text-muted-foreground mt-2">
                List your property and find tenants easily
              </p>
            </CardContent>
          </Card>

          {/* Renter */}
          <Card
            onClick={() => setRole("renter")}
            className={clsx(
              "cursor-pointer transition hover:shadow-lg",
              role === "renter" && "ring-2 ring-primary border-primary",
            )}
          >
            <CardContent className="flex flex-col items-center text-center p-8">
              <Key className="h-12 w-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold">Renter</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Search homes and rent without hassle
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Continue Button */}
        <div className="mt-8 flex justify-center">
          <Button
            disabled={!role}
            className="px-10 cursor-pointer"
            onClick={handleContinue}
          >
            Continue <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
