const Faq = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 my-32 ">
      <div className="flex justify-center items-center flex-col my-5 ">
        <h2 className="md:text-4xl text-2xl font-bold text-center ">
          Explore Our Frequently Asked Questions
        </h2>
        <div className="border-b-secondary border-b-4 w-28 my-4 mb-3 mx-auto"></div>
        <p className="my-5">
          Welcome to our FAQ section, where we're here to address your most
          common queries and concerns. We understand that navigating a website
          can raise questions, and we're here to provide you with the
          information you need. Explore the following frequently asked questions
          to find answers to topics such as ordering, shipping, returns, and
          more. If you can't find the answer you're looking for, don't hesitate
          to reach out to our dedicated customer support team, who are always
          ready to assist you. Your satisfaction and peace of mind are our top
          priorities, and we're here to make your experience with us as smooth
          as possible.
        </p>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5  text-black rounded">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is Vogue-Verse-Apparel?
        </div>
        <div className="collapse-content">
          <p>
            Vogue-Verse-Apparel is a premium online clothing store that offers a
            curated collection of fashionable apparel for men and women. We
            provide a wide range of clothing options, from trendy casual wear to
            elegant formal attire.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5 text-black  rounded">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do I place an order?
        </div>
        <div className="collapse-content">
          <p>
            Placing an order is easy! Simply browse our website, select the
            items you love, and add them to your cart. Once you're ready,
            proceed to checkout and follow the simple steps to complete your
            purchase.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5 text-black rounded">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I track my order?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can track your order. Once your order is confirmed, you
            will receive a tracking number. You can use this tracking number to
            monitor the progress of your delivery.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-5 text-black rounded">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I contact your customer support?
        </div>
        <div className="collapse-content">
          <p>
            Our customer support team is here to assist you. You can reach us
            via email at support@vogueverseapparel.com or through our Contact Us
            page. We aim to respond to your inquiries promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
