interface Props {
  classeNome?: string;
}

export default function BrandMark({ classeNome = '' }: Props) {
  return (
    <>
      <img className="w-10" src="/img/logo_foodshare_semfundo.png" alt="Logo do Food Share" />
      <span className={`font-display font-bold text-xl text-brand-800 dark:text-[#fafafa] ${classeNome}`}>
        Food Share
      </span>
    </>
  );
}
