import React from "react";
import {motion} from 'framer-motion';

const FlipLink = ({ children, href }) => {
  return ( <motion.a
  initial="initial"
  whileHover="hovered"
  href={href}
  transition={{
    staggerChildren: 0.05,
  }} 
  className="relative block overflow-hidden whitespace-nowrap
  text-4xl font-black uppercase">
    <div>
      {children.split("").map((l, i ) => {
      return<motion.span
      variants={{
        initial: { y: 0 },
        hovered: { y: '-100%' }
      }}
      className="inline-block"
      key={i}
      >
        {l}</motion.span>
    })}
    </div>
    <div className="absolute inset-0">{children.split("").map((l, i ) => {
      return<motion.span
       variants={{
        initial: { y: '100%' },
        hovered: { y: 0 }
      }}
      className="inline-block"
      key={i}>{l}</motion.span>
    })}</div>
  </motion.a>
  );
}

function RevealFooter() {
  return (
    <footer className=" text-black p-4 text-center">
      <p>© 2024 My Portfolio. All rights reserved.</p>
      <div className="gap-4 mt-2 flex justify-center">
      <FlipLink href="#" >facebook</FlipLink>
      <FlipLink href="#" >Instagram</FlipLink>
      <FlipLink href="#" >Tiktok</FlipLink>
      <FlipLink href="#" >Github</FlipLink>
      </div>
    </footer>
  );
}

export default RevealFooter;