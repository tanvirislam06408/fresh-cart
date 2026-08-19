import React from "react";
import { GlobalLoading } from "@/components/shared/GlobalLoading";

export default function Loading() {
  return <GlobalLoading message="Loading Dashboard..." fullScreen={true} />;
}
