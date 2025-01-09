"use client";

import { Card } from "@/components/ui/card";
import { pokemonsContext } from "@/providers/PokemonsProvider";
import { useContext, useEffect } from "react";
import Image from "next/image";

export default function test() {
  const router = useRouter();
  console.log(router.query.id);

  const { id } = router.query;
  console.log(id);

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  return (
    <>
      <div className="flex flex-wrap gap-2 w-full justify-items-center"></div>
    </>
  );
}
