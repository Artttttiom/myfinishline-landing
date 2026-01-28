import ContractHeader from "@/components/ContractHeader";

export default function ContractPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContractHeader
        title="Amazonia Route"
        subtitle="Here you can see your next goals to achieve"
      />

      {/* Contract content placeholder */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12">
        {/* Contract details will go here */}
      </div>
    </main>
  );
}
