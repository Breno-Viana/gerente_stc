import {Balances, DepartamentBalance, Reports, Residents} from '../app/model_utils/models.interfaces';

// Array de DepartamentBalance (12 meses)
export const departamentBalances: DepartamentBalance[] = [
  {
    month: 'Jan',
    food_departament: 1200,
    hygiene_departament: 500,
    treasury: 2000,
    heritage_departament: 1500,
    others: 300
  },
  {
    month: 'Fev',
    food_departament: 1100,
    hygiene_departament: 450,
    treasury: 2100,
    heritage_departament: 1400,
    others: 400
  },
  {
    month: 'Mar',
    food_departament: 1300,
    hygiene_departament: 550,
    treasury: 2200,
    heritage_departament: 1600,
    others: 350
  },
  {
    month: 'Abr',
    food_departament: 1250,
    hygiene_departament: 480,
    treasury: 2150,
    heritage_departament: 1550,
    others: 320
  },
  {
    month: 'Mai',
    food_departament: 1350,
    hygiene_departament: 500,
    treasury: 2250,
    heritage_departament: 1650,
    others: 330
  },
  {
    month: 'Jun',
    food_departament: 1400,
    hygiene_departament: 520,
    treasury: 2300,
    heritage_departament: 1700,
    others: 340
  },
  {
    month: 'Jul',
    food_departament: 1450,
    hygiene_departament: 530,
    treasury: 2350,
    heritage_departament: 1750,
    others: 360
  },
  {
    month: 'Ago',
    food_departament: 1500,
    hygiene_departament: 540,
    treasury: 2400,
    heritage_departament: 1800,
    others: 370
  },
  {
    month: 'Set',
    food_departament: 1550,
    hygiene_departament: 550,
    treasury: 2450,
    heritage_departament: 1850,
    others: 380
  },
  {
    month: 'Out',
    food_departament: 1600,
    hygiene_departament: 560,
    treasury: 2500,
    heritage_departament: 1900,
    others: 390
  },
  {
    month: 'Nov',
    food_departament: 1650,
    hygiene_departament: 570,
    treasury: 2550,
    heritage_departament: 1950,
    others: 400
  },
  {
    month: 'Dec',
    food_departament: 1700,
    hygiene_departament: 580,
    treasury: 2600,
    heritage_departament: 2000,
    others: 420
  },
];

// Array de Balances (12 meses)
export const balances: Balances[] = [
  {month: 'Jan', exits: 4000, entries: 7000},
  {month: 'Fev', exits: 3800, entries: 6800},
  {month: 'Mar', exits: 4200, entries: 7100},
  {month: 'Abr', exits: 4100, entries: 6900},
  {month: 'Mai', exits: 4300, entries: 7200},
  {month: 'Jun', exits: 4400, entries: 7300},
  {month: 'Jul', exits: 4500, entries: 7400},
  {month: 'Ago', exits: 4600, entries: 7500},
  {month: 'Set', exits: 4700, entries: 7600},
  {month: 'Out', exits: 4800, entries: 7700},
  {month: 'Nov', exits: 4900, entries: 7800},
  {month: 'Dec', exits: 5000, entries: 7900},
];

// Array de Residents (10 pessoas)
export const residents: Residents[] = [
  {
    id: "1",
    name: "Ana Souza",
    months_not_paid: 0,
    on_time: true,
    last_pay: "2025-09-01",
    amount_debit: 0
  },
  {
    id: "2",
    name: "Bruno Lima",
    months_not_paid: 2,
    on_time: false,
    last_pay: "2025-07-15",
    amount_debit: 350
  },
  {
    id: "3",
    name: "Carla Mendes",
    months_not_paid: 1,
    on_time: false,
    last_pay: "2025-08-05",
    amount_debit: 180
  },
  {
    id: "4",
    name: "Diego Santos",
    months_not_paid: 0,
    on_time: true,
    last_pay: "2025-09-02",
    amount_debit: 0
  },
  {
    id: "5",
    name: "Eduarda Farias",
    months_not_paid: 3,
    on_time: false,
    last_pay: "2025-06-20",
    amount_debit: 540
  },
  {
    id: "6",
    name: "Felipe Araújo",
    months_not_paid: 0,
    on_time: true,
    last_pay: "2025-09-10",
    amount_debit: 0
  },
  {
    id: "7",
    name: "Gabriela Martins",
    months_not_paid: 5,
    on_time: false,
    last_pay: "2025-04-12",
    amount_debit: 900
  },
  {
    id: "8",
    name: "Henrique Oliveira",
    months_not_paid: 0,
    on_time: true,
    last_pay: "2025-09-05",
    amount_debit: 0
  },
  {
    id: "9",
    name: "Isabela Correia",
    months_not_paid: 2,
    on_time: false,
    last_pay: "2025-07-25",
    amount_debit: 400
  },
  {
    id: "10",
    name: "João Pedro",
    months_not_paid: 0,
    on_time: true,
    last_pay: "2025-09-08",
    amount_debit: 0
  },
  {
    id: "11",
    name: "Kátia Nunes",
    months_not_paid: 4,
    on_time: false,
    last_pay: "2025-05-15",
    amount_debit: 760
  },
  {
    id: "12",
    name: "Lucas Almeida",
    months_not_paid: 1,
    on_time: false,
    last_pay: "2025-08-03",
    amount_debit: 200
  },
  {
    id: "13",
    name: "Mariana Rocha",
    months_not_paid: 0,
    on_time: true,
    last_pay: "2025-09-09",
    amount_debit: 0
  },
  {
    id: "14",
    name: "Nicolas Freitas",
    months_not_paid: 6,
    on_time: false,
    last_pay: "2025-03-11",
    amount_debit: 1200
  },
  {
    id: "15",
    name: "Olívia Barros",
    months_not_paid: 0,
    on_time: true,
    last_pay: "2025-09-12",
    amount_debit: 0
  },
  {
    id: "16",
    name: "Paulo Henrique",
    months_not_paid: 2,
    on_time: false,
    last_pay: "2025-07-10",
    amount_debit: 360
  },
  {
    id: "17",
    name: "Queila Ramos",
    months_not_paid: 0,
    on_time: true,
    last_pay: "2025-09-11",
    amount_debit: 0
  },
  {
    id: "18",
    name: "Rafael Costa",
    months_not_paid: 3,
    on_time: false,
    last_pay: "2025-06-08",
    amount_debit: 600
  },
  {
    id: "19",
    name: "Sofia Carvalho",
    months_not_paid: 1,
    on_time: false,
    last_pay: "2025-08-20",
    amount_debit: 150
  },
  {
    id: "20",
    name: "Thiago Silva",
    months_not_paid: 0,
    on_time: true,
    last_pay: "2025-09-13",
    amount_debit: 0
  }
];

