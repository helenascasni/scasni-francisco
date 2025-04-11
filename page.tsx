
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-red-900 text-white py-10 text-center">
        <h1 className="text-3xl font-bold">Scasni & Francisco</h1>
        <p className="mt-2">Advocacia com experiência, acolhimento e excelência.</p>
      </header>

      <section className="py-12 px-4 flex flex-col md:flex-row justify-center gap-8">
        <Card className="w-full max-w-sm text-center">
          <CardContent>
            <Image
              src="/fatima.jpg"
              alt="Fátima"
              width={120}
              height={120}
              className="mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">Maria de Fátima</h2>
            <p className="mt-2 text-sm">
              Advogada dedicada com vasta experiência e olhar humano.
            </p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm text-center">
          <CardContent>
            <Image
              src="/helena.jpg"
              alt="Helena"
              width={120}
              height={120}
              className="mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">Helena Cecília</h2>
            <p className="mt-2 text-sm">
              Jovem advogada apaixonada pela Justiça do Trabalho e pelo cuidado com o próximo.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">O que dizem nossos clientes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <blockquote className="italic">"A Dra. Maria resolveu meu caso com uma rapidez impressionante. Foi incrível ver como tudo foi tratado de forma ágil e eficiente"</blockquote>
          <blockquote className="italic">"A Dra. Helena me ajudou a resolver um caso complicado de forma rápida e eficaz. Recomendo seu trabalho com certeza!"</blockquote>
          <blockquote className="italic">"Como empresário, encontrei na Dra. Maria de Fátima o apoio necessário para lidar com questões trabalhistas delicadas. Sua experiência faz toda a diferença!"</blockquote>
        </div>
      </section>

      <section className="bg-gray-100 py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Entre em contato</h2>
        <p className="mb-2">📧 franciscoscasni@gmail.com</p>
        <p className="mb-2">📱 (11) 93960-7004</p>
        <p className="mb-2">📍 R. Cel. Souza Franco, 771 - Centro, Mogi das Cruzes - SP, 08710-025</p>
      </section>

      <footer className="bg-red-900 text-white py-6 text-center relative">
        <p>© 2025 Scasni & Francisco - Todos os direitos reservados</p>
        <a
          href="https://wa.me/5511939607004"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          Fale conosco
        </a>
      </footer>
    </main>
  );
}
