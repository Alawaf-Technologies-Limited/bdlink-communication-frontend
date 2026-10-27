export type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

const STORAGE_KEY = 'bdlink.contact.submissions'

export async function submitContact(payload: ContactPayload) {
  if (!payload.name.trim() || !payload.email.trim() || !payload.message.trim()) {
    throw new Error('Invalid payload')
  }

  await new Promise((r) => setTimeout(r, 400))

  const receipt = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    ...payload,
  }

  try {
    const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as unknown[]
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...prev, receipt].slice(-50)))
  } catch {
    /* storage unavailable */
  }

  return receipt
}

export function validateContact(payload: ContactPayload) {
  const errors: Partial<Record<keyof ContactPayload, string>> = {}
  if (!payload.name.trim()) errors.name = 'Name is required'
  if (!payload.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = 'Enter a valid email'
  if (!payload.message.trim()) errors.message = 'Message is required'
  return errors
}
