import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
          Strona nie znaleziona
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pl"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Strona główna
          </Link>
          <Link
            href="/pl/kontakt"
            className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  )
}
