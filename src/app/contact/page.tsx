export default function ContactPage() {
  return (
    <div className="grid grid-cols-content justify-center px-5 py-28 md:px-12 lg:px-16">
      <h1 className="text-2xl font-bold text-gray-1">Contact</h1>
      <p className="mt-4 text-gray-6">
        Reach out at{" "}
        <a href="mailto:hello@nexiafy.com" className="text-brand-rose-1 underline">
          hello@nexiafy.com
        </a>
        .
      </p>
    </div>
  );
}
