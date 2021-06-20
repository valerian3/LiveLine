// - для талонов: id, тип талона, дополнительное описание и дата-время приёма
// - для типов талонов: id, наименование типа, код


export interface Coupon {
  id: number,
  type: typeOfCoupon,
  description: string,
  date: Date | string
}

export interface typeOfCoupon {
  id: number,
  code: number,
  nameOfType: string
}
