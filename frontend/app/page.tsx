import { redirect } from 'next/navigation'
import { defaultLanguage } from '@/lib/languages'

export default function RootPage() {
  redirect(`/${defaultLanguage}`)
}
