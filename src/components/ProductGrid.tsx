import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { getRequest } from "../utils/requests";

export const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error, message } = await getRequest(
          "/products/products/get-all-products"
        );
        if (error) {
          throw new Error(`HTTP error! status: ${message}`);
        }
        const result: any = (data as any[])[0];
        setProducts(result);
      } catch (err: any) {
        console.log(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      {!loading && (
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          {products.map((product: any) => (
            <Grid size={{ xs: 6, sm: 6, md: 4, lg: 2 }} key={product.id}>
              <Card
                variant="outlined"
                onClick={() => {}}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "0",
                  border: "none",
                  borderColor: "primary.main",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  height="255"
                  width="187"
                  image={product.images[0].url}
                  alt={product.name}
                />
                <CardContent sx={{ ml: 0, pl: 0, pt: 0 }}>
                  <Typography
                    sx={{ textTransform: "uppercase" }}
                    color="text.primary"
                    fontSize={"0.9rem"}
                    fontWeight={"bold"}
                  >
                    {product.name}
                  </Typography>
                  <Typography color="text.primary" fontSize={"0.9rem"}>
                    RS. {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
