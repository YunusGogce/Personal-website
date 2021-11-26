import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { Form, FloatingLabel, Button, Alert, Spinner } from "react-bootstrap";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [alertMsg, setAlertMsg] = useState<string>("");
  const [alertType, setAlertType] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<string>("");

  const REACT_APP_RECAPTCHA_SITEKEY: string = process.env
    .REACT_APP_RECAPTCHA_SITEKEY as string;
  const REACT_APP_TEMPLATE_ID: string = process.env
    .REACT_APP_TEMPLATE_ID as string;
  const REACT_APP_SERVICE_ID: string = process.env
    .REACT_APP_SERVICE_ID as string;
  const REACT_APP_USER_ID: string = process.env.REACT_APP_USER_ID as string;

  async function submit(e: any) {
    e.preventDefault();
    if (name && email && message) {
      setLoading(true);
      const templateParams = {
        name,
        email,
        "g-recaptcha-response": captcha,
        message,
      };

      try {
        await emailjs.send(
          REACT_APP_SERVICE_ID,
          REACT_APP_TEMPLATE_ID,
          templateParams,
          REACT_APP_USER_ID
        );
        activateAlert("success", "Your message has been sent!");
        resetForm();
      } catch (e) {
        //@ts-ignore
        activateAlert("danger", "Something went wrong: " + e.text);
      }
    } else {
      activateAlert("danger", "Please fill in all required fields.");
    }
  }

  function activateAlert(type: string, message: string): void {
    setLoading(false);
    setAlertType(type);
    setAlertMsg(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }

  function resetForm(): void {
    setName("");
    setEmail("");
    setMessage("");
    setCaptcha("");
    //@ts-ignore
    window.grecaptcha.reset();
  }

  return (
    <>
      <div className="contact" id="contact">
        <h2 className="h1 mb-5 hr mt-5 mt-md-0">{"<Contact />"}</h2>
        <Form onSubmit={submit} className="p-lg-5">
          <Form.Group className="mb-3">
            <FloatingLabel label="Name*" className="mb-3">
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Email*" className="mb-3">
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
            </FloatingLabel>
            <FloatingLabel label="Message*">
              <Form.Control
                as="textarea"
                style={{ height: "300px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
                required
              />
            </FloatingLabel>
          </Form.Group>
          <ReCAPTCHA
            sitekey={REACT_APP_RECAPTCHA_SITEKEY}
            theme="dark"
            onChange={(k: any) => setCaptcha(k)}
          />
          {showAlert && <Alert variant={alertType}>{alertMsg}</Alert>}
          <Button
            className="mt-2"
            variant="secondary"
            type="submit"
            disabled={loading}
          >
            {loading && (
              <Spinner as="span" animation="border" size="sm" role="status" />
            )}
            Send
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Contact;
