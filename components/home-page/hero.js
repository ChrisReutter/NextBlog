import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="An image showing Chris"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Chris</h1>
      <p>
        I blog about web development - especially all kind of futuristic
        frameworks
      </p>
    </section>
  );
}

export default Hero;
