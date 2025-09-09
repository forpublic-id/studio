import { Button } from '@/components/ui/Button'
import { FileQuestion, Home } from 'lucide-react'
import { Link } from '@/i18n/routing'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <FileQuestion className="w-16 h-16 text-gray-400" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-gray-600">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan atau tidak ada.
          </p>
        </div>

        <Button
          asChild
          className="flex items-center gap-2"
        >
          <Link href="/">
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </Button>
      </div>
    </div>
  )
}