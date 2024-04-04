import React from 'react'
import styles from './index.module.css';

export type TextProps = {
  children: any;
  variant: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'bold',
  color?: string;
}

const Text = ({children, variant, color } : TextProps ) => {
  const component = {
    'normal': <span style={{color, lineHeight: 2}}>{children}</span>,
    'h1': <h1 style={{color}}>{children}</h1>,
    'h2': <h2 style={{color}}>{children}</h2>,
    'h3': <h3 style={{color}}>{children}</h3>,
    'h4': <h4 style={{color}}>{children}</h4>,
    'h5': <h5 style={{color}}>{children}</h5>,
    'bold': <b style={{color}}>{children}</b>,
  }[variant];

  return ( 
    <div className={styles.typography}>
      {component}
    </div>
  );
}

export default Text;


