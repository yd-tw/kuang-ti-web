export default function ProjectTag({
  name,
  onClick,
  isSelected,
}: {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}) {
  const buttonStyles = isSelected
    ? "border-orange-500"
    : "text-gray-700 dark:text-gray-300 border-orange-200 hover:border-orange-500";

  return (
    <button
      className={`${buttonStyles} cursor-pointer rounded-full border-2 px-3 py-3 text-sm first-letter:cursor-pointer md:px-8 md:text-xl`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
