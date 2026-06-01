/* Server component — no "use client" here */
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact | AUTOHUB",
  description: "Get in touch — let's build something.",
};

export default function ContactPage() {
  return (
    <main className="page">
      <div className="container">
        <ContactForm />
      </div>
    </main>
  );
}
