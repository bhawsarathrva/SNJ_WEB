export function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <p className="mt-1 text-xs text-destructive" role="alert">
      {messages[0]}
    </p>
  );
}
