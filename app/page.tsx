import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "زبان فارسی",
    description: "صفحه‌ای گرم و صمیمی برای خوش‌آمدگویی به بازدیدکنندگان فارسی‌زبان.",
  },
  {
    title: "English Friendly",
    description: "Bilingual copy offers a gentle introduction for international visitors.",
  },
  {
    title: "Responsive by Design",
    description: "Layouts adapt gracefully from mobile screens to large displays.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">به خانه دیجیتال خود خوش آمدید</p>
          <h1 className="hero__title">
            <span>سلام!</span>
            <span className="hero__subtitle">Hello, world.</span>
          </h1>
          <p className="hero__description">
            این یک معرفی ساده با طراحی مدرن است که به زبان فارسی و انگلیسی از بازدیدکنندگان استقبال می‌کند.
            با ساختار انعطاف‌پذیر و سبک مینیمال، می‌توانید براحتی آن را گسترش دهید.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" href="#features">
              شروع کنید
            </Link>
            <Link className="button button--ghost" href="mailto:hello@example.com">
              ارتباط با ما
            </Link>
          </div>
        </div>
        <div className="hero__visual" aria-hidden>
          <div className="glow" />
          <Image src="/waves.svg" alt="Decorative gradient waves" width={440} height={440} priority />
        </div>
      </section>

      <section id="features" className="features">
        {highlights.map((item) => (
          <article key={item.title} className="feature-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        <span>ساخته شده با عشق برای شما</span>
        <span className="footer__divider" aria-hidden>|</span>
        <span>Built to shine on Vercel</span>
      </footer>
    </main>
  );
}
