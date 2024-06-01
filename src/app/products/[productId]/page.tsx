import { Button } from "@/components/ui/button";
import { pb } from "@/lib/pocketbase";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  params: {
    productId: string;
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await pb.collection("products").getOne(params.productId, {
    cache: "no-store",
  });

  const url = product.image
    ? `http://127.0.0.1:8090/api/files/${product.collectionId}/${product.id}/${product.image}`
    : "https://placehold.co/600";
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-4xl px-4 mx-auto py-6">
      <div>
        <Image
          src={url}
          alt="Product Image"
          width={600}
          height={600}
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        />
      </div>
      <div className="grid gap-4">
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Soft and comfortable fleece pullover, perfect for chilly days.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {product.description}
          </p>
          <div className="flex items-center gap-2 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={twMerge(
                  "w-5 h-5",
                  i < product.stars
                    ? "fill-primary"
                    : "fill-muted stroke-muted-foreground"
                )}
              />
            ))}

            <span className="text-gray-500 dark:text-gray-400 ml-2">
              {product.stars} out of 5
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">${product.price}</span>
          <Button size="lg">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
