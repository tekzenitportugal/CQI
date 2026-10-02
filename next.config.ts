import type { NextConfig } from "next";

const products = {
  coreFunctionalities: "/products/core-functionalities",
  fixBeforeFailure: "/products/fix-before-failure-happens",
  howWeDoIt: "/products/how-we-do-it",
  whoIsItFor: "/products/who-is-it-for",
} as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/product",
        destination: products.coreFunctionalities,
        permanent: false,
      },
      {
        source: "/product/core-functionalities",
        destination: products.coreFunctionalities,
        permanent: true,
      },
      {
        source: "/product/fix-before-failure-happens",
        destination: products.fixBeforeFailure,
        permanent: true,
      },
      {
        source: "/product/how-we-do-it",
        destination: products.howWeDoIt,
        permanent: true,
      },
      {
        source: "/product/who-is-it-for",
        destination: products.whoIsItFor,
        permanent: true,
      },
      {
        source: "/product/explore/core-functionalities",
        destination: products.coreFunctionalities,
        permanent: true,
      },
      {
        source: "/product/explore/fix-before-failure-happens",
        destination: products.fixBeforeFailure,
        permanent: true,
      },
      {
        source: "/product/explore/how-we-do-it",
        destination: products.howWeDoIt,
        permanent: true,
      },
      {
        source: "/product/explore/who-is-it-for",
        destination: products.whoIsItFor,
        permanent: true,
      },
      {
        source: "/product/capabilities",
        destination: "/products/capabilities",
        permanent: true,
      },
      {
        source: "/product/capabilities/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      {
        source: "/product/how-we-prove-it",
        destination: "/products/how-we-prove-it",
        permanent: true,
      },
      {
        source: "/product/implementation",
        destination: "/products/implementation",
        permanent: true,
      },
      {
        source: "/product/integrations",
        destination: "/products/integrations",
        permanent: true,
      },
      {
        source: "/product/poc-approach",
        destination: "/products/poc-approach",
        permanent: true,
      },
      {
        source: "/product/security-trust",
        destination: "/products/security-trust",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/solutions/all-industry",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
