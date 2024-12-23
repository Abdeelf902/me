interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
      {children}
    </h2>
  );
}