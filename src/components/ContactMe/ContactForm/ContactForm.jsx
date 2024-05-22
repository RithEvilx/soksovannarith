import "./ContactForm.css";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target); // Get form data
    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const email = formData.get("email");
    const message = formData.get("message");
    const mailtoLink = `mailto:sovannarith22317@gmail.com?subject=Message from ${firstName} ${lastName}&body=${message}%0D%0A%0D%0AReply to: ${email}`;
    window.location.href = mailtoLink; // Redirect to email client with populated fields
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows={3}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
