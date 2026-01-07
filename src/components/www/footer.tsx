import Link from "next/link";

export function Footer() {
  const links = [
    {
      title: "Product",
      items: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "API", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-transparent to-pink-500/15">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="my-2 flex items-center gap-2 text-lg font-semibold">
              <span>Company</span>
            </Link>
            <p className="mt-2 text-sm text-foreground/50">
              Building the future of digital products wth minimalistic design.
            </p>
          </div>
          {links.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
