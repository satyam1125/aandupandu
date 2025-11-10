import Link from 'next/link';
import { Phone } from 'lucide-react';
import styles from './FloatingButton.module.css';

const CallButton = () => {
  return (
    <Link href="tel:+919720340187" passHref>
      <div className={`${styles.floatingButton} ${styles.callButton}`}>
        <Phone size={28} />
      </div>
    </Link>
  );
};

export default CallButton;