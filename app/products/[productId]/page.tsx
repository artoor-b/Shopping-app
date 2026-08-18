import { Grid, Stack, Typography } from "@mui/material";
import getProduct from "./get-product";
import Image from "next/image";
import { getProductImage } from "../product-image";

interface SingleProductProps {
  params: Promise<{ productId: string }>;
}

export default async function SingleProduct({ params }: SingleProductProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const product = await getProduct(+resolvedParams.productId);

  return (
    <Grid container sx={{ marginBottom: "2rem", rowGap: 3 }}>
      {product.imageExists && (
        <Grid size={{ md: 6, xs: 12 }}>
          <Image
            src={getProductImage(product.id)}
            width={0}
            height={0}
            className="w-full sm:w-3/4 h-auto"
            sizes="100vw"
            alt="Picture of the product"
          />
        </Grid>
      )}
      <Grid size={{ md: 6, xs: 12 }}>
        <Stack spacing={3}>
          <Typography variant="h2">{product.name}</Typography>

          <Typography>{product.description}</Typography>
          <Typography variant="h4">${product.price}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
