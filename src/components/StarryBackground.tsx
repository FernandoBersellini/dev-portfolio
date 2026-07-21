import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

export default function StarryBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[#0a0a12]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(139,92,246,0.18), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(168,85,247,0.10), transparent)',
        }}
      />
      <StarsBackground />
      <ShootingStars />
    </div>
  )
}
