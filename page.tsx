// app/page.tsx
export default function Home() {
  return (
    <main className="bg-white min-h-screen text-gray-800 font-sans">
      {/* Cabeçalho */}
      <section className="bg-purple-800 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Scasni & Francisco - Advocacia</h1>
        <p className="text-lg mt-2">Compromisso com a Justiça e a Excelência Profissional</p>
      </section>

      {/* Quem Somos */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Quem Somos</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Atuamos com excelência no Direito do Trabalho, oferecendo assessoria jurídica dedicada e humanizada.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Maria de Fátima */}
          <div className="text-center">
            <img
              src="/fatima.png" // troque pelo caminho certo se estiver diferente
              alt="Maria de Fátima Francisco"
              className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
            />
            <h3 className="mt-4 font-bold text-lg">Maria de Fátima Francisco</h3>
            <p>Especialista em Direito do Trabalho</p>
          </div>

          {/* Helena */}
          <div className="text-center">
            <img
              src="/helena.png" // troque pelo caminho certo se estiver diferente
              alt="Helena Cecília Scasni"
              className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
            />
            <h3 className="mt-4 font-bold text-lg">Helena Cecília Scasni</h3>
            <p>Especialista em Direito do Trabalho</p>
          </div>
        </div>
      </section>

      {/* Botão do WhatsApp */}
      <a
        href="https://wa.me/5511999999999" // Troque pelo seu número com DDI (ex: 5511998765432)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        title="Fale conosco pelo WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.52 2 2.05 6.48 2.05 12c0 2.11.56 4.05 1.54 5.74L2 22l4.39-1.56c1.66.9 3.57 1.42 5.65 1.42 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.15c-1.77 0-3.4-.52-4.77-1.4l-.34-.21-2.61.93.9-2.54-.22-.35c-.84-1.3-1.32-2.84-1.32-4.5 0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.2-5.6c-.23-.12-1.34-.66-1.55-.74-.21-.08-.36-.12-.5.12-.15.23-.58.74-.71.89-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.14-.68-.61-1.14-1.36-1.27-1.58-.13-.23-.01-.35.1-.47.1-.1.23-.26.34-.39.12-.13.15-.23.23-.38.08-.15.04-.28-.02-.39-.06-.12-.5-1.21-.69-1.65-.18-.44-.36-.38-.5-.38-.12 0-.28-.01-.43-.01-.15 0-.39.06-.59.28s-.77.75-.77 1.83.79 2.13.9 2.28c.12.15 1.55 2.37 3.77 3.33.53.23.94.37 1.26.48.53.17 1.01.15 1.39.09.42-.06 1.34-.55 1.52-1.08.19-.53.19-.99.13-1.08-.06-.09-.21-.15-.44-.27z" />
        </svg>
      </a>
    </main>
  );
}
