import { useState, useEffect } from "react";

function App() {
  const targetDate = new Date("2026-06-06T10:30:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <nav className="bg-persian-green-600 w-full h-16 shrink-0 z-50">
        <div className="container px-20 mx-auto h-full flex items-center justify-between">
          <span id="inicio" className="flex justify-center items-center gap-2">
            <h1 className="text-white text-xl font-bold">4º Leilão em prol ao</h1>
            <img
              className="h-16"
              src="/logo-hha-branca.png"
              alt="Logo Hospital Hélio Angotti"
            />
          </span>
          <ul className="flex gap-4">
            <li>
              <a
                href="#inicio"
                className="text-white hover:text-persian-green-200"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="text-white hover:text-persian-green-200"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="text-white hover:text-persian-green-200"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section
        className="relative w-full min-h-96 grow flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/leilao-de-gado.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl text-center px-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
            Venha participar desse momento de generosidade em prol ao Hospital
            Hélio Angotti!
          </h2>
        </div>
      </section>
      <section id="sobre" className="w-full p-4">
        <div className="container mx-auto">
          <div className="bg-white py-6 rounded-lg shadow-md flex flex-col justify-around items-center border gap-10 border-gray-200 px-10">
            <div className="mb-6 md:mb-0 flex justify-between items-center w-full">
              <div className="text-center mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-persian-green-600 mb-2 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  Data e Hora
                </h3>
                <p className="text-gray-700 text-lg font-medium">
                  Sábado, 6 de Junho de 2026 a partir das 10h30 (Horário de
                  Brasília)
                </p>
              </div>

              <div className="text-center mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-persian-green-600 mb-2 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  Local
                </h3>
                <p className="text-gray-700 text-lg font-medium">
                  Itapagipe Leilões
                </p>
                <p className="text-gray-700 text-sm mb-3">
                  MG-255, Km 47 - 5, NO - TREVO, Itapagipe - MG, 38240-000
                </p>
                <a
                  href="https://www.google.com/maps/dir//ITAPAGIPE+LEIL%C3%95ES+-+MG-255,+Km+47+-+5,+NO+-+TREVO,+Itapagipe+-+MG,+38240-000/@-19.8971237,-49.3731707,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94a32904c2b220c5:0xeb06747e90e038b7!2m2!1d-49.3567653!2d-19.8972129?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-persian-green-100 text-persian-green-700 hover:bg-persian-green-200 text-sm font-semibold py-2 px-4 rounded transition-colors"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-persian-green-600 mb-4">
                O leilão começa em:
              </h3>
              {timeLeft.dias !== undefined ? (
                <div className="flex gap-4 justify-center text-gray-700">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">{timeLeft.dias}</span>
                    <span className="text-sm uppercase tracking-wide">
                      Dias
                    </span>
                  </div>
                  <span className="text-3xl flex flex-col items-center">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">{timeLeft.horas}</span>
                    <span className="text-sm uppercase tracking-wide">
                      Horas
                    </span>
                  </div>
                  <span className="text-3xl flex flex-col items-center">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">
                      {timeLeft.minutos}
                    </span>
                    <span className="text-sm uppercase tracking-wide">Min</span>
                  </div>
                  <span className="text-3xl flex flex-col items-center">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold">
                      {timeLeft.segundos}
                    </span>
                    <span className="text-sm uppercase tracking-wide">Seg</span>
                  </div>
                </div>
              ) : (
                <p className="text-lg font-bold text-persian-green-600">
                  O leilão já começou!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="w-full p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contato</h2>
          <p className="text-gray-600">
            Para mais informações sobre o leilão, e doações, entre em contato com os coordenadores
          </p>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-persian-green-600">Coordenadores</h3>
            <div className="flex justify-between items-center w-3/4 gap-2">
              <p className="text-gray-700">
                Junior Vasconcelos (Chupeta)
                <br />
                Telefone: (34) 99967-0706
              </p>
              <p className="text-gray-700">
                Lúbia Paula
                <br />
                Telefone: (34) 99656-5215
              </p>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
