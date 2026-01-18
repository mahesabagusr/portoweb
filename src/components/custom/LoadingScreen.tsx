import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onFinish: () => void;
}
export default function LoadingScreen({
  onFinish,
}: LoadingScreenProps): React.JSX.Element {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 40 + 5, 95));
    }, 300);

    const checkLoad = () => {
      const resources = performance.getEntriesByType("resource");
      const loadedCount = resources.filter((r) => r.duration > 0).length;
      const total = resources.length || 1;

      if (loadedCount >= total) finishLoading();
    };

    const finishLoading = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(onFinish, 300);
    };

    const loadCheckInterval = setInterval(checkLoad, 300);
    const timeout = setTimeout(finishLoading, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(loadCheckInterval);
      clearTimeout(timeout);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white px-6">
      <p className="text-base font-medium mb-4 animate-pulse">
        Loading... {Math.floor(progress)}%
      </p>
      <Progress value={progress} className="w-full max-w-md" />
    </div>
  );
}
