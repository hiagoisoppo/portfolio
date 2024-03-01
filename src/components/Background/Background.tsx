import Image from "next/image";
import Console from "./Console/Console";
import Lines from "./Lines/Lines";
import background from "@/assets/backgroundCircuit.jpg"

export default function Background() {
  return (
    <>
      {/* <Image
        src={background}
        alt="background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        style={{ zIndex: -1, opacity: 0.1 }}
      /> */}
      <Lines />
      <Console />
    </>
  );
}
