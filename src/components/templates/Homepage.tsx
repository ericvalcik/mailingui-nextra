import Link from "next/link";

export const Homepage = () => {
  return (
    <div className="mx-auto grid place-content-center place-items-center h-full w-full gap-6 text-center">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold md:text-6xl">
          Under Construction
        </h1>
        <p className="text-lg leading-relaxed text-neutral-500">
          This page is still under construction! Thanks for your patience!
        </p>
        <div className="w-full md:flex md:gap-4 md:justify-center">
          <Link
            href={"https://github.com/webscopeio/mailingui/issues"}
            className="border block w-full md:w-fit px-8 py-4 rounded-xl bg-white text-black font-medium"
          >
            Report an issue
          </Link>
          <Link
            href={"https://github.com/webscopeio/mailingui/discussions"}
            className="w-full block md:w-fit px-8 py-4 border border-transparent rounded-xl font-medium"
          >
            Request a new feature
          </Link>
        </div>
      </section>
    </div>
  );
};