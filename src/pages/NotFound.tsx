import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


export default function NotFound() : React.JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate("/")} className="mt-6">
          Back To Main Page
        </Button>
      </div>
    </div>
  );
}
