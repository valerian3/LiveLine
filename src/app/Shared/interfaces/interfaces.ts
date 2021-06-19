// - для талонов: id, тип талона, дополнительное описание и дата-время приёма
// - для типов талонов: id, наименование типа, код


export interface Coupon {
  id: number,
  type: string,
  description: string,
  date: Date
}

export interface typeOfCoupon {
  id: string,
  code: number,
  nameOfType: string
}