// Array de Reports (10 relatórios)
export const reports: Reports[] = [
  {ext: 'pdf', name: 'Relatório Financeiro Jan', size: '1.2MB', created_at: '2025-08-01'},
  {ext: 'xlsx', name: 'Planilha de Pagamentos Fev', size: '850KB', created_at: '2025-08-02'},
  {ext: 'docx', name: 'Resumo de Moradores Mar', size: '500KB', created_at: '2025-08-03'},
  {ext: 'pdf', name: 'Relatório Financeiro Abr', size: '1.3MB', created_at: '2025-08-04'},
  {ext: 'xlsx', name: 'Planilha de Pagamentos Mai', size: '900KB', created_at: '2025-08-05'},
  {ext: 'docx', name: 'Resumo de Moradores Jun', size: '550KB', created_at: '2025-08-06'},
  {ext: 'pdf', name: 'Relatório Financeiro Jul', size: '1.4MB', created_at: '2025-08-07'},
  {ext: 'xlsx', name: 'Planilha de Pagamentos Ago', size: '920KB', created_at: '2025-08-08'},
  {ext: 'docx', name: 'Resumo de Moradores Set', size: '600KB', created_at: '2025-08-09'},
  {ext: 'pdf', name: 'Relatório Financeiro Out', size: '1.5MB', created_at: '2025-08-10'}, {
    ext: 'pdf',
    name: 'Relatório Financeiro Jan',
    size: '1.2MB',
    created_at: '2025-08-01'
  },
  {ext: 'xlsx', name: 'Planilha de Pagamentos Fev', size: '850KB', created_at: '2025-08-02'},
  {ext: 'docx', name: 'Resumo de Moradores Mar', size: '500KB', created_at: '2025-08-03'},
  {ext: 'pdf', name: 'Relatório Financeiro Abr', size: '1.3MB', created_at: '2025-08-04'},
  {ext: 'xlsx', name: 'Planilha de Pagamentos Mai', size: '900KB', created_at: '2025-08-05'},
  {ext: 'docx', name: 'Resumo de Moradores Jun', size: '550KB', created_at: '2025-08-06'},
  {ext: 'pdf', name: 'Relatório Financeiro Jul', size: '1.4MB', created_at: '2025-08-07'},
  {ext: 'xlsx', name: 'Planilha de Pagamentos Ago', size: '920KB', created_at: '2025-08-08'},
  {ext: 'docx', name: 'Resumo de Moradores Set', size: '600KB', created_at: '2025-08-09'},
  {ext: 'pdf', name: 'Relatório Financeiro Out', size: '1.5MB', created_at: '2025-08-10'}, {
    ext: 'pdf',
    name: 'Relatório Financeiro Jan',
    size: '1.2MB',
    created_at: '2025-08-01'
  },
  {ext: 'xlsx', name: 'Planilha de Pagamentos Fev', size: '850KB', created_at: '2025-08-02'},
  {ext: 'docx', name: 'Resumo de Moradores Mar', size: '500KB', created_at: '2025-08-03'},
  {ext: 'pdf', name: 'Relatório Financeiro Abr', size: '1.3MB', created_at: '2025-08-04'},
  {ext: 'xlsx', name: 'Planilha de Pagamentos Mai', size: '900KB', created_at: '2025-08-05'},
  {ext: 'docx', name: 'Resumo de Moradores Jun', size: '550KB', created_at: '2025-08-06'},
  {ext: 'pdf', name: 'Relatório Financeiro Jul', size: '1.4MB', created_at: '2025-08-07'},
  {ext: 'xlsx', name: 'Planilha de Pagamentos Ago', size: '920KB', created_at: '2025-08-08'},
  {ext: 'docx', name: 'Resumo de Moradores Set', size: '600KB', created_at: '2025-08-09'},
  {ext: 'pdf', name: 'Relatório Financeiro Out', size: '1.5MB', created_at: '2025-08-10'},
];
