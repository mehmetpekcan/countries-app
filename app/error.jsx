"use client";
import { ErrorContainer } from "@/containers/error-container";

export default function Error({ error }) {
  return <ErrorContainer error={error} />;
}
