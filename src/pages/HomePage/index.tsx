export default function HomePage(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="text-lg text-muted-foreground">
          This is the main page of our application.
        </p>
      </div>
    </div>
  );
}
