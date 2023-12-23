import Image from "next/image";
import { Button } from "../buttons";

const Contact = () => {
  return (
    <section className="text-center">
      <div className="flex justify-center mb-8">
        <Image
          src="/contact-me.png"
          width="216"
          height="281"
          alt="Contact Me Image"
        />
      </div>
      <p className="text-white-description text-xl font-semibold mb-8">
        I&apos;d love to hear from you! Feel free to get in touch if you have a
        project idea, a question, or just want to say hello. I&apos;m looking
        forward to connecting with you!
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-max gap-6">
          <Button title="Send me an email" className="w-full" />
          <Button
            title="Download my resume"
            className="bg-white-full/0 border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
