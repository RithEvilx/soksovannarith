import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="sovannarith22317@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/RithEvilx"
          />
          <ContactInfoCard
            iconUrl="./assets/images/telegram-icon.svg"
            text="https://t.me/rithevil"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
