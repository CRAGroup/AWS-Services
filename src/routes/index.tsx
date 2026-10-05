import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Bot,
  Box,
  ChevronRight,
  Cloud,
  Database,
  Globe2,
  HardDrive,
  LockKeyhole,
  Search,
  Server,
} from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AWS Services Directory" },
      {
        name: "description",
        content: "Browse popular AWS cloud services across compute, storage, databases, networking, security, analytics, and AI.",
      },
      { property: "og:title", content: "AWS Services Directory" },
      {
        property: "og:description",
        content: "A simple, searchable guide to popular Amazon Web Services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Category =
  | "All"
  | "Compute"
  | "Storage"
  | "Database"
  | "Networking"
  | "Security"
  | "Analytics"
  | "AI & ML";

const categories: Category[] = [
  "All",
  "Compute",
  "Storage",
  "Database",
  "Networking",
  "Security",
  "Analytics",
  "AI & ML",
];

const services = [
  { name: "Amazon EC2", category: "Compute", description: "Secure, resizable virtual servers for virtually any workload.", icon: Server },
  { name: "AWS Lambda", category: "Compute", description: "Run code without provisioning or managing servers.", icon: Cloud },
  { name: "Amazon ECS", category: "Compute", description: "Run and scale containerized applications with ease.", icon: Box },
  { name: "Amazon S3", category: "Storage", description: "Scalable object storage with industry-leading durability.", icon: HardDrive },
  { name: "Amazon EBS", category: "Storage", description: "High-performance block storage designed for EC2.", icon: HardDrive },
  { name: "Amazon RDS", category: "Database", description: "Set up, operate, and scale relational databases.", icon: Database },
  { name: "Amazon DynamoDB", category: "Database", description: "Fast, flexible NoSQL database with single-digit millisecond performance.", icon: Database },
  { name: "Amazon VPC", category: "Networking", description: "Define and launch AWS resources in an isolated virtual network.", icon: Globe2 },
  { name: "Amazon CloudFront", category: "Networking", description: "Deliver content globally with low latency and high speed.", icon: Globe2 },
  { name: "AWS IAM", category: "Security", description: "Securely manage identities and access to AWS services.", icon: LockKeyhole },
  { name: "Amazon GuardDuty", category: "Security", description: "Continuously monitor for malicious activity and threats.", icon: LockKeyhole },
  { name: "Amazon Redshift", category: "Analytics", description: "Analyze data at scale with a fast cloud data warehouse.", icon: BarChart3 },
  { name: "Amazon Athena", category: "Analytics", description: "Query data in Amazon S3 using standard SQL.", icon: BarChart3 },
  { name: "Amazon SageMaker", category: "AI & ML", description: "Build, train, and deploy machine learning models at scale.", icon: Bot },
  { name: "Amazon Bedrock", category: "AI & ML", description: "Build generative AI applications with foundation models.", icon: Bot },
] as const;

function Index() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const visibleServices = useMemo(() => {
    const query = search.trim().toLowerCase();
    return services.filter((service) => {
      const matchesCategory = activeCategory === "All" || service.category === activeCategory;
      const matchesSearch = !query || `${service.name} ${service.description}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="aws-site min-vh-100">
      <nav className="navbar navbar-dark aws-navbar" aria-label="Main navigation">
        <div className="container py-2">
          <a className="navbar-brand d-flex align-items-center gap-2 fw-semibold" href="#top">
            <Cloud aria-hidden="true" size={26} />
            <span>AWS Services</span>
          </a>
          <span className="navbar-text d-none d-sm-inline">Cloud services directory</span>
        </div>
      </nav>

      <header id="top" className="aws-intro">
        <div className="container py-5 py-lg-6">
          <div className="row align-items-end g-4">
            <div className="col-lg-7">
              <p className="aws-eyebrow mb-3">Amazon Web Services</p>
              <h1 className="display-4 fw-bold mb-3">Build anything in the cloud</h1>
              <p className="lead mb-0">
                Explore essential AWS services for computing, storing data, building applications, and more.
              </p>
            </div>
            <div className="col-lg-5">
              <label htmlFor="service-search" className="visually-hidden">Search services</label>
              <div className="input-group input-group-lg aws-search">
                <span className="input-group-text border-0"><Search size={20} aria-hidden="true" /></span>
                <input
                  id="service-search"
                  className="form-control border-0"
                  type="search"
                  placeholder="Search services"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-5">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
          <div>
            <h2 className="h3 fw-bold mb-1">Popular services</h2>
            <p className="text-secondary mb-0">{visibleServices.length} services shown</p>
          </div>
          <div className="d-flex flex-wrap gap-2" aria-label="Filter services by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`btn btn-sm ${activeCategory === category ? "btn-aws" : "btn-outline-secondary"}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {visibleServices.length > 0 ? (
          <div className="row g-3">
            {visibleServices.map((service) => {
              const Icon = service.icon;
              return (
                <div className="col-md-6 col-xl-4" key={service.name}>
                  <article className="card aws-card h-100 border-0">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <span className="aws-icon d-inline-flex align-items-center justify-content-center">
                          <Icon size={24} aria-hidden="true" />
                        </span>
                        <span className="badge aws-badge">{service.category}</span>
                      </div>
                      <h3 className="h5 fw-bold mb-2">{service.name}</h3>
                      <p className="text-secondary mb-4">{service.description}</p>
                      <a
                        className="aws-link fw-semibold text-decoration-none d-inline-flex align-items-center gap-1"
                        href={`https://aws.amazon.com/products/${service.name.toLowerCase().replaceAll("amazon ", "").replaceAll("aws ", "").replaceAll(" & ", "-").replaceAll(" ", "-")}/`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn more <ChevronRight size={17} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="aws-empty text-center py-5">
            <Search className="mb-3" size={36} aria-hidden="true" />
            <h3 className="h5 fw-bold">No services found</h3>
            <p className="text-secondary mb-0">Try another search term or category.</p>
          </div>
        )}
      </main>

      <footer className="border-top py-4 mt-4">
        <div className="container d-flex flex-column flex-sm-row justify-content-between gap-2 small text-secondary">
          <span>A simple guide to popular AWS services.</span>
          <span>Not affiliated with Amazon Web Services.</span>
        </div>
      </footer>
    </div>
  );
}
