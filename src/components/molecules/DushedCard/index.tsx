import React from 'react'
import styles from './index.module.css'


export type DushedCardProps = {
    children: any;
    width?: string;
    height?: string;
    bg?: string;
    rotation?: string;
    borderColor?: string;
}

const DushedCard = ({children, width, height, bg, borderColor, rotation }: DushedCardProps) => {

  const dushedDefaultProps = {
    width, height, 
    backgroundColor: bg,
    transform: `translateX(0px) rotate(${rotation || '-2.12deg'})`,
    boxShadow: `10px 10px ${borderColor || 'rgb(66, 66, 66)'}`
  }
  return (
    <aside className={styles.container} style={dushedDefaultProps}>{children}</aside>
  )
}

export default DushedCard