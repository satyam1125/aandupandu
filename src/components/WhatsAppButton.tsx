// components/WhatsAppButton.tsx

import Image from "next/image";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/917400131613?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
    >
      <Image
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
        width={48}
        height={48}
      />
    </a>
  );
};

export default WhatsAppButton;
