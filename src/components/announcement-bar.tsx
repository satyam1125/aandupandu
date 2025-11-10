"use client"

export function AnnouncementBar() {
  const announcements = [
    "Kashmir Bookings Open!                     ",
    "(2026) Kedarnath Helicopter Bookings Open!                     ",
    "Vaishno Devi Bookings Open!                     ",
  ]

  // Add significant spacing for a clear separation
  const scrollingText = announcements.join(" \u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0 ") + " \u00A0\u00A0\u00A0 | \u00A0\u00A0\u00A0 "

  return (
    <div className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 border-b-2 border-red-800 overflow-hidden relative shadow-lg">
      <div className="announcement-container">
        <div className="announcement-text">
          {scrollingText.repeat(5)}
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
          font-weight: 700;
          font-size: 15px;
          color: white;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
          animation: scrollText 40s linear infinite;
        }

        @keyframes scrollText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-20%);
          }
        }

        @media (max-width: 768px) {
          .announcement-text {
            font-size: 13px;
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  )
}