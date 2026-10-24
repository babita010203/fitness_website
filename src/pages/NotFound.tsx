import { Link } from "react-router-dom";
import Button from "../components/Button";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found | IronForge", "The page you requested does not exist.");

  return (
    <section className="mx-auto max-w-3xl px-4 py-40 text-center">
      <p className="text-xs tracking-[0.3em] text-lime uppercase">404</p>
      <h1 className="mt-3 font-display text-5xl uppercase md:text-7xl">Off the path</h1>
      <p className="mt-4 text-muted">This route doesn’t exist. Let’s get you back on the floor.</p>
      <Link to="/">
        <Button className="mt-8">Back to Home</Button>
      </Link>
    </section>
  );
}
