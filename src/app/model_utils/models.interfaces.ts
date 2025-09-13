export interface DepartamentBalance{
  month: 'Jan'|'Fev'|'Mar'|'Abr'|'Mai'|'Jun'|'Jul'|'Ago'|'Set'|'Out'|'Nov'|'Dec',
  food_departament: number,
  hygiene_departament:number,
  treasury:number,
  heritage_departament:number,
  others:number
}


export interface Balances{
  month: 'Jan'|'Fev'|'Mar'|'Abr'|'Mai'|'Jun'|'Jul'|'Ago'|'Set'|'Out'|'Nov'|'Dec',
  exits:number,
  entries:number
}

export interface ResidentForForm{
  name_entity:string,
  amount_entity:number,
  deb_entity:number,
  last_entity:string
}

export interface Residents{
  name:string,
  months_not_paid:number,
  on_time:boolean,
  last_pay:string,
  amount_debit:number
}


export interface Reports{
  ext:'pdf'|'docx'|'xlsx'
  name:string,
  size:string,
  created_at:string
}




