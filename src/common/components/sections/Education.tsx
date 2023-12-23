import Image from "next/image";

const Education = () => {
  return (
    <section className="text-center">
      <h3 className="text-xl mb-12">Certifications & Education</h3>
      <ul className="flex flex-col gap-14 mb-14">
        <li>
          <h3 className="text-white-full text-3xl">Node: De cero a experto</h3>
          <p className="text-white-darkest font-source text-sm mb-7">
            Completed in July 2023
          </p>
          <div className="p-6 rounded bg-white-full/[.08] border border-white-full/[.15]">
            <Image
              className="rounded"
              src="/certificate-node.jpg"
              width="310"
              height="231"
              alt="certificate-node"
            />
          </div>
        </li>
      </ul>
      <ul className="flex flex-col gap-14">
        <li className="space-y-2">
          <p className="font-source text-base text-white-dark">
            Name of the education
          </p>
          <h3 className="text-white-full text-3xl">Name of the school</h3>
          <p className="text-white-darkest text-sm">Graduated in 2021</p>
        </li>
        <li className="space-y-2">
          <p className="font-source text-base text-white-dark">
            Name of the education
          </p>
          <h3 className="text-white-full text-3xl">Name of the school</h3>
          <p className="text-white-darkest text-sm">Graduated in 2021</p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
