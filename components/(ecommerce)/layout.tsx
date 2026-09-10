export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>T&apos;es dans products ou categories</p>
      {children}
    </div>
  );
}
