import Image from "next/image";
import styles from "./InstagramButton.module.css";

const InstagramButton: React.FC = () => {
  return (
    <a
      href="https://www.instagram.com/trilokigroup"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.instagramFloat}
    >
      <Image
        src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
        alt="Instagram"
        width={48}
        height={48}
      />
    </a>
  );
};

export default InstagramButton;