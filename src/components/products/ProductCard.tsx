import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductCard = ({ product }: any) => {
  const url = product.image
    ? `http://127.0.0.1:8090/api/files/${product.collectionId}/${product.id}/${product.image}`
    : "https://placehold.co/150";

  return (
    <div>
      <Card>
        <Image
          src={url}
          alt="Product"
          width={150}
          height={150}
          className="rounded-t-lg"
        />
        <CardHeader>
          <h1>{product.name}</h1>
        </CardHeader>
        <CardContent>
          <p>{product.description}</p>
          <Button asChild>
            <Link href={`/products/${product.id}`}>Buy now {product.price}$</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
