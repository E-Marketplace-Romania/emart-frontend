import Navbar from "@/components/navbar";
import PartsTabs from "@/components/tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 bg-quaternary">
      <Navbar />
      <PartsTabs />
    </main>
  )
}
