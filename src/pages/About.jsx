const About = () => {
  return (
    <div className=" max-w-[1280px] mx-auto px-4 my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center">About Us</h2>
      <p className="text-center mb-8 mt-5">
        We're here to empower you to express your unique style and celebrate
        individuality.{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div>
          <h2 className="font-bold text-xl text-center">Our Story</h2>
          <div className="border-b-secondary border-b-4 w-20 my-2 mb-3 mx-auto"></div>
          <p className=" text-justify">
            Vogue-Verse Apparel is more than just a fashion destination; it's a
            lifestyle. Founded with a passion for style, elegance, and
            self-expression, our journey began with a simple idea - to provide
            fashion enthusiasts a place to discover, embrace, and celebrate
            their individuality through clothing. We believe that fashion is a
            form of art, a means to express your personality, and a way to tell
            your unique story. <br /> With a dedicated team of fashion
            aficionados, we've curated a collection that speaks to every fashion
            taste, from classic to avant-garde. Our mission is to empower you to
            explore, experiment, and feel confident in what you wear. At
            Vogue-Verse Apparel, we celebrate diversity and embrace the
            ever-evolving world of fashion.
            <br />
            Join us on this exciting fashion journey and experience the
            intersection of style, quality, and innovation. We're here to
            provide you with more than just clothing; we offer you a canvas to
            express yourself, define your style, and make a statement. Welcome
            to Vogue-Verse Apparel, where fashion meets self-expression, and
            your story unfolds.
          </p>
        </div>
        <div>
          <img
            src={"https://i.ibb.co/H48RLgr/about.webp"}
            className="mx-auto my-12 rounded-full"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl text-center">
            Why Choose Vogue-Verse Apparel?
          </h2>
          <div className="border-b-secondary border-b-4 w-20 my-2 mb-3 mx-auto"></div>
          <ul className=" text-justify">
            <li>
              <span>1. Trendsetting Collections:</span> Our team of fashion
              experts is dedicated to curating the latest and most stylish
              collections from around the world. We keep our finger on the pulse
              of the fashion industry to ensure you're always on-trend.
            </li>
            <li>
              <span>2. Quality and Craftsmanship: </span> We prioritize quality
              in every piece we offer. Whether it's clothing, shoes, or
              accessories, you can trust that our products are crafted with
              attention to detail and made to last.
            </li>
            <li>
              <span>3. Diverse Selection: </span> We recognize that fashion is a
              diverse and personal experience. That's why our selection caters
              to all tastes, from classic and timeless designs to bold and
              unique styles.
            </li>
            <li>
              <span>4. Community of Fashion Enthusiasts: </span> Join our
              vibrant community of fashion enthusiasts. Share your style, get
              inspired by others, and be part of a community that celebrates
              diversity in fashion.
            </li>
            <li>
              <span>5. Express Your Individuality: </span> Vogue-Verse Apparel
              is more than just clothing; it's a canvas for self-expression. We
              believe that every outfit should reflect your unique personality
              and story.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
