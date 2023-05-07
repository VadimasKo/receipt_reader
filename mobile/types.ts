
export type ReceiptMeta =  {
  id: string
  vendorName: string
  cost: number
  date: string
}

export type ReceiptLine = {
  product: string,
  cost: number
}

export type ReceiptContent = ReceiptLine[]

export type Receipt = {
  meta: ReceiptMeta,
  content: ReceiptContent
}
