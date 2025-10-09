import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Paper,
} from "@mui/material";
import { getRequest } from "../utils/requests";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface Feedback {
  id: number;
  fullName: string;
  age: string;
  gender: string;
  mobileNumber: string;
  emailId: string;
  questions: Question[];
  createdAt: string;
}

export const FeedbackCards = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  const fetchFeedbacks = async (page: number) => {
    try {
      setLoading(true);
      const { data, error }: { data: any; error: any; message: any } =
        await getRequest(
          `/products/feedbacks/get-feedbacks?limit=${limit}&page=${page}`
        );

      if (!error) {
        setFeedbacks(data.feedbacks);
        setTotalCount(data.count);
      }
    } catch (error) {
      console.error("Failed to fetch feedbacks", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks(page);
  }, [page]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <Paper
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        borderRadius: 0,
        px: 2,
        pb: 2,
        backgroundColor: "primary.main",
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" mb={2} color="text.primary">
          Feedbacks
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", md: "row" }}
            gap={0.5}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            {feedbacks.map((fb) => (
              <Card
                key={fb.id}
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  width: { xs: "100%", md: "40%" },
                }}
              >
                <CardContent>
                  <Typography variant="h6">{fb.fullName}</Typography>
                  <Typography variant="body2">
                    Age: {fb.age} | Gender: {fb.gender}
                  </Typography>
                  <Typography variant="body2">Email: {fb.emailId}</Typography>
                  <Typography variant="body2">
                    Mobile: {fb.mobileNumber}
                  </Typography>
                  <Box mt={1}>
                    {fb.questions.map((q) => (
                      <Box key={q.id} mb={1}>
                        <Typography variant="subtitle2">
                          {q.question}
                        </Typography>
                        <Typography variant="body2">{q.answer}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}

        {/* Pagination */}
        <Box display="flex" justifyContent="center" mt={2} gap={1}>
          <Button
            variant="outlined"
            sx={{ color: "text.primary" }}
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            Page {page} of {totalPages}
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "text.primary" }}
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
