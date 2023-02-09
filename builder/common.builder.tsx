import dynamic from "next/dynamic";
import { Builder } from "@builder.io/react";

Builder.registerComponent(
  dynamic(() => import("../components/common/PageTitle")),
  {
    name: "PageTitle",
    image: "https://tabler-icons.io/static/tabler-icons/icons-png/heading.png",
    inputs: [
      {
        name: "children",
        friendlyName: "title",
        type: "string",
        required: true,
        defaultValue: "I am a React + Tailwind component!",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("../components/common/Link")),
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
        type: "text",
        required: true,
        defaultValue: "href",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("../components/common/Text")),
  {
    name: "Text",
    image: "https://tabler-icons.io/static/tabler-icons/icons-png/edit.png",
    inputs: [
      {
        name: "text",
        friendlyName: "text",
        type: "richText",
        required: true,
        defaultValue: "",
      },
    ],
  }
);

Builder.register("insertMenu", {
  name: "Secretlab Components 2",
  items: [
    { name: "ProductHandle", label: "Product Handle" },
    { name: "Link", label: "Awesome Link" },
    { name: "Text", label: "Awesome Text" },
  ],
});
