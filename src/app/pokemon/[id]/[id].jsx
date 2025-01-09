"use client";

import { Card } from "@/components/ui/card";
import { pokemonsContext } from "@/providers/PokemonsProvider";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default async function test() {
  const router = useRouter();
  // const slug = (await params).id;
  console.log(router.query.id);

  // const { id } = router.query;
  // console.log(id);

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  return (
    <>
      <div className="bg-emerald-300 flex flex-wrap gap-2 w-full justify-items-center"></div>
    </>
  );
}
