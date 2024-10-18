import { forwardRef, Ref } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonAccent = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled = false, onClick }, ref: Ref<HTMLButtonElement>) => {
    return (
      <button 
        ref={ref} 
        className={styles.buttonAccentM} 
        disabled={disabled}
        onClick={onClick}
      >
        {children || 'ボタン'}
      </button>
    );
  }
);

ButtonAccent.displayName = 'ButtonAccent';
export default ButtonAccent;
