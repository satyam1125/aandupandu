"use client"

export function AnnouncementBar() {
  const announcements = [
    "🕉️ Kedarnath 2026 Booking Started @₹21,500 per person",
    "🏔️ Srinagar Booking Started @₹8,000 per person",
    "🚁 Vaishno Devi with Helicopter @₹13,499 per person",
  ]

  const scrollingText = announcements.join("   •   ") + "   •   "

  return (
    <div className="w-full bg-gradient-to-r from-[#fff4d6] via-[#ffe5b4] to-[#fff4d6] border-b border-[#ffb84c] overflow-hidden relative">
      <div className="announcement-container">
        <div className="announcement-text">
          {scrollingText.repeat(3)}
        </div>
      </div>
      <style jsx>{`
        .announcement-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          height: 40px;
          display: flex;
          align-items: center;
        }

        .announcement-text {
          display: inline-block;
          padding-left: 100%;
          font-weight: 600;
          font-size: 14px;
          color: #d97706;
          animation: scrollText 30s linear infinite;
        }

        @keyframes scrollText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .announcement-text {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}