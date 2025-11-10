// components/WhatsAppButton.tsx

import Link from "next/link";
import styles from "./FloatingButton.module.css";

const WhatsAppButton: React.FC = () => {
  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M19.2,4.8A9.8,9.8,0,0,0,12,2,9.8,9.8,0,0,0,2.2,12a9.8,9.8,0,0,0,9.8,9.8h0a9.8,9.8,0,0,0,7-2.9L22,22ZM12,20.2a8.2,8.2,0,0,1-4.4-1.3l-3,1,1-2.9A8.2,8.2,0,1,1,12,20.2Zm4.3-6.1c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8,1-.3.2-.5.1-1.1-.4-2.1-1.3-.8-1.6-.9-1.8.0-.3.1-.4.2-.2.3-.4.0-.2-.1-.4-.5-1.3-.7-1.8-.2-.4-.3-.4H8.5c-.2,0-.4.2-.5.4s-.7.8-.7,1.9.7,2.2.8,2.3,1.4,2.2,3.5,3.1.7.3,1.1.2,1.4-.6,1.6-.8.2-.4.1-.6Z" />
    </svg>
  );

  return (
    <Link href="https://wa.me/918445214371" target="_blank" passHref>
      <div className={`${styles.floatingButton} ${styles.whatsappButton}`}>
        <WhatsAppIcon />
      </div>
    </Link>
  );
};

export default WhatsAppButton;
