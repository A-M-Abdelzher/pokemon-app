"use client";

import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = ({ label = "Back to list" }: { label?: string }) => {
  const router = useRouter();

  return (
    <Button variant="outline" className="mb-4" onClick={() => router.back()}>
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Button>
  );
};
