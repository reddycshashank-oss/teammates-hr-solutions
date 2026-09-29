import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://teammateshrsolutions.com";
  const lastModified = new Date();

  return [
    // Home
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Main pages
    {
      url: `${baseUrl}/internships`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for-candidates`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for-employers`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Employer pages
    {
      url: `${baseUrl}/for-employers/recruitment-services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/for-employers/staffing-solutions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/for-employers/naps-apprenticeship-support`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Industry pages
    {
      url: `${baseUrl}/industries/it-technology`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/manufacturing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/healthcare`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/logistics`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/retail`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/bpo-customer-support`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/bfsi`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/aerospace-defence`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/construction-infrastructure`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/real-estate`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/textile-apparel`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries/education-edtech`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}