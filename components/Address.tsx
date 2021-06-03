import { Box, Text, Spacer, Center } from "@chakra-ui/react";
import { PoemData } from "../lib/types";
//try animation

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(MotionPathPlugin, SplitText);

//prepare timeline
const tl = gsap.timeline({
  paused: true,
  reversed: true,
  onComplete: () => tl.restart(),
});
const dur = 20;
const each = dur * 0.01;
//round function
function roundTo2(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const Address = ({ address }: { address: PoemData["address"] }) => {
  //prepare animation
  let animatedText = useRef(null);
  let textPath = useRef(null);

  useEffect(() => {
    gsap.from([animatedText.current], 0.6, {
      x: 32,
    });
  });

  if (animatedText.current != null) {
    // const splitText = new SplitText(animatedText.current, {
    //   type: "chars",
    //   charsClass: "letter",
    // });
    // splitText.chars.forEach((char, i) => {
    //   char.classList.add("c" + char.innerHTML);
    //   const timeOffset = i * each;
    //   const startTime = dur / 2 + timeOffset;
    //   const pathOffset = startTime / dur; //roundTo2(startTime / dur);
    //   console.log("PATH", pathOffset);
    // const tween = useEffect(() => {
    //   gsap.to(splitText.chars[i], {
    //     motionPath: {
    //       path: ".st0",
    //       align: ".st0",
    //       alignOrigin: [0.5, 0.5],
    //       autoRotate: true,
    //       start: pathOffset,
    //       end: 1 + pathOffset,
    //     },
    //     immediateRender: true,
    //     duration: 20,
    //     ease: "none",
    //   });
    // }, [animatedText]);
    // tl.add(tween, 0);
    // });
  }
  return (
    <Box position="absolute" w="100%" h="100%" p="19px">
      <Text position="absolute" ref={animatedText}>
        {address}
      </Text>
      <svg
        ref={textPath}
        width="322"
        height="602"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="320" height="600" rx="12" stroke="#FFFFFF" />
      </svg>
    </Box>
  );
};
export default Address;
