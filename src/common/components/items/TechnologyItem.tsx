const TechnologyItem = ({ title }: TechnologyItemProps) => {
  return (
    <p className="rounded-[32px] bg-blue-100/[.15] border border-blue-600 font-medium text-sm px-4 py-2">
      {title}
    </p>
  );
};

type TechnologyItemProps = {
  title: string;
};

export default TechnologyItem;
