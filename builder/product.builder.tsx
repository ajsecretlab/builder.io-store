import dynamic from "next/dynamic";
import { Builder } from "@builder.io/react";

Builder.registerComponent(
  dynamic(() => import("../components/products/ProductHandle")),
  {
    name: "ProductHandle",
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/brand-producthunt.png",
  }
);

Builder.registerComponent(
  dynamic(() => import("../components/products/Link")),
  {
    name: "Link",
    image: "https://tabler-icons.io/static/tabler-icons/icons-png/link.png",
    inputs: [
      {
        name: "href",
        friendlyName: "href",
        type: "string",
        required: true,
        defaultValue: "href",
      },
      {
        name: "children",
        friendlyName: "title",
        type: "string",
        required: true,
        defaultValue: "href",
      },
      {
        name: "subtext",
        friendlyName: "subtext",
        type: "string",
        required: true,
        defaultValue: "subtext",
      },
    ],
  }
);

Builder.register("insertMenu", {
  name: "Secretlab Components 1",
  items: [
    { name: "PageTitle", label: "Page Title" },
    { name: "Link", label: "Anchor Link" },
  ],
});
