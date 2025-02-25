import { forwardRef, Ref } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button1 = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled = false, onClick }, ref: Ref<HTMLButtonElement>) => {
    return (
      <button 
        ref={ref} 
        className={styles.buttonPrimaryM} 
        disabled={disabled}
        onClick={onClick}
      >
        {children || 'ボタン'}
      </button>
    );
  }
);

Button1.displayName = 'Button1';
export default Button1;