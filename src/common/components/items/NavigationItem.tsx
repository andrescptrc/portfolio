import { Button } from '../buttons';

const NavigationItem = ({ element }: NavigationItemProps) => {
  const sectionName = element.dataset.section;

  return (
    <li>
      <Button
        className="text-black-quarternary hover:text-white-full transition"
        title={sectionName || ''}
      >
        {sectionName}
      </Button>
    </li>
  );
};

type NavigationItemProps = {
  element: HTMLElement;
};

export default NavigationItem;
