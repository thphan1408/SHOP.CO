const visa = '/src/assets/images/visa.svg'
const mastercard = '/src/assets/images/mastercard.svg'
const paypal = '/src/assets/images/paypal.svg'
const applepay = '/src/assets/images/applepay.svg'
const googlepay = '/src/assets/images/googlepay.svg'

export const images = {
  visa,
  mastercard,
  paypal,
  applepay,
  googlepay,
} as const

// Xác định kiểu dữ liệu của images
export type ImageList = (typeof images)[keyof typeof images] // bugs
