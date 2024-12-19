import { TLoading } from "src/customTypes/shared";

type LoadingProps = {
  loading: TLoading;
  error: null | string;
  children: React.JSX.Element;
};
export default function Loading({ loading, error, children }: LoadingProps) {
  if (loading === "pending") {
    return <div>Loading please wait</div>;
  }

  if (loading === "failed") {
    return <div>{error}</div>;
  }
  return <div>{children}</div>;
}
