export const WHATSAPP_BUSINESS_URL = 'https://wa.me/message/L67YIHZ3UVYDJ1'
export const WHATSAPP_PHONE_NUMBER = '5562994858709'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim através do site e gostaria de saber mais sobre os serviços de advocacia em crédito rural.'

export function getWhatsAppUrl(message?: string): string {
  if (!message) {
    return WHATSAPP_BUSINESS_URL
  }
  return `${WHATSAPP_BUSINESS_URL}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message?: string): void {
  window.open(getWhatsAppUrl(message), '_blank')
}
