import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowLeft } from "lucide-react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-secondary">
      <div className="text-center space-y-5">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">404 Not Found</h1>
          <p className="text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <HomeIcon className="h-4 w-4  bg:primary-foreground text-secondary" />
            <span className="bg:primary-foreground text-secondary">Back to Home</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
