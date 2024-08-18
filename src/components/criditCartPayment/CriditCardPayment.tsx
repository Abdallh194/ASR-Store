import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControl,
  FormLabel,
  Button,
  Box,
} from "@mui/joy";
import styles from "./Styles/cardcontent.module.css";
const { cardcontent, input } = styles;
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { SubmitHandler, useForm } from "react-hook-form";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Spinner } from "react-bootstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useAppDispatch } from "@Redux/hooks";
import { ConfirmOrderClearCartItem } from "@Redux/Cart/CartSlice";

const CriditCardSchema = z.object({
  CreditCardNumber: z
    .string()
    .min(14, { message: "Please enter at least 14 valid numbers." }),
  ExpiryDate: z.string().min(4, { message: "Please enter a valid date " }),
  CardHolder: z.string().min(2, { message: "Card Holder Required" }),
  CardCVV: z.string().min(2, { message: "Card CVV Required" }),
});
type TCredit = z.infer<typeof CriditCardSchema>;

type TProps = {
  UserEmail: string;
};
export default function CriditCardPayment({ UserEmail }: TProps) {
  //modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [loading, setloading] = useState(false);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCredit>({
    mode: "onBlur",
    resolver: zodResolver(CriditCardSchema),
  });

  const ConfirmOrderHandler = () => {
    setloading(true);
    const debounce = setTimeout(() => {
      setloading(false);
      dispatch(ConfirmOrderClearCartItem());
      handleClose();
    }, 1500);
    return () => {
      clearTimeout(debounce);
    };
  };
  const SubmitForm: SubmitHandler<TCredit> = () => {
    setShow(true);
  };
  return (
    <Card className={cardcontent}>
      <h3> Payment information</h3>
      <h5 className="emailhead"> Contact Information</h5>
      <Form.Control className={input} type="text" value={UserEmail} />
      <hr />
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Card number</FormLabel>
          <div className="input-group">
            <span className="input-group-text">
              <CreditCardIcon />
            </span>
            <Form.Control
              className={input}
              type="number"
              isInvalid={!!errors.CreditCardNumber?.message}
              {...register("CreditCardNumber")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.CreditCardNumber?.message}
            </Form.Control.Feedback>
          </div>
        </FormControl>

        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <div className="input-group">
            <span className="input-group-text">
              <CreditCardIcon />
            </span>
            <Form.Control
              className={input}
              type="number"
              isInvalid={!!errors.ExpiryDate?.message}
              {...register("ExpiryDate")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.ExpiryDate?.message}
            </Form.Control.Feedback>
          </div>
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <div className="input-group">
            <span className="input-group-text">
              <InfoOutlined />
            </span>
            <Form.Control
              className={input}
              type="number"
              isInvalid={!!errors.CardCVV?.message}
              {...register("CardCVV")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.CardCVV?.message}
            </Form.Control.Feedback>
          </div>
        </FormControl>
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Card holder name</FormLabel>
          <div className="input-group">
            <span className="input-group-text">
              <InfoOutlined />
            </span>
            <Form.Control
              className={input}
              type="number"
              placeholder="Enter cardholder's full name"
              isInvalid={!!errors.CardHolder?.message}
              {...register("CardHolder")}
            />
            <Form.Control.Feedback type="invalid">
              {errors.CardHolder?.message}
            </Form.Control.Feedback>
          </div>
        </FormControl>
        <Checkbox label="Save card" sx={{ gridColumn: "1/-1", my: 1 }} />
        <Box className="info" sx={{ gridColumn: "1/-1" }}>
          Card details are stored for subscription renewals and future
          purchases. Card is validated with a temporary $0.50 hold, released
          after a few days
        </Box>
        <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button
            variant="solid"
            color="primary"
            type="submit"
            onClick={handleSubmit(SubmitForm)}
          >
            Add card
          </Button>
        </CardActions>
      </CardContent>
      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to proceed with the payment confirmation?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="solid"
            color="danger"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
          <Button variant="solid" color="success" onClick={ConfirmOrderHandler}>
            {loading ? (
              <>
                <Spinner animation="border" size="sm"></Spinner> Loading....
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
