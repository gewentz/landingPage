import { useState, useEffect, useRef } from "react";

const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      {
        rootMargin: "0px 0px -50px 0px",
        threshold: 0,
      },
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

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
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenWelcomePopup");

    if (!hasSeenPopup) {
      const popupVideos = [
        "/eu_rhobragapamplonaferreira_1776975044_3881870010063020054_3114910534.mp4",
        "/amigosdohelio.itapagipe_1776864418_3880940168216168873_36115832205.mp4",
      ];
      const randomVideo =
        popupVideos[Math.floor(Math.random() * popupVideos.length)];
      setSelectedMedia({ type: "video", src: randomVideo });
      sessionStorage.setItem("hasSeenWelcomePopup", "true");
    }
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <nav className="bg-persian-green-600 w-full h-auto sm:h-16 shrink-0 z-50 py-4 sm:py-0">
        <div className="container px-4 md:px-8 lg:px-20 mx-auto h-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <span id="inicio" className="flex justify-center items-center gap-2">
            <h1 className="text-white text-lg sm:text-xl font-bold text-center">
              4º Leilão em prol ao
            </h1>
            <img
              className="h-12 sm:h-16"
              src="/logo-hha-branca.png"
              alt="Logo Hospital Hélio Angotti"
            />
          </span>
          <ul className="flex flex-wrap justify-center gap-4">
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
                href="#galeria"
                className="text-white hover:text-persian-green-200"
              >
                Fotos e Vídeos
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
        className="relative w-full min-h-96 grow flex items-center justify-center bg-cover"
        style={{ backgroundImage: "url('/leilao-de-gado.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl text-center px-4 md:px-8">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
              Venha participar desse momento de generosidade em prol ao Hospital
              Hélio Angotti!
            </h2>
          </FadeInSection>
        </div>
      </section>
      <section className="w-full p-4 md:p-8">
        <FadeInSection className="container mx-auto">
          <div className="bg-white py-6 rounded-lg shadow-md flex flex-col justify-around items-center border gap-8 md:gap-10 border-gray-200 px-4 sm:px-10">
            <div className="mb-6 md:mb-0 flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-8 md:gap-4">
              <div className="text-center mb-6 md:mb-0 md:w-1/2 flex flex-col items-center">
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

              <div className="text-center mb-6 md:mb-0 md:w-1/2 flex flex-col items-center">
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
                <div className="flex gap-2 sm:gap-4 justify-center text-gray-700">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-bold">
                      {timeLeft.dias}
                    </span>
                    <span className="text-xs sm:text-sm uppercase tracking-wide">
                      Dias
                    </span>
                  </div>
                  <span className="text-2xl sm:text-3xl flex flex-col items-center">
                    :
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-bold">
                      {timeLeft.horas}
                    </span>
                    <span className="text-xs sm:text-sm uppercase tracking-wide">
                      Horas
                    </span>
                  </div>
                  <span className="text-2xl sm:text-3xl flex flex-col items-center">
                    :
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-bold">
                      {timeLeft.minutos}
                    </span>
                    <span className="text-xs sm:text-sm uppercase tracking-wide">
                      Min
                    </span>
                  </div>
                  <span className="text-2xl sm:text-3xl flex flex-col items-center">
                    :
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-bold">
                      {timeLeft.segundos}
                    </span>
                    <span className="text-xs sm:text-sm uppercase tracking-wide">
                      Seg
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-lg font-bold text-persian-green-600">
                  O leilão já começou!
                </p>
              )}
            </div>
          </div>
        </FadeInSection>
      </section>

      <section id="sobre" className="w-full p-4 md:p-8 bg-persian-green-100">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Hospital Hélio Angotti
          </h2>
          <div className="text-gray-800 text-lg text-justify leading-relaxed max-w-3xl mx-auto space-y-4 [&>p]:indent-8">
            <FadeInSection>
              <p>
                O Hospital Hélio Angotti, localizado na cidade de Uberaba – MG,
                é muito mais do que um hospital, é um símbolo de luta, esperança
                e compromisso com a vida. Sua história começou em 1951, com a
                criação da Associação de Combate ao Câncer do Brasil Central,
                idealizada por profissionais que acreditavam que era possível
                enfrentar o câncer com informação, prevenção e cuidado. Em 1961,
                esse sonho se tornou realidade com a inauguração do hospital,
                que desde então se tornou referência no tratamento oncológico.
              </p>
            </FadeInSection>

            <FadeInSection>
              <p>
                Ao longo das décadas, o hospital cresceu, evoluiu e se
                modernizou, mas nunca perdeu sua essência: cuidar das pessoas
                com dignidade, acolhimento e respeito. Hoje, atende pacientes de
                cerca de 26 municípios da macrorregião Triângulo Sul, sendo uma
                referência regional no tratamento do câncer, especialmente pelo
                Sistema Único de Saúde (SUS).
              </p>
            </FadeInSection>
            <FadeInSection>
              <p>
                E é importante que a população entenda como esse trabalho
                acontece. Diferente do que muitos imaginam, o SUS não repassa um
                valor fixo por paciente. O pagamento é feito por procedimentos
                realizados, como quimioterapia, radioterapia, cirurgias e
                exames, todos com valores previamente definidos em uma tabela
                nacional.
              </p>
            </FadeInSection>
            <FadeInSection>
              <p>
                Esses valores já incluem medicamentos, equipe médica, estrutura
                e todos os custos do tratamento. Ou seja, o hospital precisa
                arcar com despesas muitas vezes altas, especialmente com
                medicamentos modernos, recebendo, em contrapartida, valores que
                nem sempre cobrem o custo real.
              </p>
            </FadeInSection>
            <FadeInSection>
              <p>
                Mesmo diante desses desafios, o Hospital Hélio Angotti segue
                firme em sua missão. E os números comprovam a grandiosidade
                desse trabalho. Em 2024, foram realizados quase 56 mil
                atendimentos ambulatoriais. Já em 2025, esse número ultrapassou
                84 mil atendimentos, além de mais de 3.300 internações. São
                milhares de vidas acolhidas, tratadas e acompanhadas com
                dedicação diária.
              </p>
            </FadeInSection>
            <FadeInSection>
              <p>
                Por trás de cada atendimento, existe uma história. Existe alguém
                lutando, uma família esperando, uma esperança sendo renovada.
              </p>
            </FadeInSection>
            <FadeInSection>
              <p>
                Por isso, a participação da comunidade é fundamental. Sendo uma
                instituição filantrópica, o hospital depende também do apoio da
                população para continuar oferecendo um atendimento de qualidade,
                humano e acessível a todos.
              </p>
            </FadeInSection>
            <FadeInSection>
              <p>
                É nesse espírito de solidariedade que nasce o 4º Leilão
                Beneficente em prol ao Hospital Hélio Angotti. Mais do que um
                evento, é um ato de amor ao próximo. Uma oportunidade de unir
                forças, contribuir e fazer parte de uma corrente do bem que
                salva vidas todos os dias.{" "}
                <strong>
                  Participar é mais do que ajudar, é fazer a diferença.
                </strong>
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section id="galeria" className="w-full p-4 md:p-8 bg-gray-50">
        <div className="container mx-auto">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              Galeria de Fotos dos Leilões Anteriores
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 4, 5, 6, 7, 8].map((num, index) => (
              <FadeInSection key={num} delay={index * 100}>
                <div
                  className="overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer group h-full"
                  onClick={() =>
                    setSelectedMedia({
                      type: "image",
                      src: `/img1 (${num}).jpeg`,
                    })
                  }
                >
                  <img
                    src={`/img1 (${num}).jpeg`}
                    alt={`Momento do Leilão ${num}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </FadeInSection>
            ))}
            <FadeInSection delay={700}>
              <div
                className="overflow-hidden rounded-lg shadow-md aspect-square bg-black relative cursor-pointer group flex items-center justify-center h-full"
                onClick={() =>
                  setSelectedMedia({ type: "video", src: "/video.mp4" })
                }
              >
                <video className="w-full h-full object-cover pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                  <source src="/video.mp4" type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/50 rounded-full p-4 group-hover:bg-persian-green-600/80 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
      <section id="contato" className="w-full p-4 md:p-8">
        <FadeInSection className="container mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Contato
          </h2>
          <p className="text-gray-600 mb-4">
            Para mais informações sobre o leilão, e doações, entre em contato
            com os coordenadores
          </p>
        </FadeInSection>
        <FadeInSection className="container mx-auto">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-persian-green-600">
              Coordenadores
            </h3>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-full md:w-3/4 lg:w-2/3 gap-6 md:gap-2 mt-2">
              <p className="text-gray-700">
                Junior Vasconcelos (Chupeta)
                <br />
                <a
                  href="https://wa.me/5534999670706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persian-green-600 font-medium hover:text-persian-green-700 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  (34) 99967-0706
                </a>
              </p>
              <p className="text-gray-700">
                Lúbia Paula
                <br />
                <a
                  href="https://wa.me/5534996565215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-persian-green-600 font-medium hover:text-persian-green-700 hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  (34) 99656-5215
                </a>
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
      <footer>
        <div className=" bg-persian-green-500 w-full text-center py-4 text-gray-200 text-sm">
          <p>
            &copy; 2026 4º Leilão em prol ao Hospital Hélio Angotti. Todos os
            direitos reservados.
          </p>
          <p className="text-center text-gray-300 text-xs mt-2">
            Desenvolvido por{" "}
            <a
              href="https://gabriel-wentz.vercel.app/"
              className="text-persian-green-100 hover:text-persian-green-900 hover:underline"
            >
              Gabriel Wentz
            </a>
          </p>
        </div>
        <div></div>
      </footer>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white hover:text-gray-300 z-101"
            onClick={() => setSelectedMedia(null)}
            aria-label="Fechar galeria"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="relative max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt="Mídia ampliada"
                className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
              />
            ) : (
              <video
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-[90vh] rounded shadow-2xl outline-none bg-black"
              >
                <source src={selectedMedia.src} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
