"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey there, I'm a{" "}
        <span className="font-medium">full-stack</span> web developer with a passion for creating{" "}
        <span className="font-medium">digital symphonies</span>! 🎵
      </p>

      <p className="mb-3">
        You might be wondering how someone with a love for music ended up diving deep into the world of coding. Well, life is a medley of unexpected twists and turns, and my journey has been no different.
      </p>

      <p className="mb-3">
        In another universe, I might have been studying at a prestigious music academy, composing beautiful melodies. But fate had other plans, and now I'm here, crafting digital experiences instead of musical ones.
      </p>

      <p className="mb-3">
        I began my journey as a{" "}
        <span className="font-medium">Front-end magician</span>, wowing users with{" "}
        <span className="font-medium">ReactJs</span>'s magic. Today, I'm a{" "}
        <span className="font-medium underline">Full-stack</span> sorcerer, wielding{" "}
        <span className="font-medium underline">Spring Boot</span> and{" "}
        <span className="font-medium underline">Angular</span> to create complete{" "}
        <span className="italic">web solutions</span>.
      </p>

      <p className="mb-3">
        But wait, there's more to me than just coding spells! Beyond the lines of code, I'm a curious explorer of various domains - from the{" "}
        <span className="italic">physical sciences</span> to the{" "}
        <span className="italic">philosophy of existence</span>.{" "}
        <span className="italic">Economics</span>, in particular, is like my favorite{" "}
        <span className="italic">harmony</span> that I can't stop dissecting.
      </p>

      <p className="mb-3">
        So, welcome to{" "}
        <span className="font-medium">my digital symphony</span>! Here, I'm not just creating{" "}
        <span className="font-medium underline">websites</span> and{" "}
        <span className="font-medium underline">applications</span>; I'm crafting experiences and providing{" "}
        <span className="font-medium underline">solutions</span> that resonate with users like a perfectly tuned chord.
      </p>

      <p>
        Join me on this magical journey, where technology meets creativity, and together, we'll create some digital magic!
      </p>
    </motion.section>
  );
}
