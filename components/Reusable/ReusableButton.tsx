type Props = {
  title: string;
  style: string;
};

function ReusableButton({ title, style }: Props) {
  return (
    <button
      className={
        "bg-gradient-to-r from-primary to-secondary rounded-md" + " " + style
      }
    >
      {title}
    </button>
  );
}

export default ReusableButton;
