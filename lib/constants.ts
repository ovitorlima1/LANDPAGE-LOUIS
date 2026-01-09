
export const DOCTOR_INFO = {
  name: "Dr. Louis Goldstein",
  crm: "CRM 21719-PE",
  specialty: "Emagrecimento, Performance & Longevidade",
  bio: "Médico focado em transformar vidas através da medicina de precisão. O Dr. Louis Goldstein combina o rigor científico com uma abordagem moderna de performance humana. Seu método na Goldstein Clinic é desenhado para quem busca não apenas perder peso, mas alcançar o ápice de sua forma física e saúde metabólica.",
  experience: "12 anos de experiência",
  focus: ["Emagrecimento de Alta Performance", "Hipertrofia e Definição", "Modulação Hormonal Estratégica", "Longevidade Ativa"],

  // Caminhos ajustados para incluir /public
  image: "/assets/dr-louis-clinica.jpeg",
  aboutImage: "/assets/dr-louis-perfil.jpeg"
};

export const PROGRAM_DETAILS = {
  duration: "4 meses",
  consultations: 4,
  price: 3579,
  installments: 10,
  installmentValue: 357.90,
  pixDiscount: 15,
  dailyCost: 29.83
};

export const WHATSAPP = {
  number: "558185812121",
  defaultMessage: "Olá! Vi as fotos dos resultados e gostaria de agendar uma consulta com o Dr. Louis Goldstein."
};

export const PROBLEMS = [
  {
    title: "Estagnação de Resultados",
    description: "Você treina e faz dieta, mas seu corpo não responde mais. É hora de destravar o metabolismo com medicina de precisão.",
    icon: "Zap"
  },
  {
    title: "Baixa Performance Hormonal",
    description: "Falta de foco, libido baixa e cansaço constante podem ser sinais de desequilíbrio que impedem sua evolução.",
    icon: "Activity"
  },
  {
    title: "Dificuldade em Ganho de Massa",
    description: "Perder gordura sem perder músculos exige um protocolo farmacológico e metabólico rigoroso.",
    icon: "TrendingDown"
  },
  {
    title: "Falta de Acompanhamento VIP",
    description: "Você precisa de um médico que entenda sua rotina e ajuste o protocolo em tempo real para garantir o sucesso.",
    icon: "Utensils"
  }
];

export const TESTIMONIALS = [
  {
    name: "Márcio G. Cabral",
    age: 0, // Idade oculta no componente
    text: "De um médico que vai muito além da profissão, alguém que acolhe, escuta e inspira. Um cara que transforma cada conversa em aprendizado, cada gesto em cuidado genuíno.",
    rating: 5,
    avatar: "" // Avatar removido no componente
  },
  {
    name: "Jessica Lange",
    age: 0,
    text: "Eu tive Síndrome do Pânico, poderia estar até hoje com ela... Mas você me curou definitivamente das crises em pouquíssimo tempo, me salvou. Eu já não me sentia mais eu, era aterrorizante.",
    rating: 5,
    avatar: ""
  },
  {
    name: "Rodney Tobias Aguiar",
    age: 0,
    text: "Profissional e ótimo ser humano. Sou outra pessoa com suas orientações. Grato e Abraço.",
    rating: 5,
    avatar: ""
  },
  {
    name: "Humberto Luiz Lyra",
    age: 0,
    text: "Nos acompanha há mais de um ano desde meu episódio de quase morte... Excelente profissional, um ser humano ímpar.",
    rating: 5,
    avatar: ""
  },
  {
    name: "Orennan Martins",
    age: 0,
    text: "Você não vai encontrar em Pernambuco clínica e profissionais incríveis como os da Goldstein Clinic. Super recomendo!",
    rating: 5,
    avatar: ""
  }
];

export const FAQ_ITEMS = [
  {
    question: "Como funcionam as consultas?",
    answer: "As consultas podem ser presenciais em Recife na Goldstein Clinic ou por telemedicina para todo o Brasil. São encontros focados em ajuste de protocolo e análise de bioimpedância."
  },
  {
    question: "O programa inclui suporte farmacológico?",
    answer: "Sim, quando indicado após análise rigorosa de exames. Utilizamos o que há de mais moderno na medicina para otimizar seus resultados com segurança."
  },
  {
    question: "Quais exames são necessários?",
    answer: "Solicitamos um painel completo: hormonal, metabólico e inflamatório para desenhar sua estratégia individualizada."
  },
  {
    question: "Aceita convênios?",
    answer: "Trabalhamos apenas com atendimento particular para garantir o tempo e a profundidade que seu caso exige. Emitimos nota para reembolso."
  }
];

export const CONTACT = {
  phone: "(81) 98581-2121",
  email: "goldsteinclinic@outlook.com",
  address: "Av. Conselheiro Aguiar, 160 - Pina",
  city: "Recife - PE",
  hours: "Segunda a Sexta: 08h às 18h",
  social: {
    instagram: "https://instagram.com/drlouisgoldstein",
    facebook: "#",
    linkedin: "#"
  }
};
