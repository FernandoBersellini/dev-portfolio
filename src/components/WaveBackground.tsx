export default function WaveBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-paper">
      {/* soft ink wash at the top, like sky over the sea */}
      <div
        className="absolute inset-x-0 top-0 h-[60vh]"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(20,56,80,0.16), transparent 70%)',
        }}
      />

      {/* seigaiha wave-scale texture band */}
      <div className="seigaiha absolute inset-x-0 top-24 h-40 opacity-40" />

      {/* the Great Wave, anchored to the bottom and faded into the paper */}
      <div className="absolute inset-x-0 bottom-0">
        <img
          src="/hokusai/great-wave.png"
          alt=""
          className="mx-auto w-full max-w-[1600px] object-cover opacity-25"
          style={{
            maskImage: 'linear-gradient(to top, black 20%, transparent 92%)',
            WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 92%)',
          }}
        />
      </div>
    </div>
  )
}
