
import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col justify-between relative">
      {/* Imagens e mini bios */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10">
        <div className="flex flex-col items-center text-center">
          <img
            src="/fatima.jpg"
            alt="Maria de Fátima"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
          <h2 className="mt-4 text-xl font-semibold">Maria de Fátima Scasni</h2>
          <p className="text-sm text-gray-700">
            Advogada com ampla experiência em Direito do Trabalho e comprometida com a ética e a justiça social.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="/helena.jpg"
            alt="Helena Cecília"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
          <h2 className="mt-4 text-xl font-semibold">Helena Cecília Scasni</h2>
          <p className="text-sm text-gray-700">
            Advogada dedicada ao Direito do Trabalho, com foco em responsabilidade, empatia e soluções eficazes.
          </p>
        </div>
      </div>

      {/* Seção de depoimentos */}
      <div className="bg-white p-10 text-center shadow-inner">
        <h2 className="text-2xl font-bold mb-4">O que dizem nossos clientes</h2>
        <p className="text-gray-800 italic">"Profissionais incríveis, resolveram meu caso com atenção e competência!"</p>
      </div>

      {/* Seção de contato */}
      <div className="p-10 bg-red-200 text-center">
        <h2 className="text-xl font-semibold mb-4">Entre em contato conosco</h2>
        <p className="mb-4">Estamos prontas para ouvir você e oferecer a melhor orientação jurídica.</p>
        <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">Fale conosco no WhatsApp</a>
        </Button>
      </div>
    </div>
  );
}
