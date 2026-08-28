import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { breadcrumbJsonLd } from "@/lib/seo";

export interface CrumbItem {
  name: string;
  path: string;
}

export function PageBreadcrumbs({ items }: { items: CrumbItem[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(trail)) }}
      />
      <Breadcrumb>
        <BreadcrumbList>
          {trail.map((item, index) => (
            <span key={item.path} className="flex items-center gap-1.5">
              <BreadcrumbItem>
                {index === trail.length - 1 ? (
                  <BreadcrumbPage>{item.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<Link href={item.path} />}>{item.name}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < trail.length - 1 && <BreadcrumbSeparator />}
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
