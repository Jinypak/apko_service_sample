import Error from "@/app/components/manual/hsm/Error";
import Migration from "@/app/components/manual/hsm/Migration";
import Sa5 from "@/app/components/manual/hsm/Sa5";
import Sa7 from "@/app/components/manual/hsm/Sa7";
import { Component } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const ManualListComponent = [
    {
      title: "sa5",
      path: "sa5",
      component: Sa5,
    },
    {
      title: "sa7",
      path: "sa7",
      component: Sa7,
    },
    {
      title: "migration",
      path: "migration",
      component: Migration,
    },
    {
      title: "error",
      path: "error",
      component: Error,
    },
  ];

  if (params.slug === undefined) {
    return <div>Not Found</div>;
  } else {
    return (
      <>
        {ManualListComponent.map((item, index) => {
          if (String(item.path) === String(params.slug)) {
            return <item.component key={index} />;
          }
        })}
      </>
    );
  }
  // return <div>Not Found</div>;
}
