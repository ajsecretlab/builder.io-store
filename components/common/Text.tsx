export default function Text({ text }: { text: string }) {
  return (
    <div className="border p-2 border-gray-300">
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
