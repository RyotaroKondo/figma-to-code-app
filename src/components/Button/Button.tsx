import { forwardRef, Ref } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
}

const Button1 = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children }, ref: Ref<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={styles.button}>
        {children || 'ボタン'}
      </button>
    );
  }
);

Button1.displayName = 'Button1';
export default Button1;
