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
            alt="Fátima"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
          <h2 className="mt-4 text-xl font-semibold">Fátima Scasni</h2>
          <p className="text-sm text-gray-700">
            Advogada com ampla experiência em Direito do Trabalho e comprometida com a ética e a justiça social.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/helena.jpg"
            alt="Helena"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
          <h2 className="mt-4 text-xl font-semibold">Helena Cecília Scasni</h2>
          <p className="text-sm text-gray-700">
            Recém-aprovada na OAB, apaixonada por Direito do Trabalho e movida pelo sonho de transformar vidas com a advocacia.
          </p>
        </div>
      </div>

      {/* Botão fixo */}
      <div className="fixed bottom-4 right-4">
        <Button className="bg-red-600 text-white hover:bg-red-700">
          Fale conosco
        </Button>
      </div>
    </div>
  );
}