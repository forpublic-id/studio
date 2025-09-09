import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-gray-600" />
        </div>
        <p className="text-sm text-gray-600">Memuat halaman...</p>
      </div>
    </div>
  )
}