'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { AlertCircle, Home, RefreshCcw } from 'lucide-react'
import { Link } from '@/i18n/routing'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="w-16 h-16 text-red-500" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Terjadi Kesalahan
          </h1>
          <p className="text-gray-600">
            Maaf, terjadi kesalahan yang tidak terduga. Tim kami telah diberitahu dan sedang menangani masalah ini.
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
            <p className="text-sm text-red-700 font-mono">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            className="flex items-center gap-2"
            variant="default"
          >
            <RefreshCcw className="w-4 h-4" />
            Coba Lagi
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2"
          >
            <Link href="/">
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>

        <div className="text-sm text-gray-500">
          <p>
            Jika masalah berlanjut, silakan hubungi kami di{' '}
            <a 
              href="mailto:studio@forpublic.id" 
              className="text-blue-600 hover:underline"
            >
              studio@forpublic.id
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}