import { Skeleton } from "@/components/skeleton";

function CountryPageContainerLoading() {
  return (
    <div>
      <Skeleton height="500px" marginBottom="12px" />
      <Skeleton height="32px" width="300px" marginBottom="12px" />
      <Skeleton height="24px" width="150px" marginBottom="4px" />
      <Skeleton height="24px" width="150px" marginBottom="4px" />
      <Skeleton height="24px" width="150px" marginBottom="4px" />
    </div>
  );
}

export { CountryPageContainerLoading };
