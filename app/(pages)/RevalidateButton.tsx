"use client";

import { Button } from "@/components/ui/button";
import { revalidate } from "@/lib/actions/server.actions";

export default function RevalidateButton() {
  return <Button onClick={() => revalidate("/")}>Revalidate Cache</Button>;
}
