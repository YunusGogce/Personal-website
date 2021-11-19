import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { Form, FloatingLabel, Button, Alert, Spinner } from "react-bootstrap";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [alertMsg, setAlertMsg] = useState<string>("");
  const [alertType, setAlertType] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function submit(e: any) {
    e.preventDefault();
    if (name && email && message) {
      setLoading(true);
      const serviceId = "service_5xtoct2";
      const templateId = "template_sb5m2xu";
      const userId = "user_qCLU3pBlixApSf363vf4F";
      const templateParams = {
        name,
        email,
        message,
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, userId);
        activateAlert("success", "Your message has been sent!");
      } catch (e) {
        //@ts-ignore
        activateAlert("danger", "Something went wrong: " + e.text);
      }

      setName("");
      setEmail("");
      setMessage("");
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

  return (
    <>
      <div className="contact" id="contact">
        <h2 className="h1 mb-5 hr mt-5 mt-md-0">{"<Contact />"}</h2>
        <Form onSubmit={submit} className="p-5">
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
                style={{ height: "400px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
                required
              />
            </FloatingLabel>
          </Form.Group>
          {showAlert && <Alert variant={alertType}>{alertMsg}</Alert>}
          <Button variant="secondary" type="submit" disabled={loading}>
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
