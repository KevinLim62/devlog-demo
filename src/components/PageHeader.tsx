"use client";

type PageHeaderProps = {
  title:string
}
const PageHeader:React.FC<PageHeaderProps> = ({
  title
}) => {
  return (
    <section>
      <div className="text-center">
        <div className="bg-slate-500 p-8 py-8 mb-5 text-xl h-full">
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;